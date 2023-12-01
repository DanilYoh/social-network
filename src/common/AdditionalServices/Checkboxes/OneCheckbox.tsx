import React, { FC } from 'react';
import { Box, Checkbox, Icon } from '@chakra-ui/react';

function CustomIcon(props: string | number | boolean | object) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isIndeterminate, ...rest } = props;

  const d = isIndeterminate
    ? 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z'
    : 'M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z';

  return (
    <Icon viewBox="0 0 24 24" {...rest} w={{ sm: '20px', md: '35px' }} h="40px">
      <path fill="grey" d={d} />
    </Icon>
  );
}

export const OneCheckbox: FC = () => (
  <>
    <Checkbox
      icon={<CustomIcon />}
      colorScheme="white"
      zIndex={2}
      marginTop={5}
    />
    <Box
      width={{ sm: '20px', md: '30px' }}
      height="6px"
      backgroundColor="#1DA1F2"
    />
  </>
);
