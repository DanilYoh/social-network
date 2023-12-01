import type { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { AdminFooter } from '@components/AdminFooter';
import { IChildrenProps } from '@/interfaces/app.interfaces';
import { MenuAdminHeader } from '@components/MenuAdminHeader';

const AdminLayout: FC<IChildrenProps> = () => (
  <>
    <MenuAdminHeader />
    <Flex as="main" flexDirection="column" mt="4.6875rem" flex="1 0 auto">
      <Outlet />
    </Flex>
    <AdminFooter />
  </>
);

export default AdminLayout;
