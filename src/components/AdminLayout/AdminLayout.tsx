import { FC, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router-dom';

import { AdminFooter } from '@components/AdminFooter';
import { IChildrenProps } from '@/interfaces/app.interfaces';
import { MenuAdminHeader } from '@components/MenuAdminHeader';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { UserData } from '@/interfaces/signin-form.interfaces';
import { getStorage } from '@/utils/storage';
import { login } from '@/store/user.slice';
import { ModalManager } from '@components/ModalCommon/ModalManager';
import { PopMessageManager } from '@components/PopMessageManager';

const AdminLayout: FC<IChildrenProps> = () => {
  const dispatch = useAppDispatch();
  const { email, password }: UserData = useAppSelector((state) => state.user);
  const token = getStorage('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/admin');
    } else {
      dispatch(login({ email, password }));
    }
  }, [dispatch, email, navigate, password, token]);

  return (
    <>
      <PopMessageManager />
      <ModalManager />
      <MenuAdminHeader />
      <Flex
        data-testid="admin-layout"
        as="main"
        flexDirection="column"
        mt="4.6875rem"
        flex="1 0 auto"
      >
        <Outlet />
      </Flex>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
