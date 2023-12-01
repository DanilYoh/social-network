import { Flex } from '@chakra-ui/react';
import { Formik, FormikProps } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';

import { FormInner } from '@components/FormCommon/FormInner';
import { FormikSubmit } from '@interfaces/form-callback-object.interfaces';
import { FieldsObject } from '@interfaces/form-unions.interfaces';

type FormOuter<
  T extends string = string,
  R extends Record<T, string> = Record<string, string>
> = {
  initialValues: R;
  validationSchema: Yup.ObjectSchema<R, Yup.AnyObject, object, ''>;
  callback: ((props: FormikProps<R>) => void) | null;
  items: FieldsObject;
  onSubmit: FormikSubmit<T>;
  buttonText: string;
};

const FormOuter: FC<FormOuter> = ({
  initialValues,
  validationSchema,
  callback,
  items,
  onSubmit,
  buttonText,
}) => (
  <Flex align="center" justify="center" h="max-content" minH="100vh">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<Record<string, string>>) => {
        callback && callback(props);
        const isLoading = props.isSubmitting && props.isValid;
        return (
          <FormInner
            isLoading={isLoading}
            buttonText={buttonText}
            items={items}
            handleSubmit={props.handleSubmit}
          />
        );
      }}
    </Formik>
  </Flex>
);

export default FormOuter;
