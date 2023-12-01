import { MenuAdminHeader } from '@components/MenuAdminHeader';
import { Footer } from '@components/Footer';
import { IChildrenProps } from '@/interfaces/app.interfaces';

export const AdminWrapper = ({ children }: IChildrenProps) => (
  <>
    <MenuAdminHeader />
    {children}
    <Footer />
  </>
);
