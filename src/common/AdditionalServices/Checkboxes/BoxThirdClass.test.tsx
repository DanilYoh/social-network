import { render } from '@testing-library/react';
import { Box } from '@chakra-ui/react';

describe('BoxThirdClass Test', () => {
  it('Check BoxThirdClass', () => {
    render(
      <Box
        width={{ sm: '20px', md: '30px' }}
        height="6px"
        backgroundColor="#1DA1F2"
      />
    );
  });
});
