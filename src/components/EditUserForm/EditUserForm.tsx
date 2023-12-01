import {
  Container,
  Button,
  VStack,
  Text,
  Spinner,
  Select,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { RootState } from '@/store';
import {
  EditOnSubmitHandler,
  IEditUsersData,
} from '@/interfaces/user-modal-date.interfaces';
import { FormInputModal } from '@/common/FormInputModal';

interface IModalFormProps {
  // eslint-disable-next-line react/require-default-props
  onSubmit?: EditOnSubmitHandler;
  // eslint-disable-next-line react/require-default-props
  error?: Error | null;
  // eslint-disable-next-line react/require-default-props
  loading?: boolean;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('please complete field'),
  confirmPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('please complete field')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9@#$%]).{8,}/,
      'Должно быть не меньше 8 символов, иметь хотя бы по одну заглавную букву и один символ'
    ),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .required('please complete field'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .required('please complete field'),
  middleName: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .required('please complete field'),
  phoneNumber: Yup.string()
    .required('please complete field')
    .matches(
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
      'Телефон должен быть в формате +79201234440'
    ),
  birthDate: Yup.string()
    .required('please complete field')
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      'Дата должна быть введена в формате "2021-03-25"'
    ),
  serialNumberPassport: Yup.string()
    .required('please complete field')
    .matches(
      /\d{4}\s\d{6}/,
      'Данные паспорта должны быть введены в формате "1234 567890"'
    ),
  passportIssuingDate: Yup.string()
    .required('please complete field')
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      'Дата должна быть введена в формате "2021-03-25"'
    ),
});

const CreateUserForm: FC<IModalFormProps> = ({ onSubmit, error, loading }) => {
  const userData = useSelector((state: RootState) => state.users.user);
  const initialValues: IEditUsersData = {
    email: userData?.email,
    confirmPassword: '',
    birthDate: userData?.birthDate,
    lastName: userData?.lastName,
    firstName: userData?.firstName,
    middleName: userData?.passport.middleName,
    serialNumberPassport: userData?.passport.serialNumberPassport,
    passportIssuingCountry: userData?.passport.passportIssuingCountry,
    phoneNumber: userData?.phoneNumber,
    passportIssuingDate: userData?.passport.passportIssuingDate,
    gender: userData?.passport.gender,
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        onSubmit?.(values, resetForm);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Container p="0rem">
            <VStack spacing="1.375rem" align="stretch">
              <FormInputModal
                label="Email"
                name="email"
                placeholder="example@mail.ru"
                error={errors.email}
                touch={touched.email}
              />
              <FormInputModal
                label="Пароль"
                name="confirmPassword"
                placeholder="Пароль"
                error={errors.confirmPassword}
                touch={touched.confirmPassword}
              />
              <FormInputModal
                label="Фамилия"
                name="lastName"
                placeholder="Леонова"
                error={errors.lastName}
                touch={touched.lastName}
              />
              <FormInputModal
                label="Имя"
                name="firstName"
                placeholder="Полина"
                error={errors.firstName}
                touch={touched.firstName}
              />
              <FormInputModal
                label="Отчество"
                name="middleName"
                placeholder="Рустамовна"
                error={errors.middleName}
                touch={touched.middleName}
              />
              <FormLabel
                fontSize="0.875rem"
                mb="0.875rem"
                color="#393939"
                fontWeight="600"
              >
                Пол
              </FormLabel>
              <Field
                height="2.5rem"
                fontSize="0.875rem"
                borderRadius="0.125rem"
                backgroundColor="#F9F9F9"
                as={Select}
                name="gender"
              >
                <option value="">Выбери</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
              </Field>

              <FormInputModal
                label="Телефон"
                name="phoneNumber"
                placeholder="+7 920 440 44 44"
                error={errors.phoneNumber}
                touch={touched.phoneNumber}
              />
              <FormInputModal
                label="Дата рождения"
                name="birthDate"
                placeholder="2022-05-24"
                error={errors.birthDate}
                touch={touched.birthDate}
              />
              <FormInputModal
                label="Серийный номер"
                name="serialNumberPassport"
                placeholder="5889 50005596"
                error={errors.serialNumberPassport}
                touch={touched.serialNumberPassport}
              />
              <FormControl>
                <FormLabel
                  htmlFor="country"
                  fontSize="0.875rem"
                  mb="0.875rem"
                  marginTop="0"
                  color="#393939"
                  fontWeight="600"
                >
                  Гражданство
                </FormLabel>
                <Field
                  height="2.5rem"
                  fontSize="0.875rem"
                  borderRadius="0.125rem"
                  backgroundColor="#F9F9F9"
                  as={Select}
                  name="passportIssuingCountry"
                  id="passportIssuingCountry"
                >
                  <option value="">Выбери</option>
                  <option value="Россия">Россия</option>
                  <option value="Узбекистан">Узбекистан</option>
                  <option value="Армения">Армения</option>
                  <option value="Казахстан">Казахстан</option>
                </Field>
              </FormControl>
              <FormInputModal
                label="Дата выдачи паспорта"
                name="passportIssuingDate"
                placeholder="2022-05-24"
                error={errors.passportIssuingDate}
                touch={touched.passportIssuingDate}
              />
            </VStack>
            <Button
              data-testid="submit-form"
              type="submit"
              height="2.5rem"
              borderRadius="0.125rem"
              width="100%"
              mt="1rem"
              colorScheme="gray"
              boxShadow="0 0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)"
            >
              {loading ? <Spinner color="green.500" /> : 'Сохранить'}
            </Button>
            {loading && (
              <Text pt="0.625rem" color="green.500" align="center">
                Loading
              </Text>
            )}
            {error && (
              <Text
                fontSize="0.625rem"
                backgroundColor="red.100"
                mt="0.9375rem"
                p="0.325rem"
                color="red.500"
                align="center"
              >
                {`${error.message}!!! Возможно, пользователь с такими данными уже есть!`}
              </Text>
            )}
          </Container>
        </Form>
      )}
    </Formik>
  );
};
export default CreateUserForm;
