import { FC } from 'react';
import { Box, Divider, Flex, HStack, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { login } from '@/store/payment.slice';
import { useAppDispatch } from '@/hooks';
import { IPaymentValues } from '@/interfaces/payment.interfaces';
import { CardInput } from '@/common/CardInput';

const PaymentCard: FC = () => {
  const validationSchema = Yup.object().shape({
    first: Yup.string().required('please complete field'),
    last: Yup.string().required('please complete field'),
    number: Yup.string()
      .required('please complete field')
      .matches(
        /^\d{4} *\d{4} *\d{4} *\d{4}$/,
        'please enter a valid card number'
      ),
    date: Yup.string()
      .required('please complete field')
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'please enter a valid date'),
    csv: Yup.string()
      .required('please complete field')
      .matches(/^[0-9]{3}$/, 'please enter a valid CSV code'),
  });
  const initialValues: IPaymentValues = {
    first: '',
    last: '',
    number: '',
    date: '',
    csv: '',
  };

  const dispatch = useAppDispatch();

  return (
    <Flex
      data-testid="form"
      fontSize="0.6875rem"
      padding="3rem 1.875rem"
      w={{ dt: '842px', sm: '100%' }}
      border="3.125rem solid #EFEFEF"
    >
      <Formik
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSubmit={(): void => {}}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isValid,
          dirty,
          handleChange,
        }) => {
          setTimeout(
            () => dispatch(login({ data: values, isValid: dirty && isValid })),
            0
          );
          return (
            <form style={{ width: '100%' }} onSubmit={handleSubmit}>
              <Flex
                ml="-12px"
                flexDirection={{ md: 'row', sm: 'column' }}
                color="rgba(78, 76, 76, 0.71)"
              >
                <VStack width={{ md: '50%', sm: '100%' }} margin=".5rem">
                  <Box mb={23} w={{ dt: '19.6875rem', sm: '100%' }}>
                    <CardInput
                      label="First Name (As written on the card)"
                      error={errors.first}
                      touch={touched.first}
                      handleChange={handleChange}
                      id="first"
                      type="text"
                    />
                  </Box>
                  <Box w={{ dt: '19.6875rem', sm: '100%' }}>
                    <CardInput
                      label="Last Name (As written on the card)"
                      error={errors.last}
                      touch={touched.last}
                      handleChange={handleChange}
                      id="last"
                      type="text"
                    />
                  </Box>
                </VStack>
                <Divider
                  orientation="vertical"
                  height="12rem"
                  width="1px"
                  bg="#A6A6A6"
                />
                <VStack width={{ md: '50%', sm: '100%' }} margin=".5rem">
                  {' '}
                  <Box mb={23} w={{ dt: '19.6875rem', sm: '100%' }}>
                    <CardInput
                      label="Card Number"
                      error={errors.number}
                      touch={touched.number}
                      maxLength={19}
                      id="number"
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                      value={values.number
                        .replace(/\D/g, '')
                        .replace(/\s/g, '')
                        .replace(/(\d{4})/g, '$1 ')
                        .trim()}
                      handleChange={handleChange}
                    />
                  </Box>
                  <HStack width="100%">
                    {' '}
                    <Box width={{ md: '6rem', sm: '50%' }} pl={2}>
                      <CardInput
                        label="Expiry Date"
                        error={errors.date}
                        touch={touched.date}
                        placeholder="MM/YY"
                        maxLength={5}
                        value={values.date
                          .replace(/\D/g, '')
                          .replace(/\//g, '')
                          .replace(/(\d{2})/, '$1/')
                          .substring(0, 5)}
                        id="date"
                        type="text"
                        handleChange={handleChange}
                      />
                    </Box>
                    <Box w={{ md: '6rem', sm: '50%' }}>
                      <CardInput
                        label="CVC Code"
                        error={errors.csv}
                        touch={touched.csv}
                        value={values.csv.replace(/\D/g, '')}
                        maxLength={3}
                        id="csv"
                        type="text"
                        placeholder="XXX"
                        handleChange={handleChange}
                      />
                    </Box>
                  </HStack>
                </VStack>
              </Flex>
            </form>
          );
        }}
      </Formik>{' '}
    </Flex>
  );
};

export default PaymentCard;
