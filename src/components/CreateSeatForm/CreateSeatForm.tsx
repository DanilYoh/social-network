import {
  Container,
  Button,
  VStack,
  Text,
  Spinner,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { FormInputModal } from '@common/FormInputModal';
import {
  ICreateFormProps,
  IDataForm,
} from '@interfaces/modal-form-props.interfaces';

const validationSchema = Yup.object().shape({
  airCraftId: Yup.number().required('please complete field'),
  seatNumber: Yup.string()
    .required('please complete field')
    .min(2, 'минимальная длинна 2 символа')
    .max(5, 'максимальная длинна 5 символов'),
});

const initialValues: IDataForm = {
  airCraftId: '1',
  class: 'ECONOMY',
  seatNumber: '1j',
  isLockedBack: 'false',

  isNearEmergencyExit: 'false',
};
const CreateSeatForm: FC<ICreateFormProps> = ({
  onSubmit,
  onClose,
  loading,
  error,
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      // eslint-disable-next-line
      onSubmit(values, resetForm, onClose);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Container p="0rem">
          <VStack spacing="0.3rem" align="stretch" mt="0.3rem">
            <FormInputModal
              label="Номер сиденья"
              name="seatNumber"
              placeholder="Номер сиденья"
              error={errors.seatNumber}
              touch={touched.seatNumber}
            />
            <FormLabel
              fontSize="0.875rem"
              mb="0.875rem"
              color="#393939"
              fontWeight="600"
            >
              Класс
            </FormLabel>
            <Field
              height="2.5rem"
              fontSize="0.875rem"
              borderRadius="0.125rem"
              backgroundColor="#F9F9F9"
              as={Select}
              name="class"
            >
              <option value="ECONOMY">ECONOMY</option>
              <option value="BUSINESS">BUSINESS</option>
              <option value="PREMIUM">PREMIUM</option>
              <option value="FIRST">FIRST</option>
            </Field>
            <FormLabel
              fontSize="0.875rem"
              mb="0.875rem"
              color="#393939"
              fontWeight="600"
            >
              Сиденье должно откидываться
            </FormLabel>
            <Field
              height="2.5rem"
              fontSize="0.875rem"
              borderRadius="0.125rem"
              backgroundColor="#F9F9F9"
              as={Select}
              name="isLockedBack"
            >
              <option value="false">Нет</option>
              <option value="true">Да</option>
            </Field>
            <FormLabel
              fontSize="0.875rem"
              mb="0.875rem"
              color="#393939"
              fontWeight="600"
            >
              Рядом с выходом
            </FormLabel>
            <Field
              height="2.5rem"
              fontSize="0.875rem"
              borderRadius="0.125rem"
              backgroundColor="#F9F9F9"
              as={Select}
              name="isNearEmergencyExit"
            >
              <option value="false">Нет</option>
              <option value="true">Да</option>
            </Field>
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
            id="save-btn"
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

export default CreateSeatForm;
