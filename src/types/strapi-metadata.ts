export type StrapiPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiMetadata = {
  pagination: StrapiPagination;
};
