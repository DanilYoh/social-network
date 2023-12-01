import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

export const LettersNumeration: FC = () => (
  <>
    <Flex
      flexDirection="row"
      position="relative"
      left={20}
      top={0}
      color="black"
    >
      <Box right={{ sm: '52px', md: 45 }} pos="relative">
        A
      </Box>
      <Box left={{ sm: '-35px', md: -2 }} pos="relative">
        B
      </Box>
    </Flex>
    <Flex
      flexDirection="row"
      position="absolute"
      left={{ sm: 100, md: 160 }}
      top={0}
      color="black"
    >
      <Box paddingLeft={{ sm: '15px', md: 10 }} pos="relative">
        C
      </Box>
      <Box paddingLeft={{ sm: '15px', md: 10 }} pos="relative">
        D
      </Box>
      <Box paddingLeft={{ sm: '15px', md: 10 }} pos="relative">
        E
      </Box>
      <Box paddingLeft={{ sm: '15px', md: 10 }} pos="relative">
        F
      </Box>
    </Flex>

    <Flex
      flexDirection="row"
      position="absolute"
      left={{ sm: 220, md: 430 }}
      top={0}
      color="black"
    >
      <Box paddingLeft={{ sm: '13px', md: 10 }} pos="relative">
        G
      </Box>
      <Box paddingLeft={{ sm: '13px', md: 10 }} pos="relative">
        H
      </Box>
    </Flex>
  </>
);
