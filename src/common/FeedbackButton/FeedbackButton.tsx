import { Button } from '@chakra-ui/react';
import { FC } from 'react';

const FeedbackButton: FC = () => (
  <Button
    aria-label="feedback"
    h="2.175rem"
    w="9rem"
    bg="#04396D"
    display={{ sm: 'none', md: 'inherit' }}
    position="absolute"
    top="36vh"
    right="-3.435rem"
    color="white"
    transform="rotate(-90deg)"
    borderRadius="0.1875rem"
    _hover={{ background: '#04396D', opacity: '0.8' }}
    zIndex="100"
  >
    FEEDBACK
  </Button>
);

export default FeedbackButton;
