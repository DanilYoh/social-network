import { render } from '@testing-library/react';
import { Box, Checkbox } from '@chakra-ui/react';

describe('BoxThirdClass Test', () => {
  it('Check BoxThirdClass', () => {
    render(
      <>
        <Checkbox colorScheme="white" zIndex={2} marginTop={5} />
        <Box
          width={{ sm: '20px', md: '30px' }}
          height="6px"
          backgroundColor="#1DA1F2"
        />
      </>
    );
  });
});
