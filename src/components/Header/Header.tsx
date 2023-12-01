import { Button, Divider, Flex, Text } from '@chakra-ui/react';
import { useEffect, type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks/';
import { AppButton } from '@common/AppButton';
import { Search, World } from '@common/icons';
import { Logo } from '@common/Logo';
import { UserIcon } from '@common/UserIcon';
import { IChildrenProps } from '@/interfaces/app.interfaces';
import { UserData } from '@interfaces/signin-form.interfaces';
import { login, logout } from '@/store/user.slice';
import { getStorage } from '@utils/storage';
import { MenuAdminHeader } from '@/components/MenuAdminHeader';

const Header: FC<IChildrenProps> = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const { isLogin, email }: UserData = useAppSelector((state) => state.user);

  useEffect(() => {
    const savedUser = getStorage('user');
    if (typeof savedUser === 'string') {
      dispatch(login(JSON.parse(savedUser) as UserData));
    }
  }, [dispatch]);

  return (
    <Flex
      as="header"
      w="100%"
      bg="#04396d"
      h="4.6875rem"
      justify="space-between"
      zIndex="1001"
      columnGap={{ sm: '0.6248rem', smp: '0' }}
      pl={['0rem', '0.6248rem']}
      pr={['0rem', '0.6248rem']}
      align="center"
    >
      <Link to="/home">
        <Logo />
      </Link>

      <Flex
        width={pathname === '/aircraft-list' ? '100%' : 'auto'}
        alignItems="center"
        columnGap="0.6877rem"
        pr="2.625rem"
      >
        {pathname !== '/aircraft-list' &&
          pathname !== '/additional-services' &&
          pathname !== '/search/results' && (
            <>
              <Button
                display={['none', 'none', 'inherit', 'inherit']}
                bg="none"
                _hover={{ bg: 'none' }}
                _active={{ bg: 'none' }}
                transform="translateX(0.6875rem)"
                aria-label="search"
              >
                <Search />
              </Button>
              <AppButton
                icon={
                  <World
                    className="world-img"
                    transform="translate(-0.6877rem, -0.0622rem)"
                  />
                }
                text="SWITZERLAND - EN - CHF"
                type="button"
                w="12.5002rem"
                fontSize="0.75rem"
                bgColor="white"
                display={['none', 'none', 'inherit', 'inherit']}
                pl="1.6875rem"
              />
              {!isLogin ? (
                <>
                  <Link to="/sign-up">
                    <AppButton
                      text="SIGN-UP"
                      fontSize="0.75rem"
                      type="button"
                      w={['3.75rem', '6.2497rem']}
                      bgColor="#FFF"
                    />
                  </Link>
                  <Link to="/sign-in">
                    <AppButton
                      icon={<UserIcon />}
                      text="SIGN-IN"
                      w="6.2497rem"
                      fontSize="0.75rem"
                      bgColor="#FFF"
                      type="button"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Text
                    textAlign="right"
                    color="#FFF"
                    verticalAlign="bottom"
                    m="2.0625rem 0.6877rem auto auto"
                    textTransform="uppercase"
                  >
                    {email}
                  </Text>
                  <AppButton
                    text="LOG-OUT"
                    w="6.2497rem"
                    bgColor="#FFF"
                    type="button"
                    onClickEvent={() => dispatch(logout())}
                  />
                </>
              )}
            </>
          )}
        {(pathname === '/additional-services' ||
          pathname === '/search/results') && (
          <Flex>
            <Button
              type="button"
              fontWeight="700"
              fontSize="0.8752rem"
              height="1.1872rem"
              color="#FFF"
              mt="auto"
              mb="1.0425rem"
              backgroundColor="transparent"
              _hover={{
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              }}
              _active={{
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              }}
              _after={{
                content: '""',
                border: 'solid #fff',
                borderWidth: '0 0.1425rem 0.1425rem 0',
                display: 'inline-block',
                padding: '0.1425rem',
                transform: 'rotate(45deg) translate(0.3rem, -0.15rem)',
                marginTop: '0.75rem',
                pointerEvents: 'none',
              }}
              p={0}
              aria-label="currency"
              display={['none', 'none', 'flex', 'flex']}
            >
              CHF
            </Button>
            <Divider
              display={['none', 'none', 'inherit', 'inherit']}
              orientation="vertical"
              w="0.0625rem"
              h="3.6877rem"
              bg="#d9d9d9"
              ml="0.375rem"
              mr="0.5002rem"
              transform="translateX(0.0625rem)"
            />
            <Link
              to="/help"
              style={{
                display: 'block',
                marginTop: 'auto',
                marginBottom: '1.125rem',
              }}
            >
              <Text
                display={['none', 'none', 'flex', 'flex']}
                fontWeight="700"
                fontSize="0.8752rem"
                lineHeight="1.1872rem"
                color="#FFF"
                aria-label="link to help"
                alignSelf="end"
                _hover={{ textDecoration: 'underline' }}
              >
                HELP
              </Text>
            </Link>
          </Flex>
        )}
        {pathname === '/aircraft-list' && <MenuAdminHeader />}
      </Flex>
    </Flex>
  );
};

export default Header;
