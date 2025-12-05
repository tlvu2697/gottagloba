type ImageFormatSize = "large" | "small" | "medium" | "thumbnail";

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface StrapiImage {
  id: number;
  name: string;
  documentId: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Record<ImageFormatSize, ImageFormat>;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
