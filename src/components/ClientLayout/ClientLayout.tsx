import React from 'react';
import { Outlet } from 'react-router-dom';

import { ClientHeader } from '@components/ClientHeader';
import { ClientFooter } from '@components/ClientFooter';

const ClientLayout = () => (
  <>
    <ClientHeader />
    <Outlet />
    <ClientFooter />
  </>
);

export default ClientLayout;
