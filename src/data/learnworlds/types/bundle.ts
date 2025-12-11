import type { LearnWorldsMetadata } from "@/data/learnworlds/types/generic";

export const BUNDLE_ACCESS = {
  PUBLIC: "public",
  DRAFT: "draft",
  PRIVATE: "private",
} as const;

type BundleAccess = (typeof BUNDLE_ACCESS)[keyof typeof BUNDLE_ACCESS];

type PaymentPlan = {
  id: string;
  name: string;
  description?: string;
  type: "with_upfront" | "without_upfront";
  order: number;
  firstAmount: number;
  amount: number;
  paymentsCount: number;
  subscriptionTrialType: "default" | "days" | "date";
  subscriptionIntervalType:
    | "7-days"
    | "14-days"
    | "15-day"
    | "42-days"
    | "1-month"
    | "2-month"
    | "3-month"
    | "6-month";
  status: "private" | "public" | "hidden" | "archived" | "deleted";
  isCancelable: boolean;
  validFrom?: number;
  validTo?: number;
  subscriptionTrialDays?: number;
  subscriptionTrialDate?: number;
  nameOverride: boolean;
  paymentPlanNameOverride?: string;
};

export type _LearnWorldsBundle = {
  id: string;
  title: string;
  products: {
    courses: string[];
  };
  image?: string;
  description?: string;
  access: BundleAccess;
  created: number;
  modified: number;
  afterPurchase: {
    type: string;
    settings: {
      url?: string;
      page?: string;
    };
  };
  price: number;
  paymentPlans: PaymentPlan[];
  [key: string]: unknown; // Allow for additional fields from the API
};

export type LearnWorldsBundle = {
  id: string;
  title: string;
  products?: {
    courses: string[];
  };
  image?: string;
  description?: string;
  access?: BundleAccess;
  created?: number;
  modified?: number;
  afterPurchase?: {
    type: string;
    settings: {
      url?: string;
      page?: string;
    };
  };
  price?: number;
  paymentPlans?: PaymentPlan[];
  [key: string]: unknown;
};

export type GetLearnWorldsBundlesResponse = {
  data: LearnWorldsBundle[];
  meta: LearnWorldsMetadata;
};
