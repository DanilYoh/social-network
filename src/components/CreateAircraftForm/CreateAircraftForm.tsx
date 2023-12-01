import { Container, Button, VStack, Text, Spinner } from '@chakra-ui/react';
import { FC } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { FormInputModal } from '@common/FormInputModal';
import {
  ICreateFormProps,
  IDataForm,
} from '@interfaces/modal-form-props.interfaces';
import { useAppSelector } from '@/hooks';

const validationSchema = Yup.object().shape({
  aircraftNumber: Yup.string()
    .required('please complete field')
    .matches(
      /^[0-9]{4,15}$/,
      'Length of Aircraft Number should be between 4 and 15 characters'
    ),
  model: Yup.string()
    .required('please complete field')
    .matches(
      /^[A-Za-z0-9-_ ]{2,10}$/,
      'Length of Aircraft Model should be between 2 and 10 characters'
    ),
  modelYear: Yup.number()
    .required('please complete field')
    .min(2000, 'modelYear should be later than 2000')
    .max(2023, 'modelYear must not be later than 2023')
    .typeError('Only numbers!'),
  flightRange: Yup.number()
    .required('please complete field')
    .min(1000, 'Minimum flight distance from 1000!')
    .typeError('Only numbers!'),
});

const CreateAircraftForm: FC<ICreateFormProps> = ({
  onSubmit,
  error,
  loading,
  onClose,
}) => {
  const { aircraft } = useAppSelector((state) => state.aircrafts);
  const initialValues: IDataForm = {
    aircraftNumber: aircraft ? aircraft.aircraftNumber : '',
    model: aircraft ? aircraft.model : '',
    modelYear: aircraft ? aircraft.modelYear : undefined,
    flightRange: aircraft ? aircraft.flightRange : undefined,
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
            <VStack spacing="0.3rem" align="stretch" mt="0.3rem">
              <FormInputModal
                label="Модель"
                name="model"
                placeholder="Ту-134"
                error={errors.model}
                touch={touched.model}
              />
              <FormInputModal
                label="Номер самолёта"
                name="aircraftNumber"
                placeholder="258890"
                error={errors.aircraftNumber}
                touch={touched.aircraftNumber}
              />

              <FormInputModal
                label="Год модели"
                name="modelYear"
                placeholder="2018"
                error={errors.modelYear}
                touch={touched.modelYear}
              />
              <FormInputModal
                label="Длинна полёта"
                name="flightRange"
                placeholder="30 000"
                error={errors.flightRange}
                touch={touched.flightRange}
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
                {`${error.message}!!! Возможно самолёт с такими данными уже есть!`}
              </Text>
            )}
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default CreateAircraftForm;
