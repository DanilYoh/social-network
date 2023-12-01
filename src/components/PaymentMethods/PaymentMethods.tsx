import { FC, useState } from 'react';
import { Box, Stack, Flex, Radio, RadioGroup, Image } from '@chakra-ui/react';

import americanexp from '../../assets/images/payment-logo-ae.png';
import maestro from '../../assets/images/payment-logo-maestro.png';
import masterc from '../../assets/images/payment-logo-mc.png';
import payp from '../../assets/images/payment-logo-payp.png';
import postf from '../../assets/images/payment-logo-postf.png';
import visa from '../../assets/images/payment-logo-visa.png';

const PaymentMethods: FC = () => {
  const [value, setValue] = useState('0');

  const values = ['Credit Card/Debit Card', 'PayPal', 'Post Finance'];

  return (
    <Flex
      mb={30}
      alignItems="center"
      flexDirection={{ md: 'row', sm: 'column' }}
    >
      <RadioGroup mr="7rem" onChange={setValue} value={value}>
        <Stack gap={10} direction="column">
          {values.map((el, ind) => (
            <Radio
              key={el}
              size="lg"
              colorScheme="white"
              style={{ color: '#0A66C2' }}
              value={ind.toString()}
            >
              <Box {...(ind.toString() !== value && { color: '#A6A6A6' })}>
                {el}
              </Box>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Flex gap={5} justifyContent="space-evenly" direction="column">
        <Flex alignItems="center">
          <Image src={masterc} />
          <Image src={visa} />
          <Image src={maestro} />
          <Image src={americanexp} />
        </Flex>
        <Flex alignItems="center">
          <Image src={payp} />
        </Flex>
        <Flex ml={-3} alignItems="center">
          <Image src={postf} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PaymentMethods;
