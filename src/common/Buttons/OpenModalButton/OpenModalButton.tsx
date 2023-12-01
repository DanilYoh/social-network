import React, { FC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface OpenModalButton extends ButtonProps {
  children: JSX.Element | string;
}

const OpenModalButton: FC<OpenModalButton> = ({ children, ...props }) => (
  <Button
    height="2.5rem"
    borderRadius="0.125rem"
    fontSize="0.875rem"
    color="#000"
    background="#F9F9F9"
    border="0.1rem solid #DEDEDE"
    boxShadow="0 0.6rem 0.4rem -0.5rem rgba(0, 0, 0, .2)"
    {...props}
  >
    {children}
  </Button>
);

export default OpenModalButton;
