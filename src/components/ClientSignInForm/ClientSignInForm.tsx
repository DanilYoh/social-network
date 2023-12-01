import React, { useState } from 'react';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Flex,
  Box,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  useTheme,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

import { AuthServices } from '@services/auth.services';
import { ClientTheme } from '@interfaces/client-theme.interfaces';
import { useAppDispatch } from '@/hooks';
import { ILoginData, IResponseLogin } from '@interfaces/login.interfaces';
import { login } from '@/store/user.slice';
import { setStorage } from '@utils/storage';

const SigningSchema = Yup.object().shape({
  email: Yup.string().email('Введите email').required('Введите email'),
  password: Yup.string().required('Введите пароль'),
});

const ClientSignInForm = () => {
  const { client }: ClientTheme = useTheme();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SigningSchema,
    onSubmit: (values) => {
      const loginData: ILoginData = {
        password: values.password,
        username: values.email,
      };
      setSubmitLoading(true);
      dispatch(login(values));
      AuthServices.LoginApi(loginData)
        .then((res) => res.data as IResponseLogin)
        .then((data) => {
          setStorage('token', data.accessToken);
          setStorage('refreshToken', data.refreshToken);
        })
        .then(() => {
          navigate('/');
          setSubmitLoading(false);
        })
        .catch((err) => err as Error);
    },
  });

  const fields = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Пароль',
      name: 'password',
      type: showPassword ? 'text' : 'password',
    },
  ];

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box w="100%">
      <form onSubmit={formik.handleSubmit} data-testid="client-sign-in-form">
        <Heading fontSize="2.25rem" mb="0.85rem">
          Вход
        </Heading>
        <VStack spacing="1.8rem">
          {fields.map(({ label, name, type }) => (
            <FormControl
              id={name}
              key={name}
              isInvalid={
                !!formik.touched[name as keyof typeof formik.values] &&
                !!formik.errors[name as keyof typeof formik.values]
              }
            >
              <FormLabel
                sx={{
                  color: client.black['8'],
                  fontSize: '0.75rem',
                  lineHeight: '1.25rem',
                }}
              >
                {label}
              </FormLabel>
              <InputGroup>
                <Input
                  type={type}
                  placeholder={`Введите свой ${label.toLowerCase()}`}
                  {...formik.getFieldProps(name)}
                />
                {name === 'password' && (
                  <InputRightElement>
                    <IconButton
                      icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                      variant="ghost"
                      onClick={handleTogglePassword}
                      aria-label="Toggle password visibility"
                      data-testid="password-toggle"
                    />
                  </InputRightElement>
                )}
              </InputGroup>
              <FormErrorMessage
                style={{ position: 'absolute', bottom: '-1.25rem' }}
              >
                {formik.errors[name as keyof typeof formik.values]}
              </FormErrorMessage>
            </FormControl>
          ))}
          <Flex>
            <Text fontSize="sm">
              Еще нет аккаунта?
              <Link as={RouterLink} to="/new-sign-up">
                &nbsp;
                <Text as="u" fontSize="md">
                  Зарегистрируйтесь
                </Text>
              </Link>
            </Text>
          </Flex>
          <Button
            bg={client.primary['5']}
            color={client.white}
            type="submit"
            p="0.625rem 1rem"
            isDisabled={!formik.isValid || !formik.dirty}
            height="2.5rem"
            isLoading={submitLoading}
            _hover={{ bg: client.primary['4'] }}
            _active={{ bg: client.primary['7'] }}
          >
            Войти
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ClientSignInForm;
