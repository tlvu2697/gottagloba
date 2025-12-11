"use server";

import type {
  GetLearnWorldsBundlesResponse,
  LearnWorldsBundle,
} from "@/data/learnworlds/types/bundle";
import type { LearnWorldsCourse } from "@/data/learnworlds/types/course";
import type {
  LearnWorldsError,
  OAuthTokenResponse,
} from "@/data/learnworlds/types/generic";
import { env } from "@/env.js";

/**
 * Cached access token to avoid unnecessary OAuth requests
 */
let cachedToken: {
  token: string;
  expiresAt: number;
} | null = null;

/**
 * Get OAuth access token from LearnWorlds API
 * Uses client_credentials grant type
 */
async function getAccessToken(): Promise<string> {
  // Check if cached token is still valid (with 5 minute buffer)
  if (cachedToken && cachedToken.expiresAt > Date.now() + 5 * 60 * 1000) {
    return cachedToken.token;
  }

  const baseUrl = env.LEARNWORLDS_BASE_URL;
  const clientId = env.LEARNWORLDS_CLIENT_ID;
  const clientSecret = env.LEARNWORLDS_CLIENT_SECRET;

  const tokenUrl = `${baseUrl}/oauth/token`;

  const params = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorData = (await response
      .json()
      .catch(() => ({}))) as LearnWorldsError;
    throw new Error(
      `Failed to authenticate with LearnWorlds API: ${errorData.error_description ?? errorData.error ?? response.statusText}`,
    );
  }

  const tokenData = (await response.json()) as OAuthTokenResponse;

  // Cache the token
  cachedToken = {
    token: tokenData.access_token,
    expiresAt: Date.now() + (tokenData.expires_in - 300) * 1000, // Subtract 5 minutes buffer
  };

  return tokenData.access_token;
}

/**
 * Make an authenticated request to LearnWorlds API
 * Includes both Authorization (Bearer token) and Lw-Client (client ID) headers as required
 */
async function authenticatedFetch(
  endpoint: string,
  options: RequestInit = {},
): Promise<Response> {
  const accessToken = await getAccessToken();
  const baseUrl = env.LEARNWORLDS_BASE_URL;
  const clientId = env.LEARNWORLDS_CLIENT_ID;
  const url = endpoint.startsWith("http") ? endpoint : `${baseUrl}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Lw-Client": clientId,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = (await response
      .json()
      .catch(() => ({}))) as LearnWorldsError;
    throw new Error(
      `LearnWorlds API error: ${errorData.error_description ?? errorData.error ?? errorData.message ?? response.statusText} (Status: ${response.status})`,
    );
  }

  return response;
}

/**
 * Get all courses from LearnWorlds API
 *
 * @returns Promise resolving to an array of courses
 * @throws Error if the API request fails
 *
 * @example
 * ```ts
 * const courses = await getAllCourses();
 * console.log(`Found ${courses.length} courses`);
 * ```
 */
export async function getAllCourses(): Promise<LearnWorldsCourse[]> {
  try {
    const response = await authenticatedFetch("/v2/courses");
    const courses = (await response.json()) as LearnWorldsCourse[];

    return courses;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch courses from LearnWorlds: ${error.message}`,
      );
    }
    throw error;
  }
}

/**
 * Get a single course by ID from LearnWorlds API
 *
 * @param courseId - The ID of the course to retrieve
 * @returns Promise resolving to a course object
 * @throws Error if the API request fails or course is not found
 *
 * @example
 * ```ts
 * const course = await getCourseById("course-123");
 * console.log(course.title);
 * ```
 */
export async function getCourseById(
  courseId: string,
): Promise<LearnWorldsCourse> {
  try {
    const response = await authenticatedFetch(`/v2/courses/${courseId}`);
    const course = (await response.json()) as LearnWorldsCourse;

    return course;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch course ${courseId} from LearnWorlds: ${error.message}`,
      );
    }
    throw error;
  }
}

/**
 * Get all bundles from LearnWorlds API
 * Fetches all bundles iteratively across all pages
 *
 * @returns Promise resolving to a response with all bundles
 * @throws Error if the API request fails
 *
 * @example
 * ```ts
 * const bundles = await getAllBundles();
 * console.log(`Found ${bundles.data.length} bundles`);
 * ```
 */
export async function getAllBundles(): Promise<LearnWorldsBundle[]> {
  try {
    // Fetch first page to get total pages
    const firstPageResponse = (await (
      await authenticatedFetch("/v2/bundles?page=1")
    ).json()) as GetLearnWorldsBundlesResponse;

    const { meta } = firstPageResponse;
    const { totalPages } = meta;

    // If there's only one page, return it
    if (totalPages === 1) {
      return firstPageResponse.data;
    }

    // Fetch all remaining pages in parallel
    const pagePromises: Promise<GetLearnWorldsBundlesResponse>[] = [];
    for (let page = 2; page <= totalPages; page++) {
      pagePromises.push(
        authenticatedFetch(`/v2/bundles?page=${page}`).then(
          (response) => response.json() as Promise<GetLearnWorldsBundlesResponse>,
        ),
      );
    }

    const remainingPages = await Promise.all(pagePromises);

    // Combine all bundles from all pages
    const allBundles: LearnWorldsBundle[] = [
      ...firstPageResponse.data,
      ...remainingPages.flatMap((response) => response.data),
    ];

    // Return combined response
    return allBundles;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch bundles from LearnWorlds: ${error.message}`,
      );
    }
    throw error;
  }
}

/**
 * Get a single bundle by ID from LearnWorlds API
 *
 * @param bundleId - The ID of the bundle to retrieve
 * @returns Promise resolving to a bundle object
 * @throws Error if the API request fails or bundle is not found
 *
 * @example
 * ```ts
 * const bundle = await getBundleById("bundle-123");
 * console.log(bundle.title);
 * ```
 */
export async function getBundleById(
  bundleId: string,
): Promise<LearnWorldsBundle> {
  try {
    const response = await authenticatedFetch(`/v2/bundles/${bundleId}`);
    const bundle = (await response.json()) as LearnWorldsBundle;

    return bundle;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch bundle ${bundleId} from LearnWorlds: ${error.message}`,
      );
    }
    throw error;
  }
}
