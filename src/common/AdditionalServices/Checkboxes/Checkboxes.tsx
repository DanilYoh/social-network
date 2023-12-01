import React, { FC } from 'react';
import { Box, Checkbox, extendTheme, Flex, Icon } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { OneCheckbox } from '@common/AdditionalServices/Checkboxes/OneCheckbox';
import { BoxThirdClass } from '@common/AdditionalServices/Checkboxes/BoxThirdClass';
import { GetSeatById } from '@/store/thunks/seat.thunk';

function CustomIcon(props: string | number | boolean | object) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isIndeterminate, ...rest } = props;

  const d = isIndeterminate
    ? 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z'
    : 'M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z';

  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1170px',
    '2xl': '1536px',
  };

  extendTheme({ breakpoints });
  return (
    <Icon viewBox="0 0 24 24" {...rest} w="35px" h="40px">
      <path fill="grey" d={d} />
    </Icon>
  );
}

function CustomIconCross(props: string | number | boolean | object) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isIndeterminate, ...rest } = props;

  const d = isIndeterminate
    ? 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z'
    : 'M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0' +
      '-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.08' +
      '1-7.08c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.4' +
      '06,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.' +
      '064,0,1.469c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-' +
      '0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.2' +
      '03,0.469,0.304,0.735,0.304c0.267,0,0.532-0.101,0.735-0.3' +
      '04c0.406-0.406,0.406-1.064,0-1.469L11.469,10z';

  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1170px',
    '2xl': '1536px',
  };

  extendTheme({ breakpoints });
  return (
    <Icon viewBox="0 0 20 20" {...rest} w="35px" h="40px">
      <path fill="grey" d={d} />
    </Icon>
  );
}

export const Checkboxes: FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Flex
        flexDirection="column" // A
        position="absolute"
        top={3}
        left={6}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white" // A1(A8)
          zIndex={2}
          marginTop={5}
          id="1"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line
              dispatch(GetSeatById(id));
            }
          }}
        />

        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#FFA500"
        />
        <Checkbox
          icon={<CustomIcon />} // A2(A9)
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          id="7"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <BoxThirdClass />
        <Checkbox
          icon={<CustomIcon />} // A3(A10)
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />

        <BoxThirdClass />
        <Checkbox
          icon={<CustomIcon />} // (A11)
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // --------------------A2------------------
        position="absolute"
        top={{ sm: '590px', md: '710px' }}
        left={6}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white" // 11A(18A)
          zIndex={2}
          marginTop={5}
          id="13"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#BD0909"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIconCross />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          isChecked
        />
        <BoxThirdClass />
        <OneCheckbox />
        <OneCheckbox />

        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // ----------------B1--------------
        position="absolute"
        top={3}
        left={{ sm: '50px', md: '70px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white" // B1(B8)
          zIndex={2}
          marginTop={5}
          id="2"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#FFA500"
        />
        <Checkbox
          icon={<CustomIcon />} // B2(b9)
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          id="8"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <BoxThirdClass />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIconCross />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          isChecked
        />
        <BoxThirdClass />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // ----------------B2----------
        position="absolute"
        top={{ sm: '590px', md: '710px' }}
        left={{ sm: '50px', md: '70px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#BD0909"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIconCross />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          isChecked
        />
        <BoxThirdClass />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // --------------------C1-----------------
        position="absolute"
        top={3}
        left={{ sm: '110px', md: '190px' }}
      >
        <Checkbox
          icon={<CustomIcon />} // C1
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          id="3"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#FFA500"
        />
        <Checkbox
          icon={<CustomIcon />} // C2
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          id="9"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#1DA1F2"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIconCross />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          isChecked
        />
        <BoxThirdClass />
        <Checkbox
          icon={<CustomIconCross />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          isChecked
        />
        <BoxThirdClass />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // C2
        position="absolute"
        top={{ sm: '590px', md: '710px' }}
        left={{ sm: '110px', md: '190px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#BD0909"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // ---------------D1----------------
        position="absolute"
        top={3}
        left={{ sm: '135px', md: '240px' }}
      >
        <Checkbox
          icon={<CustomIcon />} // D1
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          id="4"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#FFA500"
        />
        <Checkbox
          icon={<CustomIcon />} // D2
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          id="10"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#1DA1F2"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // D2
        position="absolute"
        top={{ sm: '590px', md: '710px' }}
        left={{ sm: '135px', md: '240px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#BD0909"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // -----------------E1------------
        position="absolute"
        top={3}
        left={{ sm: '160px', md: '290px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white" // E1(E8)
          zIndex={2}
          marginTop={5}
          id="5"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#FFA500"
        />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white" // E2
          zIndex={2}
          marginTop={5}
          id="11"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#1DA1F2"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // E2
        position="absolute"
        top={{ sm: '590px', md: '710px' }}
        left={{ sm: '160px', md: '290px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#BD0909"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // G1
        position="absolute"
        top={3}
        left={{ sm: '230px', md: '460px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#FFA500"
        />
        <Checkbox
          icon={<CustomIconCross />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          isChecked
        />
        <BoxThirdClass />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIconCross />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          isChecked
        />
        <BoxThirdClass />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // G2
        position="absolute"
        top={{ sm: '590px', md: '710px' }}
        left={{ sm: '230px', md: '460px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#BD0909"
        />

        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // ----------------F1---------
        position="absolute"
        top={3}
        left={{ sm: '185px', md: '340px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white" // F1
          zIndex={2}
          marginTop={5}
          id="6"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#FFA500"
        />
        <Checkbox
          icon={<CustomIcon />} // F2
          colorScheme="white"
          zIndex={2}
          marginTop={5}
          id="12"
          onChange={(event) => {
            if (event.target.checked) {
              const id = event.target.id.toString();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dispatch(GetSeatById(id));
            }
          }}
        />
        <BoxThirdClass />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // F2
        position="absolute"
        top={{ sm: '590px', md: '710px' }}
        left={{ sm: '185px', md: '340px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#BD0909"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // H1
        position="absolute"
        top={3}
        left={{ sm: '255px', md: '515px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#FFA500"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
      <Flex
        flexDirection="column" // H2
        position="absolute"
        top={{ sm: '590px', md: '710px' }}
        left={{ sm: '255px', md: '515px' }}
      >
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#BD0909"
        />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <OneCheckbox />
        <Checkbox
          icon={<CustomIcon />}
          colorScheme="white"
          zIndex={2}
          marginTop={5}
        />
        <BoxThirdClass />
      </Flex>
    </>
  );
};
