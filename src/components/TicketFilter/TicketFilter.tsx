/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Flex,
  Box,
  Text,
  Stack,
  Checkbox,
  RadioGroup,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';

const RadioCard = ({
  arr,
  children,
}: {
  arr: object;
  children: React.ReactNode;
}) => {
  const { getInputProps, getCheckboxProps } = useRadio(arr);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" height="30px">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="4px"
        boxShadow="md"
        _checked={{
          bg: '#0A66C2',
          color: 'white',
          borderColor: '#0A66C2',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={2}
        py={1}
      >
        {children}
      </Box>
    </Box>
  );
};

const arr = [
  'Direct Flight',
  'Fare',
  'Departure Time',
  'Arrival Time',
  'Duration',
];

const TicketFilter = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'filter',
    defaultValue: 'Direct Flight',
    onChange: (): void => {},
  });

  const group = getRootProps();

  return (
    <Flex
      padding="0 1em"
      justify="space-between"
      width="100%"
      border="1px solid #D9D9D9"
      borderRadius={4}
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
      height="45px"
      align="center"
      {...group}
    >
      <Checkbox>Direct Flights Only</Checkbox>
      <RadioGroup display="flex" gap="1em">
        <Text lineHeight="1.8em">Sort By</Text>
        <Stack direction="row">
          {arr.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} arr={radio}>
                {value}
              </RadioCard>
            );
          })}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default TicketFilter;
