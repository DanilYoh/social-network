import React, { useState } from 'react';
import {
  Box,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  VStack,
  Select,
  FormErrorMessage,
  Heading,
  useTheme,
  Link,
  Text,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import * as Yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';

import { ClientTheme } from '@interfaces/client-theme.interfaces';
import { useAppDispatch } from '@/hooks';
import { postSignUp } from '@/store/thunks/signup.thunk';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Неверный формат email').required('Введите email'),
  secretQuestion: Yup.string().required('Выберите вопрос'),
  secretAnswer: Yup.string().required('Введите ответ на секретный вопрос'),
  password: Yup.string()
    .min(8, 'Пароль должен состоять минимум из 8 символов')
    .required('Введите пароль'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Пароли не совпадают')
    .required('Подтвердите пароль'),
  agreement: Yup.boolean().oneOf(
    [true],
    'Вы должны прочитать и согласиться с условиями пользовательского соглашения'
  ),
});

const secretQuestions = [
  'Как звали вашего первого учителя?',
  'Как называлась ваша первая кошка?',
  'Какой город вы считаете своим родным?',
];

const RegistrationForm = () => {
  const { client }: ClientTheme = useTheme();

  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      secretQuestion: '',
      secretAnswer: '',
      password: '',
      confirmPassword: '',
      agreement: false,
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      setSubmitLoading(true);
      try {
        await dispatch(
          postSignUp({
            answerQuestion: values.secretQuestion,
            email: values.email,
            password: values.password,
            roles: [
              {
                name: 'USER',
              },
            ],
            securityQuestion: values.secretQuestion,
          })
        );
        setSubmitLoading(false);
      } catch (err) {
        throw new Error();
      }
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box w="100%">
      <form onSubmit={formik.handleSubmit} data-testid="client-sign-up-form">
        <Heading fontSize="2.25rem" mb="0.85rem">
          Регистрация
        </Heading>
        <VStack spacing="1.8rem">
          <FormControl
            id="email"
            isInvalid={!!formik.touched.email && !!formik.errors.email}
            data-testid="email-control"
          >
            <FormLabel
              sx={{
                color: client.black['8'],
                fontSize: '0.75rem',
                lineHeight: '1.25rem',
              }}
            >
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="Введите свой email"
              {...formik.getFieldProps('email')}
            />
            <FormErrorMessage
              style={{ position: 'absolute', bottom: '-1.25rem' }}
            >
              {formik.errors.email}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            id="secretQuestion"
            isInvalid={
              !!formik.touched.secretQuestion && !!formik.errors.secretQuestion
            }
          >
            <FormLabel
              sx={{
                color: client.black['8'],
                fontSize: '0.75rem',
                lineHeight: '1.25rem',
              }}
            >
              Секретный вопрос
            </FormLabel>
            <Select
              placeholder="Выберите вопрос"
              {...formik.getFieldProps('secretQuestion')}
            >
              {secretQuestions.map((question) => (
                <option key={nanoid()} value={question}>
                  {question}
                </option>
              ))}
            </Select>
            <FormErrorMessage
              style={{ position: 'absolute', bottom: '-1.25rem' }}
            >
              {formik.errors.secretQuestion}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            id="secretAnswer"
            isInvalid={
              !!formik.touched.secretAnswer && !!formik.errors.secretAnswer
            }
          >
            <FormLabel
              sx={{
                color: client.black['8'],
                fontSize: '0.75rem',
                lineHeight: '1.25rem',
              }}
            >
              Ответ на секретный вопрос
            </FormLabel>
            <Input
              type="text"
              placeholder="Введите свой ответ"
              {...formik.getFieldProps('secretAnswer')}
            />
            <FormErrorMessage
              style={{ position: 'absolute', bottom: '-1.25rem' }}
            >
              {formik.errors.secretAnswer}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            id="password"
            isInvalid={!!formik.touched.password && !!formik.errors.password}
          >
            <FormLabel
              sx={{
                color: client.black['8'],
                fontSize: '0.75rem',
                lineHeight: '1.25rem',
              }}
            >
              Пароль
            </FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Введите свой пароль"
                {...formik.getFieldProps('password')}
              />
              <InputRightElement>
                <IconButton
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  variant="ghost"
                  onClick={handleTogglePassword}
                  aria-label="Toggle password visibility"
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage
              style={{ position: 'absolute', bottom: '-1.25rem' }}
            >
              {formik.errors.password}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            id="confirmPassword"
            isInvalid={
              !!formik.touched.confirmPassword &&
              !!formik.errors.confirmPassword
            }
          >
            <FormLabel
              sx={{
                color: client.black['8'],
                fontSize: '0.75rem',
                lineHeight: '1.25rem',
              }}
            >
              Повторите пароль
            </FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Повторите свой пароль"
                {...formik.getFieldProps('confirmPassword')}
              />
              <InputRightElement>
                <IconButton
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  variant="ghost"
                  onClick={handleTogglePassword}
                  aria-label="Toggle password visibility"
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage
              style={{ position: 'absolute', bottom: '-1.25rem' }}
            >
              {formik.errors.confirmPassword}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <Checkbox
              id="agreement"
              isChecked={formik.values.agreement}
              onChange={formik.handleChange}
            >
              <Text fontSize="0.746rem">
                Я прочитал(-a){' '}
                <Link
                  href="/"
                  color={client.primary['4']}
                  textDecoration="underline"
                >
                  условия пользовательского соглашения
                </Link>{' '}
                и согласен(-на) с ними
              </Text>
            </Checkbox>
            <FormErrorMessage
              style={{ position: 'absolute', bottom: '-1.25rem' }}
            >
              {formik.errors.agreement}
            </FormErrorMessage>
          </FormControl>

          <Button
            bg={client.primary['5']}
            color={client.white}
            type="submit"
            p="0.625rem 1rem"
            disabled={!formik.isValid || !formik.dirty}
            height="2.5rem"
            isLoading={submitLoading}
            _hover={{ bg: client.primary['4'] }}
            _active={{ bg: client.primary['7'] }}
          >
            Зарегистрироваться
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default RegistrationForm;
