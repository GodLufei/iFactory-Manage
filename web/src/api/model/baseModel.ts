export interface BasicPageParams {
  pageIndex: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  data: T;
  message: string;
}

export interface Page extends BasicPageParams {
  total: number;
}

export interface Pagable {
  page: number;
  pageSize: number;
}
