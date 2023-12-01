import {
  Button,
  ButtonGroup,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import type { FC } from 'react';
import FocusLock from 'react-focus-lock';

import { AppButton } from '@common/AppButton';
import { FormInput } from '@common/FormInput';

const PopUp: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="top"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button
          type="button"
          bgColor="transparent"
          color="#E32E22"
          fontWeight="400"
          fontSize="0.75rem"
          _hover={{ borderColor: '#FF0302' }}
          _focus={{ outline: 'none' }}
          w="6.2475rem"
        >
          Forgot Password?
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w={{ sm: '100vw', md: 'md' }}
        h={300}
        alignContent="stretch"
        border="none"
        style={{ margin: 'auto' }}
        boxShadow="xl"
      >
        <FocusLock>
          <VStack spacing="0.6225rem" mt="0.83" p={6}>
            <PopoverHeader fontSize="0.9975rem">
              Enter email address to request link to reset password
            </PopoverHeader>
            <PopoverBody>
              <FormInput label="" id="sendEmail" type="email" focus />
            </PopoverBody>
            <PopoverFooter>
              <ButtonGroup display="flex" justifyContent="space-between">
                <AppButton
                  onClickEvent={onClose}
                  text="Cancel"
                  type="button"
                  bgColor="#EDF2F7"
                  boxShadow="0 0.2475rem 0.2475rem rgba(0, 0, 0, 0.25)"
                  w="9rem"
                  fontSize="0.8752rem"
                />
                <AppButton
                  text="Send"
                  type="submit"
                  bgColor="#E32E22"
                  color="#FFF"
                  boxShadow="0 0.2475rem 0.2475rem rgba(0, 0, 0, 0.25)"
                  w="9rem"
                  fontSize="0.8752rem"
                />
              </ButtonGroup>
            </PopoverFooter>
          </VStack>
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
};

export default PopUp;
