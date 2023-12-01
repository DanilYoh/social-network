import { Flex, Spinner, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { TStatus } from '@interfaces/status.interfaces';

interface ITableWrapper extends PropsWithChildren {
  status: TStatus;
  error: string;
}

const TableWrapper: FC<ITableWrapper> = ({ children, status, error }) => {
  switch (status) {
    case 'loading':
      return (
        <Flex justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      );
    case 'rejected':
      return (
        <Flex padding="3.125rem" justifyContent="center">
          <Text>{error}</Text>
        </Flex>
      );
    case 'resolved': {
      return children;
    }
    default:
      throw new Error('Unknown status');
  }
};
export default TableWrapper;
