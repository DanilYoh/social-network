import { Box, Checkbox, Container, Flex, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useAppDispatch } from '@/hooks';
import { AppButton } from '@common/AppButton';
import { FormInput } from '@common/FormInput';
import { PopUp } from '@components/PopUp';
import { FormProps, UserData } from '@interfaces/signin-form.interfaces';
import { userSlice } from '@/store/user.slice';
import { AuthServices } from '@services/auth.services';
import { getStorage, setStorage } from '@utils/storage';

const SignInForm: FC<FormProps> = () => {
  const { login } = userSlice.actions;
  // const { usersFetchSuccess } = usersSlice.actions;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('please complete field')
      .matches(/@/, 'your email address has to contain: @'),
    password: Yup.string()
      .required('please complete field')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'you have entered an invalid username or password'
      ),
  });
  const savedUser = getStorage('user');
  let user: UserData = { isLogin: false, email: '', password: '' };
  if (typeof savedUser === 'string') {
    user = (JSON.parse(savedUser) as UserData) || '';
  }

  return (
    <Formik
      initialValues={{
        email: user.email,
        password: user.password,
        rememberMe: false,
        answerQuestion: '',
        securityQuestion: '',
        id: 0,
        roles: [{ id: 0, name: '' }],
        birthDate: '',
        firstName: '',
        lastName: '',
        passport: {
          gender: '',
          middleName: '',
          passportIssuingCountry: '',
          passportIssuingDate: '',
          serialNumberPassport: '',
        },
        '@type': '',
        phoneNumber: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        if (values.rememberMe) {
          setStorage(
            'user',
            JSON.stringify({ email: values.email, password: values.password })
          );
        }
        await AuthServices.LoginApi({
          password: values.password,
          username: values.email,
        });
        navigate('/');
        dispatch(login(values));
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
                onChange={handleChange}
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

export default SignInForm;
