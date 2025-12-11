export const COURSE_EXPIRES_TYPE = {
  DAYS: "days",
  WEEKS: "weeks",
  MONTHS: "months",
} as const;

export const COURSE_DROP_FEED = {
  DATE: "date",
  DAYS: "days",
  NONE: "none",
} as const;

export const COURSE_ACCESS = {
  PAID: "paid",
  FREE: "free",
  COMING_SOON: "coming_soon",
  ENROLLMENT_CLOSED: "enrollment_closed",
  PRIVATE: "private",
  DRAFT: "draft",
} as const;

type CourseExpiresType =
  (typeof COURSE_EXPIRES_TYPE)[keyof typeof COURSE_EXPIRES_TYPE];

type CourseDropFeed = (typeof COURSE_DROP_FEED)[keyof typeof COURSE_DROP_FEED];

type CourseAccess = (typeof COURSE_ACCESS)[keyof typeof COURSE_ACCESS];

/**
 * LearnWorlds Course Schema
 * Based on LearnWorlds API documentation: https://www.learnworlds.dev/docs/api/2b71fe6ae1e94-course
 */
export type LearnWorldsCourse = {
  id: string;
  title: string;
  expires?: number;
  expiresType: CourseExpiresType;
  afterPurchase?: {
    type?: string;
    settings?: Record<string, unknown>;
  };
  categories: string[];
  description?: string;
  label?: string;
  courseImage?: string;
  original_price: number;
  discount_price: number;
  final_price: number;
  dropFeed: CourseDropFeed;
  identifiers: {
    google_store_id: string;
    apple_store_id: string;
  };
  access: CourseAccess;
  created: number;
  modified: number;
  [key: string]: unknown; // Allow for additional fields from the API
};
