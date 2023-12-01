import { Button, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  AgeForm,
  ContactsForm,
  CountryForm,
  NamesForm,
  PasswordForm,
  SecretQForm,
} from '@common/SignUp';
import Edit from '@icons/edit';
import { IFormik, IProps } from '@interfaces/formik.interfaces';
import { PassengerServices } from '@services/passenger.services';
import { useAppDispatch } from '@/hooks';
import { userSlice } from '@/store/user.slice';

const SignUpForm: FC<{ Component?: FC<IProps> | null }> = ({ Component }) => {
  const navigate = useNavigate();
  const initialValues: IFormik = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    day: '',
    month: '',
    year: '',
    passportIssuingCountry: '',
    phone: '',
    phoneCode: '',
    question: '',
    questionAnswer: '',
    phoneGroup: '',
  };

  const dispatch = useAppDispatch();
  const { login } = userSlice.actions;

  return (
    <Flex
      w={{ sm: '100%', md: '100%', dt: '50vw' }}
      pt="3.125rem"
      pb="5.625rem"
      pl={{ sm: '0.625rem', dt: 'calc(0.128*58.26%)' }}
      pr={{ sm: '0.625rem', dt: 'calc( 0.09858 *58.26%)' }}
      m={{ sm: 'auto', dt: '0' }}
      flexDirection="column"
      bgColor="#FFF"
      position="relative"
    >
      <Formik
        enableReinitialize={false}
        initialValues={initialValues}
        onSubmit={async (values) => {
          await PassengerServices.postNewPassenger(values);
          dispatch(login(values));
          navigate('/');
        }}
      >
        {({ errors, isValid, handleSubmit, handleBlur, values, touched }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <VStack spacing={0} align="flex-start">
              <Heading
                color="#0A66C2"
                fontFamily="Open Sans"
                fontWeight="400"
                fontSize="1.5rem"
                lineHeight="2.0625rem"
              >
                Member Profile Details
              </Heading>
              {Component ? (
                <Component values={values} errors={errors} touched={touched} />
              ) : (
                <>
                  <Button
                    aria-label="edit"
                    w="3.125rem"
                    bg="none"
                    _hover={{ bg: 'none' }}
                    _active={{ bg: 'none' }}
                    alignSelf="end"
                    transform="translate(-0.125rem,-0.6875rem)"
                  >
                    <Edit w="1.25rem" h="1.25rem" />
                    <Text
                      fontFamily="Open Sans"
                      fontWeight="400"
                      fontSize="0.875rem"
                      lineHeight="1.1875rem"
                      display="flex"
                      color="#0A66C2"
                    >
                      Edit
                    </Text>
                  </Button>
                  <NamesForm
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                  <AgeForm values={values} errors={errors} touched={touched} />
                  <CountryForm
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                  <ContactsForm
                    errors={errors}
                    values={values}
                    touched={touched}
                  />
                  <Divider
                    orientation="horizontal"
                    h="0.125rem"
                    w="calc(1.09375* 100%)"
                    bg="#D9D9D9"
                    opacity="1"
                    transform="translate(-5%,0.625rem)"
                    mt="1.875rem !important"
                    mb="3.125rem !important"
                  />
                  <PasswordForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                  />
                  <SecretQForm
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                  <Flex
                    alignSelf="flex-end"
                    color="#0A66C2"
                    fontFamily="Open Sans"
                    fontSize="0.875rem"
                    lineHeight="1.1875rem"
                    mt="2.5rem !important"
                  >
                    By clicking “Create Account”, I agree to&nbsp;{' '}
                    <Link
                      aria-label="terms and conditions"
                      to="/rules"
                      style={{ textDecoration: 'underline' }}
                    >
                      {' '}
                      Terms and Conditions
                    </Link>
                    .
                  </Flex>
                </>
              )}

              <Button
                type="submit"
                isDisabled={!isValid}
                bg="#E32E22"
                color="white"
                fontFamily="Open Sans"
                fontWeight="600"
                fontSize="0.875rem"
                lineHeight="1.1875rem"
                w="7.5rem"
                h="2.125rem"
                position="absolute"
                bottom="1.875rem"
                right="3.75rem"
                aria-label="create account"
                data-testid="create"
                _hover={{
                  background: '#E32E22',
                  color: 'white',
                  opacity: '0.8',
                }}
              >
                Create Account
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

SignUpForm.defaultProps = {
  Component: null,
};

export default SignUpForm;
