import { Outlet, matchRoutes, useLocation } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';

import { IChildrenProps } from '@/interfaces/app.interfaces';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { MainImage } from '@common/MainImage';
import { FeedbackButton } from '@common/FeedbackButton';
import { MembershipLinks } from '@common/MembershipLinks';

const Layout: FC<IChildrenProps> = () => {
  const routes = [
    { path: '/sign-up' },
    { path: '/search/results' },
    { path: '/additional-services' },
    { path: '/aircraft-list' },
    { path: '/admin-users' },
    { path: '/baggage' },
    { path: '/payment' },
    { path: '/payment/thanks' },
  ];
  const useCurrentPath = () => {
    const location = useLocation();
    return matchRoutes(routes, location);
  };
  return (
    <>
      {!useCurrentPath() && <Header />}
      <Flex as="main" flexDirection="column" mt="4.6875rem" flex="1 0 auto">
        {!useCurrentPath() && <MainImage />}
        {!useCurrentPath() && (
          <MembershipLinks
            position={['absolute']}
            bottom="5.775rem"
            columnGap="0.375rem"
            justify="center"
            w="100%"
          />
        )}
        <FeedbackButton />
        <Outlet />
      </Flex>
      {!useCurrentPath() && <Footer />}
    </>
  );
};

export default Layout;
