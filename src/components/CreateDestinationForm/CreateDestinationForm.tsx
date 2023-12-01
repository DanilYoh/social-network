import { Container, Button, VStack, Text, Spinner } from '@chakra-ui/react';
import { FC } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { IUsersData } from '@interfaces/user-modal-destination.interfaces';
import { FormInputModal } from '@common/FormInputModal';
import { ICreateFormProps } from '@interfaces/modal-form-props.interfaces';
import { useAppSelector } from '@/hooks';
import { IFormInputAttributes } from '@interfaces/form-input-attributes.interface';

const formInputs: IFormInputAttributes[] = [
  {
    label: 'Страна',
    name: 'countryName',
    placeholder: 'Россия',
  },
  {
    label: 'Город',
    name: 'cityName',
    placeholder: 'Москва',
  },
  {
    label: 'Имя аэропорта',
    name: 'airportName',
    placeholder: 'Внуково',
  },
  {
    label: 'Код аэропорта',
    name: 'airportCode',
    placeholder: 'VKO',
  },
  {
    label: 'Часовой пояс',
    name: 'timezone',
    placeholder: 'GTM +3',
  },
];

const validationSchema = Yup.object().shape({
  countryName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('please complete field')
    .matches(
      /^[А-Я][^А-Я]*$/,
      'Название страны должно быть с большой буквы, на русском языке'
    ),
  cityName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('please complete field')
    .matches(
      /^[А-Я][^А-Я]*$/,
      'Название города должно быть с большой буквы, на русском языке'
    ),

  airportName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('please complete field')
    .matches(
      /^[А-Я][^А-Я]*$/,
      'Название города должно быть с большой буквы, на русском языке'
    ),
  airportCode: Yup.string()
    .min(2, 'Too Short!')
    .max(3, 'Too Long!')
    .required('please complete field')
    .matches(/[A-Z]{3}/, 'Код аэропорта должен быть введен в формате "VKO" '),
  timezone: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('please complete field')
    .matches(
      /[A-Z]{3}\s\+\d/,
      'Часовой пояс должен быть введен в формате "GMT +3"'
    ),
});
const CreateDestinationForm: FC<ICreateFormProps> = ({
  onSubmit,
  error,
  loading,
  onClose,
}) => {
  const { destination } = useAppSelector((state) => state.destination);

  const initialValues: IUsersData = {
    airportCode: destination ? destination.airportCode : '',
    airportName: destination ? destination.airportName : '',
    cityName: destination ? destination.cityName : '',
    countryName: destination ? destination.countryName : '',
    timezone: destination ? destination.timezone : '',
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
          <Container p="0">
            <VStack spacing="1.775rem" align="stretch" fontSize="1.2rem">
              {formInputs.map((input) => (
                <FormInputModal
                  key={input.name}
                  {...input}
                  error={errors[input.name]}
                  touch={touched[input.name]}
                />
              ))}
            </VStack>
            <Button
              data-testid="submit-form"
              type="submit"
              height="2.5rem"
              borderRadius="0.125rem"
              width="100%"
              mt="3rem"
              color="black"
              colorScheme="white"
              border="1px solid #DEDEDE"
              boxShadow="0  0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)"
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
                {`${error.message}!!! Возможно путнкт назначения с такими данными уже есть!`}
              </Text>
            )}
          </Container>
        </Form>
      )}
    </Formik>
  );
};
export default CreateDestinationForm;
