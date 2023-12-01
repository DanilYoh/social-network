import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { FC } from 'react';

import { Wrongdata } from '@common/icons';
import { IProps } from '@interfaces/formik.interfaces';

const AgeForm: FC<IProps> = (props) => {
  const { values, errors, touched } = props;

  const validateAge = () => {
    const fieldsAreEmpty = !(values.day && values.month && values.year);
    const notAdult =
      Math.floor(
        Number(
          new Date().getTime() -
            Number(new Date(`${values.month}-${values.day}-${values.year}`))
        ) /
          (24 * 3600 * 365.25 * 1000)
      ) < 18;
    if (fieldsAreEmpty) return 'please complete field';
    if (notAdult) {
      return 'minimum 18 years of age is required';
    }
  };
  return (
    <FormControl
      isInvalid={!!errors.day && touched.day && touched.month && touched.year}
    >
      <FormLabel
        htmlFor="date"
        fontFamily="Open Sans"
        fontSize="0.8775rem"
        fontWeight="400"
        lineHeight="1.185rem"
        color="rgba(78, 76, 76, 0.71)"
        ml="0.315rem"
        aria-label="Set DoB"
      >
        Date of Birth (min 18 years of age required)
      </FormLabel>
      <Flex
        w={{ sm: '100%', smp: '96%', dt: 'calc(0.84375 * 100%)' }}
        justifyContent="space-between"
        flexDirection={{ sm: 'column', smp: 'row' }}
        rowGap="0.6225rem"
      >
        <Box position="relative" w={{ sm: '80%', smp: 'calc(100% * 0.27777)' }}>
          <Box
            position="absolute"
            color={values.day === '' ? '#0A66C2' : '#a6a6a6'}
            fontSize="0.6225rem"
            lineHeight="0.75rem"
            top="0.435rem"
            left="0.5625rem"
            fontFamily="Duru Sans"
          >
            Day
          </Box>
          <Field
            as={Select}
            border="0.0625rem solid #D9D9D9"
            boxShadow="0 0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)"
            fontSize="0.9375rem"
            textAlign="center"
            borderRadius="0.2475rem"
            h="2.8125rem"
            aria-label="day of birth"
            color="black"
            name="day"
            id="day"
            data-testid="day"
            validate={validateAge}
          >
            <option disabled label=" " />
            {Array.from(
              Array(
                new Date(
                  values.year ? Number(values.year) : 1970,
                  values.month ? Number(values.month) : 1,
                  0
                ).getDate() + 1
              ).keys()
            )
              .slice(1)
              .map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            ;
          </Field>
        </Box>
        <Box position="relative" w={{ sm: '80%', smp: 'calc(100% * 0.37037)' }}>
          <Box
            position="absolute"
            color={values.month === '' ? '#0A66C2' : '#a6a6a6'}
            fontSize="0.6225rem"
            lineHeight="0.75rem"
            top="0.435rem"
            left="0.5625rem"
            fontFamily="Duru Sans"
          >
            Month
          </Box>
          <Field
            as={Select}
            aria-label="Month of birth"
            border="0.0625rem solid #D9D9D9"
            boxShadow="0 0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)"
            fontSize="0.9375rem"
            textAlign="center"
            borderRadius="0.25rem"
            h="2.875rem"
            data-testid="month"
            color="black"
            name="month"
            id="month"
          >
            <option disabled label=" " />
            {[
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ].map((el, index) => (
              <option key={el} value={index}>
                {el}
              </option>
            ))}
          </Field>
        </Box>

        <Box position="relative" w={{ sm: '80%', smp: 'calc(100% * 0.27777)' }}>
          <Box
            position="absolute"
            color={values.year === '' ? '#0A66C2' : '#a6a6a6'}
            fontSize="0.6225rem"
            lineHeight="0.75rem"
            top="0.5625rem"
            left="0.5625rem"
            fontFamily="Duru Sans"
          >
            Year
          </Box>
          <Field
            as={Select}
            border="0.0625rem solid #D9D9D9"
            aria-label="year of birth"
            boxShadow="0 0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)"
            fontSize="0.9375rem"
            textAlign="center"
            borderRadius="0.25rem"
            h="2.875rem"
            color="black"
            name="year"
            id="year"
            data-testid="year"
          >
            <option disabled label=" " />
            {Array.from(Array(2023).keys())
              .slice(1920)
              .reverse()
              .map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            ;
          </Field>
        </Box>
      </Flex>

      <FormErrorMessage fontSize="0.8775rem" data-testid="min-age">
        <Wrongdata w="1.5rem" h="2.8725rem" mr="-0.3rem" p="0" />
        {errors.day}
      </FormErrorMessage>

      <Divider
        orientation="horizontal"
        h="0.1275rem"
        w="calc(1.09375* 100%)"
        bg="#D9D9D9"
        opacity="1"
        transform="translateX(-5%)"
        mt="1.875rem"
      />
    </FormControl>
  );
};

export default AgeForm;
