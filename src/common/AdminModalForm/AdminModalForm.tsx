import React, { useEffect, useMemo, useRef } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react';
import {
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikHelpers,
  FormikProps,
  useFormikContext,
} from 'formik';
import { FieldInputProps } from 'formik/dist/types';

import {
  fieldTypesArray,
  ICheckboxField,
  IDatepicker,
  IFormValues,
  IHiddenField,
  IInputField,
  ISelectField,
  TInputField,
  TInputFields,
} from '@interfaces/admin-modal-form.intefaces';
import { AdminDatepicker } from 'src/common/AdminDatepicker';
import { prepareAdminModalFormFieldUtils } from '@utils/prepare-admin-modal-form-field.utils';

import classes from './AdminModalForm.module.scss';

const isInput = (object: { type: string }): object is IInputField =>
  fieldTypesArray.some((type) => object.type === type);

const isHiddenInput = (object: { type: string }): object is IHiddenField =>
  object.type === 'hidden';

const isSelect = (object: { type: string }): object is ISelectField =>
  object.type === 'select';

const isDatepicker = (object: { type: string }): object is IDatepicker =>
  object.type === 'datepicker';

const isCheckbox = (object: { type: string }): object is ICheckboxField =>
  object.type === 'checkbox';

interface Props {
  header: string;
  isOpen: boolean;
  inputs: TInputField[] | TInputFields;
  // eslint-disable-next-line react/require-default-props
  submitButton?: React.ReactNode;
  onChange: (
    values: IFormValues<TInputField[]>,
    setValue: (
      field: string,
      value: string | number,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IFormValues<TInputField[]>>>
  ) => void;
  submitHandler: (
    values: IFormValues<TInputField[]>,
    actions: FormikHelpers<IFormValues<TInputField[]>>
  ) => void;
  onClose: () => void;
}

const FormObserver = ({
  onChange,
}: {
  onChange: (
    values: IFormValues<TInputField[]>,
    setValue: (
      field: string,
      value: string | number,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IFormValues<TInputField[]>>>
  ) => void;
}) => {
  const { values, setFieldValue } =
    useFormikContext<IFormValues<TInputField[]>>();
  const oldValues = useRef<IFormValues<TInputField[]>>();

  useEffect(() => {
    if (
      onChange &&
      JSON.stringify(oldValues.current) !== JSON.stringify(values)
    ) {
      oldValues.current = values;
      onChange(values, setFieldValue);
    }
  }, [values, onChange, setFieldValue]);

  return null;
};

const AdminModalForm = ({
  header,
  isOpen,
  onClose,
  inputs,
  submitHandler,
  onChange,
  submitButton,
}: Props) => {
  const inputFields = useMemo(
    () => prepareAdminModalFormFieldUtils(inputs),
    [inputs]
  );

  const defaultValues: IFormValues<typeof inputFields> = inputFields.reduce(
    (acc, currentInput) => ({
      ...acc,
      [currentInput.name]: currentInput.value,
    }),
    {}
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        className={classes['admin-modal']}
        data-testid="admin-modal"
      >
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik initialValues={defaultValues} onSubmit={submitHandler}>
            {(formikProps: FormikProps<IFormValues<TInputField[]>>) => (
              <Form>
                <FormObserver onChange={onChange} />
                {inputFields.map((inputField) => (
                  <Field
                    key={inputField.name}
                    name={inputField.name}
                    validate={inputField.validate}
                  >
                    {({
                      field,
                      form,
                    }: {
                      field: FieldInputProps<typeof inputField.value>;
                      form: FormikProps<IFormValues<typeof inputFields>>;
                    }) => (
                      <FormControl
                        isInvalid={
                          (form.errors[inputField.name] &&
                            form.touched[inputField.name]) as boolean
                        }
                        flexDir={isCheckbox(inputField) ? 'column' : 'row'}
                      >
                        {isHiddenInput(inputField) ? (
                          <Input {...(field as InputProps)} type="hidden" />
                        ) : (
                          // eslint-disable-next-line react/jsx-no-useless-fragment
                          <>
                            {isCheckbox(inputField) ? (
                              <Checkbox
                                {...field}
                                value=""
                                defaultChecked={inputField.value}
                              >
                                {inputField.label}
                              </Checkbox>
                            ) : (
                              <>
                                <FormLabel>{inputField.label}</FormLabel>
                                {isInput(inputField) && (
                                  <Input
                                    {...(field as FieldInputProps<
                                      string | number | undefined
                                    >)}
                                    type={inputField.type}
                                    disabled={inputField.disabled}
                                    placeholder={inputField.placeholder}
                                    className={classes['input-field']}
                                  />
                                )}
                                {isSelect(inputField) && (
                                  <Select
                                    {...(field as FieldInputProps<
                                      string | number | undefined
                                    >)}
                                    disabled={inputField.disabled}
                                    placeholder={inputField.placeholder}
                                    className={classes['input-field']}
                                  >
                                    {inputField.options.map((option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.name ?? option.value}
                                      </option>
                                    ))}
                                  </Select>
                                )}
                                {isDatepicker(inputField) && (
                                  <AdminDatepicker
                                    {...(field as FieldInputProps<Date>)}
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    selected={Date.parse(field.value)}
                                    disabled={inputField.disabled}
                                    activeDates={inputField.activeDates}
                                    className={[
                                      classes['input-field'],
                                      classes['datepicker-field'],
                                    ].join(' ')}
                                    wrapperClassName={classes.datepicker}
                                  />
                                )}
                                <FormErrorMessage>
                                  {form.errors[inputField.name]}
                                </FormErrorMessage>
                              </>
                            )}
                          </>
                        )}
                      </FormControl>
                    )}
                  </Field>
                ))}
                <div className={classes.controls}>
                  <Button
                    data-testid="admin-modal-submit"
                    mt={4}
                    backgroundColor="#006fff"
                    color="#fff"
                    borderRadius=".25rem"
                    width="12.5rem"
                    isLoading={formikProps.isSubmitting}
                    type="submit"
                  >
                    {submitButton ?? 'Send'}
                  </Button>
                  <Button
                    data-testid="admin-modal-cancel"
                    mt={4}
                    borderRadius=".25rem"
                    width="12.5rem"
                    colorScheme="white"
                    color="black"
                    border="1px solid #a3a3a3"
                    isLoading={formikProps.isSubmitting}
                    onClick={onClose}
                  >
                    Отмена
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default AdminModalForm;
