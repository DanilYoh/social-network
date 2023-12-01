import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { Pagination } from '@/common/Pagination';
import { fetchTickets } from '@/store/thunks/tickets.thunk';

const TicketsPagination = () => {
  const { tickets } = useAppSelector((state) => state.tickets);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTickets(0)).catch((err) => err as Error);
  }, []);
  const handlePageClick = (e: { selected: number }) => {
    dispatch(fetchTickets(e.selected)).catch((err) => err as Error);
  };
  return (
    <Pagination
      handlePageClick={handlePageClick}
      pageCount={tickets.totalPages}
      initialPage={tickets.number}
    />
  );
};
export default TicketsPagination;
