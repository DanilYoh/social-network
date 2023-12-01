import ReactPaginate from 'react-paginate';
import { FC } from 'react';

import { NextPage } from '@/common/NextPage';

export interface IPagination {
  handlePageClick(e: { selected: number }): void;

  initialPage: number;
  pageCount: number;
}

const Pagination: FC<IPagination> = ({
  handlePageClick,
  pageCount,
  initialPage,
}) => (
  <ReactPaginate
    breakLabel="..."
    previousLabel
    nextLabel={<NextPage />}
    onPageChange={handlePageClick}
    pageRangeDisplayed={4}
    marginPagesDisplayed={1}
    initialPage={initialPage}
    pageCount={pageCount}
    className="custom-pagination"
  />
);
export default Pagination;
