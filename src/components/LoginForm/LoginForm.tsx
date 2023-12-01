import { Box, Checkbox, Container, Flex, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { AuthServices } from '@services/auth.services';
import { login } from '@/store/user.slice';
import { useAppDispatch } from '@/hooks';
import { AppButton } from '@common/AppButton';
import { FormInput } from '@common/FormInput';
import { PopUp } from '@components/PopUp';
import { FormProps } from '@interfaces/signin-form.interfaces';
import { getStorage, setStorage, clickCheckbox } from '@utils/storage';
import {
  IAdminData,
  ILoginData,
  IResponseLogin,
} from '@interfaces/login.interfaces';

const LoginForm: FC<FormProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('please complete field')
      .matches(/@/, 'your email address has to contain: @'),
    password: Yup.string().required('please complete field'),
  });

  const admin: IAdminData = {
    isLogin: false,
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={{
        email: admin.email,
        password: admin.password,
        rememberMe: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const loginData: ILoginData = {
          password: values.password,
          username: values.email,
        };
        dispatch(login(values));
        AuthServices.LoginApi(loginData)
          .then((res) => res.data as IResponseLogin)
          .then((data) => {
            setStorage('token', data.accessToken);
            setStorage('refreshToken', data.refreshToken);
          })
          .then(() => {
            navigate('/admin/users');
          })
          .catch((err) => err as Error);
      }}
    >
      {({ handleSubmit, handleChange, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Container p="0rem">
            <VStack spacing="1.2525rem" align="stretch" mt="1.875rem">
              <FormInput
                label="E-mail Address"
                focus
                error={errors.email}
                touch={touched.email}
                id="email"
                type="email"
              />
              <FormInput
                label="Password"
                error={errors.password}
                touch={touched.password}
                id="password"
                type="password"
              />
            </VStack>
            <Flex
              justify="space-between"
              mb={errors.password && errors.email ? '2.8125rem' : '3.435rem'}
              mt={errors.password && errors.email ? '2.175rem' : '2.8125rem'}
            >
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                iconSize="0.1275rem"
                size="md"
                borderColor="#868484"
                ml="0.3075rem"
                defaultChecked={Boolean(getStorage('admin'))}
                onClick={clickCheckbox}
                onChange={(e) => {
                  handleChange(e);
                  clickCheckbox();
                }}
              >
                Remember me
              </Checkbox>
              <PopUp />
            </Flex>
            <Box textAlign="right" mb="3.6225rem">
              <AppButton
                text="Sign In"
                type="submit"
                bgColor="#E32E22"
                w="9rem"
                color="#FFF"
                boxShadow="0rem 0.2475rem 0.2475rem rgba(0, 0, 0, 0.25)"
                fontSize="0.8775rem"
              />
            </Box>
          </Container>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
