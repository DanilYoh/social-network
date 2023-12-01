import {
  Button,
  Flex,
  Text,
  Link as ChakraLink,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  Box,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IChildrenProps } from '@/interfaces/app.interfaces';
import { NewLogoBlue, Exit } from '@icons/index';
import { userSlice } from '@/store/user.slice';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { UserData } from '@interfaces/signin-form.interfaces';

const MenuAdminHeader: FC<IChildrenProps> = () => {
  const { isLogin }: UserData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { logout } = userSlice.actions;

  const tabList = [
    { name: 'Пассажиры', link: '/admin/users' },
    { name: 'Самолёты', link: '/admin/aircraft-list' },
    { name: 'Место назначения', link: '/admin/destinations' },
    { name: 'Часовые пояса', link: '/admin/time-zones' },
    { name: 'Рейсы', link: '/admin/flights' },
    { name: 'Билеты', link: '/admin/tickets' },
    { name: 'Бронирование', link: '/admin/booking' },
  ];

  const tabs = tabList.map((tab) => (
    <TabList key={JSON.stringify(tab)}>
      <Link to={tab.link}>
        <Tab
          padding="0"
          mr="2rem"
          fontSize="0.85rem"
          fontWeight="600"
          data-testid={`${tab.name}`}
        >
          {tab.name}
        </Tab>
      </Link>
    </TabList>
  ));

  return (
    <Flex as="header">
      <Flex
        as="nav"
        w="100%"
        bg="#F5F5F5"
        h="4.6rem"
        justify="space-between"
        position="fixed"
        zIndex="1001"
        pl={['0rem', '2.6rem']}
        pr={['0rem', '2.6rem']}
        align="center"
        shadow="0px 0px 20px rgba(0, 0, 0, 0.25)"
      >
        <ChakraLink
          as={Link}
          to="/home"
          _hover={{ textDecoration: 'none' }}
          mr="3.5rem"
        >
          <NewLogoBlue />
        </ChakraLink>

        {isLogin && (
          <Tabs display="flex" position="relative" variant="unstyled">
            {tabs}
            <TabIndicator
              mt="2.8rem"
              height="0.143rem"
              bg="#006FFF"
              borderRadius="1px"
            />
          </Tabs>
        )}

        <Flex>
          {isLogin ? (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                fontSize="0.85rem"
                mr="2.5rem"
                fontWeight="600"
                display="flex"
                flexWrap="nowrap"
              >
                +8 800 785 58 96
              </Text>

              <Button
                justifyContent="space-between"
                alignItems="center"
                width="6.8rem"
                backgroundColor="#006FFF"
                color="#FFF"
                cursor="pointer"
                _hover={{ backgroundColor: '#0052BD' }}
                onClick={() => dispatch(logout())}
                as={Link}
                to="/admin"
              >
                Выход
                <Exit />
              </Button>
            </Box>
          ) : (
            <Button
              backgroundColor="#006FFF"
              color="#FFF"
              cursor="pointer"
              _hover={{ backgroundColor: '#0052BD' }}
              as={Link}
              to="/home"
            >
              Главная страница
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MenuAdminHeader;
