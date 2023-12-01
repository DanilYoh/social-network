import { IconButton, InputRightElement } from '@chakra-ui/react';
import { FC } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

import { InputIconProps } from '@interfaces/signin-form.interfaces';

const ShowPassword: FC<InputIconProps> = ({ handleClick, show }) => (
  <InputRightElement>
    <IconButton
      colorScheme="transparent"
      aria-label="Show password"
      title="Show"
      onClick={handleClick}
      mt="0.5rem"
      _hover={{ border: 'none' }}
      _focus={{ outline: 'none' }}
      data-testid="show"
      height="0.75rem"
      icon={
        show ? (
          <IoEyeOff
            size="1.41rem"
            width="1.875rem"
            height="0.75rem"
            color="#BDBDBD"
          />
        ) : (
          <IoEye size="1.41rem" height="0.75rem" color="#BDBDBD" />
        )
      }
    />
  </InputRightElement>
);

export default ShowPassword;
