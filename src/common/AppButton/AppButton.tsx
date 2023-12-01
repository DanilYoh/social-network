import { Button } from '@chakra-ui/react';
import type { FC } from 'react';

import { IButtonProps } from '@interfaces/app-button.interfaces';

const AppButton: FC<IButtonProps> = ({
  text,
  type,
  icon,
  onClickEvent,
  ...styleProps
}) => (
  <Button
    h="2.085rem"
    pt="0.1875rem"
    type={type}
    leftIcon={icon}
    title={text}
    aria-label={text}
    onClick={onClickEvent}
    _focus={{ outlineColor: '#E32E22' }}
    _hover={{ borderColor: '#E32E22' }}
    {...styleProps}
  >
    {text}
  </Button>
);

export default AppButton;
