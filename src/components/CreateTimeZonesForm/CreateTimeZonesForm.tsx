import { Container, Button, VStack, Text, Spinner } from '@chakra-ui/react';
import { FC } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import {
  ITimeZonesData,
  IModalFormProps,
} from '@/interfaces/user-modal-timezones.interfaces';
import { FormInputModal } from '@/common/FormInputModal';
import { useAppSelector } from '@/hooks';

const validationSchema = Yup.object().shape({
  countryName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('please complete field')
    .matches(
      /[А-Я][^А-Я]*$/,
      'Название страны должно быть с большой буквы, на русском языке'
    ),
  cityName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('please complete field')
    .matches(
      /[А-Я][^А-Я]*$/,
      'Название города должно быть с большой буквы, на русском языке'
    ),
  gmt: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('please complete field')
    .matches(
      /[A-Z]{3}\s\+|-\d/,
      'Пример правильного формата часового пояса: "GMT +3" или "GMT -3"'
    ),
  gmtWinter: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('please complete field')
    .matches(
      /[A-Z]{3}\s\+|-\d/,
      'Пример правильного формата часового пояса: "GMT +3" или "GMT -3"'
    ),
});

const CreateTimeZonesForm: FC<IModalFormProps> = ({
  onSubmit,
  error,
  loading,
  onClose,
}) => {
  const { timezone } = useAppSelector((state) => state.timezones);
  const initialValues: ITimeZonesData = {
    cityName: timezone ? timezone.cityName : '',
    countryName: timezone ? timezone.countryName : '',
    gmt: timezone ? timezone.gmt : '',
    gmtWinter: timezone ? timezone.gmtWinter : '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit?.(values, resetForm, onClose);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Container p="0rem">
            <VStack spacing="1.375rem" align="stretch">
              <FormInputModal
                label="Страна"
                name="countryName"
                placeholder="Россия"
                error={errors.countryName}
                touch={touched.countryName}
              />
              <FormInputModal
                label="Город"
                name="cityName"
                placeholder="Москва"
                error={errors.cityName}
                touch={touched.cityName}
              />
              <FormInputModal
                label="Среднее время по Гринвичу (GMT)"
                name="gmt"
                placeholder="GMT +3"
                error={errors.gmt}
                touch={touched.gmt}
              />
              <FormInputModal
                label="Зимнее среднее время по Гринвичу (GMT)"
                name="gmtWinter"
                placeholder="GMT +4"
                error={errors.gmtWinter}
                touch={touched.gmtWinter}
              />
            </VStack>
            <Button
              data-testid="submit-form"
              type="submit"
              height="2.5rem"
              borderRadius="0.125rem"
              width="100%"
              mt="1rem"
              boxShadow="0 0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)"
              colorScheme="gray"
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
                {`${error.message}!!! Возможно, часовой пользователь с такими данными уже есть!`}
              </Text>
            )}
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default CreateTimeZonesForm;
