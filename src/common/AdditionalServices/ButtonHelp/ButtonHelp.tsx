import React, { FC } from 'react';
import { Button, Divider, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ButtonHelp: FC<{ text: string; type: 'button' }> = ({ text, type }) => (
  <>
    <Button
      type={type}
      fontWeight="700"
      fontSize="0.8752rem"
      height="1.1872rem"
      color="#FFF"
      mt="auto"
      mb="1.0425rem"
      backgroundColor="transparent"
      _hover={{
        backgroundColor: 'transparent',
        textDecoration: 'underline',
      }}
      _active={{
        backgroundColor: 'transparent',
        textDecoration: 'underline',
      }}
      _after={{
        content: '""',
        border: 'solid #fff',
        borderWidth: '0 0.1425rem 0.1425rem 0',
        display: 'inline-block',
        padding: '0.1425rem',
        transform: 'rotate(45deg) translate(0.3rem, -0.15rem)',
        marginTop: '0.75rem',
        pointerEvents: 'none',
      }}
      p={0}
      aria-label="currency"
      display={['none', 'none', 'flex', 'flex']}
    >
      {text}
    </Button>
    <Divider
      display={['none', 'none', 'inherit', 'inherit']}
      orientation="vertical"
      w="0.0625rem"
      h="3.6877rem"
      bg="#d9d9d9"
      ml="0.375rem"
      mr="0.5002rem"
      transform="translateX(0.0625rem)"
    />
    <Link
      to="/help"
      style={{
        display: 'block',
        marginTop: 'auto',
        marginBottom: '1.125rem',
      }}
    >
      <Text
        display={['none', 'none', 'flex', 'flex']}
        fontWeight="700"
        fontSize="0.8752rem"
        lineHeight="1.1872rem"
        color="#FFF"
        aria-label="link to help"
        alignSelf="end"
        _hover={{ textDecoration: 'underline' }}
      >
        HELP
      </Text>
    </Link>
  </>
);

export default ButtonHelp;
