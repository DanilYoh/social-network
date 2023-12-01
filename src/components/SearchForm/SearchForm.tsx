import {
  Box,
  ButtonGroup,
  Checkbox,
  Divider,
  Flex,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from '@chakra-ui/react';
import React, { type FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { format } from 'date-fns';

import { fetchSearchCreate } from '@/store/thunks/search.thunk';
import { fetchDestinationClient } from '@/store/thunks/destination-client.thunk';
import { useAppDispatch } from '@/hooks';
import { AppButton } from '@common/AppButton';
import { Reset } from '@icons/index';
import Arrows from '@icons/arrows';
import 'react-datepicker/dist/react-datepicker.css';
import '@common/SearchForm/InputDate/datepicker.css';
import { InputDate, SelectDestination } from '@common/SearchForm';
import { RootState } from '@/store';
import {
  IDestinationContent,
  IFlightData,
  ISearchForm,
  ISearchFormik,
} from '@interfaces/search-form.interfaces';
import ArrowBottom from '@icons/arrowBottom';

const SearchForm: FC<ISearchForm> = ({ onSearchSubmit }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDestinationClient())
      .then((res) => res)
      .catch((err) => err as Error);
  }, [dispatch]);
  const destinations: IDestinationContent[] = useSelector(
    (state: RootState) => state.search.result.content
  );

  const formik = useFormik({
    initialValues: {
      flightType: 'round',
      from: '',
      to: '',
      departure: undefined,
      return: undefined,
      passengers: '1 adult',
      directFlight: false,
    },
    onSubmit: (values: ISearchFormik) => {
      if (values.departure && values.return) {
        const flightData: IFlightData = {
          departureDate: format(values.departure, 'y-M-d'),
          from: values.from,
          numberOfPassengers: values.passengers.split(' ')[0],
          returnDate: format(values.return, 'y-M-d'),
          to: values.to,
        };
        dispatch(fetchSearchCreate(flightData))
          .then((res) => res)
          .catch((err) => err as Error);
      }
      onSearchSubmit();
    },
    validate: (values) => {
      const errors = {} as {
        from: boolean;
        to: boolean;
        departure: boolean;
        return: boolean;
      };
      if (!values.from) {
        errors.from = true;
      }
      if (!values.to) {
        errors.to = true;
      }

      if (!values.departure) {
        errors.departure = true;
      } else if (
        new Date(values.departure).getTime() <
        new Date(new Date().toDateString()).getTime()
      ) {
        errors.departure = true;
      }
      if (!values.return) {
        errors.return = true;
      } else if (
        values.departure &&
        new Date(values.return).getTime() < new Date(values.departure).getTime()
      ) {
        errors.return = true;
      }

      return errors;
    },
  });

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
      onSubmit={formik.handleSubmit}
    >
      <RadioGroup
        mb={{ base: '1.8125rem' }}
        value={formik.values.flightType}
        name="flightType"
      >
        <Stack direction="row">
          <Radio
            type="radio"
            value="round"
            size="lg"
            borderColor="#A6A6A6"
            color="#3710A6!important"
            colorScheme="#fff"
            aria-label="round trip"
            onChange={formik.handleChange}
          >
            <Box color="rgba(78, 76, 76, 0.71)" fontSize=".6875rem" ml="-.3rem">
              Round Trip
            </Box>
          </Radio>
          <Radio
            type="radio"
            value="one"
            size="lg"
            borderColor="#A6A6A6"
            color="#3710A6!important"
            colorScheme="#fff"
            aria-label="one way"
            onChange={formik.handleChange}
          >
            <Box color="rgba(78, 76, 76, 0.71)" fontSize=".6875rem" ml="-.3rem">
              One Way
            </Box>
          </Radio>
        </Stack>
      </RadioGroup>
      <Flex
        w="100%"
        justifyContent={{ base: 'flex-start', dt: 'space-between' }}
        mb="1.4375rem"
        flexDirection="row"
        flexWrap="wrap"
      >
        <Box
          flex={{ base: '0 0 100%', mdp: '0 0 42%' }}
          display="flex"
          alignItems={{ base: 'flex-start', smp: 'flex-end' }}
          mr=".9375rem"
          mb={{ base: '1rem', dt: '0' }}
          flexDirection={{ base: 'column', smp: 'row' }}
        >
          <Flex
            flexDirection="column"
            maxW={{ base: '100%', smp: '12.5rem' }}
            width="100%"
            mb={{ base: '1rem', smp: '0' }}
          >
            <SelectDestination
              id="searchFrom"
              value={formik.values.from}
              setValue={formik.setFieldValue}
              fieldHasError={!!(formik.errors.from && formik.touched.from)}
              label="from"
              options={destinations}
            />
          </Flex>
          <Box
            w=".8rem"
            minW=".8rem"
            h="2.8125rem"
            display={{ base: 'none', smp: 'flex' }}
            alignItems="center"
            pt=".5rem"
            m="0 .7rem"
            overflow="hidden"
          >
            <Arrows />
          </Box>
          <Flex
            flexDirection="column"
            maxW={{ base: '100%', smp: '12.5rem' }}
            width="100%"
          >
            <SelectDestination
              id="searchTo"
              value={formik.values.to}
              setValue={formik.setFieldValue}
              fieldHasError={!!(formik.errors.to && formik.touched.to)}
              label="to"
              options={destinations}
            />
          </Flex>
        </Box>
        <Box
          flex={{ base: '0 0 100%', mdp: '0 0 30%' }}
          alignItems={{ base: 'flex-start', dt: 'flex-end' }}
          mr=".9375rem"
          display="flex"
          flexDirection="column"
          mb={{ base: '1rem', dt: '0' }}
        >
          <FormLabel
            htmlFor="travelDate"
            display="flex"
            w="100%"
            flexWrap="wrap"
            m={0}
          >
            <Box
              flex="0 0 100%"
              color="rgba(78, 76, 76, 0.71)"
              fontSize=".6875rem"
              pl=".3rem"
            >
              Travel Dates
            </Box>
          </FormLabel>
          <Flex
            position="relative"
            w={{ base: '100%', smp: 'auto' }}
            minW={{ base: 'auto', smp: '22rem', dt: 'auto' }}
            flex="0 0 2.8125rem"
            borderRadius=".25rem"
            border="1px solid #D9D9D9!important"
            boxShadow="0 .25rem .25rem rgba(0, 0, 0, 0.25)"
          >
            <InputDate
              id="travelDate"
              value={formik.values.departure}
              setValue={formik.setFieldValue}
              fieldHasError={
                !!(formik.errors.departure && formik.touched.departure)
              }
              label="departure"
            />
            <Divider
              orientation="vertical"
              height="2.125rem"
              w=".125rem"
              backgroundColor="#D9D9D9"
              border="none!important"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
            <InputDate
              value={formik.values.return}
              setValue={formik.setFieldValue}
              fieldHasError={!!(formik.errors.return && formik.touched.return)}
              label="return"
            />
          </Flex>
        </Box>
        <Box
          flex="1 1 auto"
          maxW={{ base: '100%', smp: '15rem', dt: 'auto' }}
          minW="10rem"
        >
          <FormLabel htmlFor="searchPassengers" w="100%" m={0}>
            <Box color="rgba(78, 76, 76, 0.71)" fontSize=".6875rem" pl=".3rem">
              Passengers
            </Box>
            <Select
              id="searchPassengers"
              height="2.8125rem"
              boxShadow="0 .25rem .25rem rgba(0, 0, 0, 0.25)"
              border="1px solid #D9D9D9!important"
              iconColor="#757575"
              fontWeight={600}
              iconSize={'width: ".6rem", height: ".6rem"'}
              name="passengers"
              onChange={formik.handleChange}
              icon={<ArrowBottom transform="translate(30%, 60%)" />}
            >
              <option value="1 adult">1 Adult</option>
              <option value="2 adult">2 Adult</option>
            </Select>
          </FormLabel>
        </Box>
      </Flex>
      <Box marginBottom="1rem">
        <Checkbox
          name="directFlight"
          borderColor="#868484"
          size="sm"
          isChecked={formik.values.directFlight}
          onChange={formik.handleChange}
        >
          <Box
            as="span"
            fontSize=".6875rem"
            lineHeight={1.1}
            color="rgba(78, 76, 76, 0.71)"
            fontWeight={500}
            display="flex"
            alignItems="center"
            aria-label="direct flights only"
          >
            Direct Flights Only
          </Box>
        </Checkbox>
      </Box>
      <ButtonGroup
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <AppButton
          bgColor="transparent"
          w="2.75rem"
          icon={<Reset />}
          text="Reset"
          aria-label="reset"
          type="button"
          color="#0A66C2"
          fontSize="0.6875rem"
          pl="1.5rem"
          onClickEvent={formik.resetForm}
        />
        <AppButton
          bgColor="#E32E22"
          w="7.5rem"
          aria-label="search flights"
          text="Search Flights"
          type="submit"
          color="#fff"
          fontWeight="600"
          fontSize="0.875rem"
        />
      </ButtonGroup>
    </form>
  );
};

export default SearchForm;
