import { Box } from '@chakra-ui/react';

const Separator = () => (
  <Box w={38} h={55} m="0 0.75rem" display={['none', 'none', 'none', 'block']}>
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="55" fill="none">
      <path
        fill="#fff"
        d="m0 54.133 15.467-14.306L27.84 26.68 0 0l37.12 29L0 54.133Z"
      />
    </svg>
  </Box>
);

export default Separator;
