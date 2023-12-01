export interface ISort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface IPageable {
  sort: ISort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface IEntitiesResponse<T> {
  content: T;
  totalPages: number;
  pageable: IPageable;
  last: boolean;
  first: boolean;
  totalElements: number;
  size: number;
  numberOfElements: number;
  number: 0;
  empty: boolean;
  sort: ISort;
}
