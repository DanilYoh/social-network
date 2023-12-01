import { render } from '@testing-library/react';

import { TableWrapper } from '@components/TicketsCommon/TableWrapper';
import { TableWrapperMocks } from '@interfaces/table-wrapper-mocks.interfaces';
import { tableWrapperMocks } from '@/mocks/table-wrapper.mocks';
import { mockConsoleError } from '@utils/mock-console-error.utils';

const setup = ({ status, error }: TableWrapperMocks) => {
  const utils = render(
    <TableWrapper status={status} error={error}>
      Body
    </TableWrapper>
  );
  const loading = utils.queryByText(/Loading.../i);
  const resolved = utils.queryByText(/Body/i);
  const rejected = utils.queryByText(new RegExp(error, 'i'));
  return { ...utils, loading, resolved, rejected };
};

describe('TableWrapper', () => {
  it('Data is loaded', () => {
    const mock = tableWrapperMocks.resolved;
    const { resolved } = setup(mock);
    expect(resolved).not.toBeNull();
  });
  it('Data is loading', () => {
    const mock = tableWrapperMocks.loading;
    const { loading } = setup(mock);
    expect(loading).not.toBeNull();
  });
  it('Data is rejected', () => {
    const mock = tableWrapperMocks.rejected;
    const { rejected } = setup(mock);
    expect(rejected).not.toBeNull();
  });
  it('Status is invalid', () => {
    const mock = tableWrapperMocks.invalid;
    mockConsoleError(() =>
      expect(() => setup(mock)).toThrowError('Unknown status')
    );
  });
});
