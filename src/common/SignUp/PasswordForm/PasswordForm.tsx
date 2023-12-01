import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { FC, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

import { Check, Uncheck, Validate } from '@common/icons';
import { IProps } from '@interfaces/formik.interfaces';

const PasswordForm: FC<IProps> = (props) => {
  const { errors, touched, values, handleBlur } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [showValidationField, setShowValidationField] =
    useState<boolean>(false);

  const validatePassword = (value: string) => {
    if (!value) return 'please complete field';
    const checkRules = [false, false, false, false, false];
    if (value.length >= 8) checkRules[0] = true;
    if (/[A-Z]/.test(value)) checkRules[1] = true;
    if (/[a-z]/.test(value)) checkRules[2] = true;
    if (/[0-9]/.test(value)) checkRules[3] = true;
    if (/\W/.test(value)) checkRules[4] = true;
    if (checkRules.every((e) => e)) return null;

    return checkRules;
  };
  const validateConfirm = (value: string) => {
    if (!value) return 'please complete field';
    if (values.password !== value) {
      return 'passwords need to match';
    }
  };

  const handlePasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setShowValidationField(false);
    if (handleBlur) {
      handleBlur(e);
    }
  };

  return (
    <Flex
      justifyContent="space-between"
      w="full"
      flexDirection={{ sm: 'column', md: 'row' }}
    >
      <FormControl
        w={{ sm: '80%', md: 'calc(0.48506*100%)' }}
        position="relative"
        isInvalid={!!errors.password && !!touched.password}
      >
        <FormLabel
          htmlFor="password"
          fontFamily="Open Sans"
          fontSize="0.875rem"
          fontWeight="400"
          lineHeight="1.1875rem"
          color="rgba(78, 76, 76, 0.71)"
          ml="0.375rem"
          mb="-0.0625rem"
        >
          Create Password
        </FormLabel>
        <Field
          as={Input}
          id="password"
          name="password"
          data-testid="password"
          aria-label="password"
          autoComplete="on"
          type={showPassword ? 'text' : 'password'}
          variant="filled"
          boxShadow="0 0.125rem 0.125rem rgba(0, 0, 0, 0.25)"
          borderRadius="0.25rem"
          pr="2.5rem"
          bg="white"
          h="2.8125rem"
          onFocus={() => {
            setShowValidationField(true);
          }}
          onBlur={handlePasswordBlur}
          validate={validatePassword}
          className={
            !!errors.password && !!touched.password ? 'field-error' : 'field'
          }
        />

        {showPassword ? (
          <IoEye
            cursor="pointer"
            style={{
              position: 'absolute',
              right: '1%',
              top: '2.5625rem',
            }}
            size="1.4063rem"
            color="#BDBDBD"
            data-testid="showCPW"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <IoEyeOff
            cursor="pointer"
            style={{
              position: 'absolute',
              right: '1%',
              top: '2.5625rem',
            }}
            size="1.4063rem"
            color="#BDBDBD"
            data-testid="hideCPW"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}

        {values.password.length > 0 &&
          showValidationField &&
          errors.password && (
            <Box
              w="calc(0.91401*100%)"
              border="0.0625rem solid #D9D9D9"
              boxShadow="0rem 0.125rem 0.125rem #D9D9D9"
              borderRadius="0.25rem"
              mr="auto"
              ml="auto"
              mt="0.125rem"
              pt="0.875rem"
              pl="1.125rem"
              pb="0.625rem"
              display="flex"
              flexDirection="column"
              rowGap="0.375rem"
              fontSize="0.75rem"
              lineHeight="0.9375rem"
              fontFamily="Inter"
              fontWeight="400"
              position="absolute"
              left="4%"
              bg="white"
              zIndex="2"
            >
              <Flex
                columnGap="0.3125rem"
                fontSize="0.75rem"
                data-testid="minLength"
              >
                {errors.password[0] ? (
                  <Check transform="translateY(-0.25rem)" />
                ) : (
                  <Uncheck transform="translateY(-0.25rem)" />
                )}
                min 8 character
              </Flex>
              <Flex columnGap="0.3125rem">
                {errors.password[1] ? (
                  <Check transform="translateY(-0.25rem)" />
                ) : (
                  <Uncheck transform="translateY(-0.25rem)" />
                )}
                1 uppercase letter
              </Flex>
              <Flex columnGap="0.3125rem" data-testid="lowerCase">
                {errors.password[2] ? (
                  <Check transform="translateY(-0.25rem)" />
                ) : (
                  <Uncheck transform="translateY(-0.25rem)" />
                )}
                1 lowercase letter
              </Flex>
              <Flex columnGap="0.3125rem">
                {errors.password[3] ? (
                  <Check transform="translateY(-0.25rem)" />
                ) : (
                  <Uncheck transform="translateY(-0.25rem)" />
                )}
                at least 1 number
              </Flex>
              <Flex
                columnGap="0.3125rem"
                fontSize="0.75rem"
                lineHeight="0.9375rem"
                fontFamily="Inter"
                fontWeight="400"
              >
                {errors.password[4] ? (
                  <Check transform="translateY(-0.25rem)" />
                ) : (
                  <Uncheck transform="translateY(-0.25rem)" />
                )}
                1 special character{' '}
              </Flex>
            </Box>
          )}
        {!!errors.password &&
        !Array.isArray(errors.password) &&
        !!touched.password ? (
          <FormErrorMessage fontSize="0.875rem">
            <Validate w="1.5625rem" h="2.875rem" mr="-0.3125rem" p="0" />
            {errors.password}
          </FormErrorMessage>
        ) : null}
      </FormControl>
      <FormControl
        w={{ sm: '80%', md: 'calc(0.4866*100%)' }}
        isInvalid={!!errors.confirmPassword && !!touched.confirmPassword}
        position="relative"
      >
        <FormLabel
          htmlFor="confirmPassword"
          fontFamily="Open Sans"
          fontSize="0.875rem"
          fontWeight="400"
          lineHeight="1.1875rem"
          color="rgba(78, 76, 76, 0.71)"
          ml="0.375rem"
          mb="-0.0625rem"
        >
          Confirm Password
        </FormLabel>
        <Field
          as={Input}
          autoComplete="on"
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirmPassword"
          name="confirmPassword"
          data-testid="confirmPassword"
          variant="filled"
          aria-label="confirm password"
          pr="2.5rem"
          h="2.8125rem"
          boxShadow="0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25)"
          borderRadius="0.25rem"
          bg="white"
          validate={validateConfirm}
          className={
            !!errors.confirmPassword && !!touched.confirmPassword
              ? 'field-error'
              : 'field'
          }
        />
        {showConfirmPassword ? (
          <IoEye
            cursor="pointer"
            style={{
              position: 'absolute',
              right: '1%',
              top: '2.5625rem',
            }}
            size="1.4063rem"
            color="#BDBDBD"
            data-testid="showPW"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        ) : (
          <IoEyeOff
            cursor="pointer"
            style={{
              position: 'absolute',
              right: '1%',
              top: '2.5625rem',
            }}
            size="1.4063rem"
            color="#BDBDBD"
            data-testid="hidePW"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        )}

        {!!errors.confirmPassword && !!touched.confirmPassword ? (
          <FormErrorMessage fontSize="0.875rem">
            <Validate w="1.5625rem" h="2.875rem" mr="-0.3125rem" p="0" />
            {errors.confirmPassword}
          </FormErrorMessage>
        ) : null}
      </FormControl>
    </Flex>
  );
};
export default PasswordForm;
