import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { FC } from 'react';

import Validate from '@icons/validate';
import { IProps } from '@interfaces/formik.interfaces';

const SecretQForm: FC<IProps> = (props) => {
  const { errors, touched } = props;
  const validateAnswer = (value: string) => {
    if (!value) return 'please complete field';
    if (!value.match(/^[a-zA-Z\s]*$/)) {
      return 'please enter letters and spaces only';
    }
  };

  return (
    <Flex
      justifyContent="space-between"
      w="full"
      pt="1.4375rem"
      flexDirection={{ sm: 'column', md: 'row' }}
    >
      <FormControl
        w={{ sm: '80%', md: 'calc(0.4866*100%)' }}
        position="relative"
        isInvalid={!!errors.question && !!touched.question}
      >
        <FormLabel
          htmlFor="question"
          fontFamily="Open Sans"
          fontSize="0.875rem"
          fontWeight="400"
          lineHeight="1.1875rem"
          color="rgba(78, 76, 76, 0.71)"
          ml="0.1875rem"
          mb="0rem"
        >
          Security Question
        </FormLabel>
        <Field
          as={Select}
          id="question"
          name="question"
          aria-label="choose security question"
          data-testid="question"
          variant="filled"
          h="2.875rem"
          boxShadow="0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25)"
          borderRadius="0.25rem"
          bg="white"
          validate={(value: string) => {
            if (!value) return 'please complete field';
          }}
          className={
            !!errors.question && !!touched.question ? 'field-error' : 'field'
          }
        >
          <option disabled label=" " />
          <option
            value="Should we fire designer?"
            label="Should we fire designer?"
          />
          <option value="What is your name?" label="What is your name?" />
        </Field>
        <FormErrorMessage fontSize="0.875rem">
          <Validate w="1.5625rem" h="2.875rem" mr="-0.3125rem" p="0" />
          {errors.question}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        w={{ sm: '80%', md: 'calc(0.4866*100%)' }}
        position="relative"
        isInvalid={!!errors.questionAnswer && !!touched.questionAnswer}
      >
        <FormLabel
          htmlFor="questionAnswer"
          fontFamily="Open Sans"
          fontSize="0.875rem"
          fontWeight="400"
          lineHeight="1.1875rem"
          id="SQ"
          color="rgba(78, 76, 76, 0.71)"
          ml="0.5rem"
          mb="0rem"
        >
          Answer Security Question
        </FormLabel>
        <Field
          as={Input}
          id="questionAnswer"
          name="questionAnswer"
          data-testid="questionAnswer"
          aria-label="security question answer"
          variant="filled"
          h="2.875rem"
          boxShadow="0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25)"
          borderRadius="0.25rem"
          bg="white"
          validate={validateAnswer}
          className={
            !!errors.questionAnswer && !!touched.questionAnswer
              ? 'field-error'
              : 'field'
          }
        />
        {!!errors.questionAnswer && !!touched.questionAnswer ? (
          <FormErrorMessage fontSize="0.875rem">
            <Validate w="1.5625rem" h="2.875rem" mr="-0.3125rem" p="0" />
            {errors.questionAnswer}
          </FormErrorMessage>
        ) : null}
      </FormControl>
    </Flex>
  );
};
export default SecretQForm;
