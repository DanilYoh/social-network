import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

export const Numeration: FC = () => (
  <>
    <Flex
      flexDirection="column"
      position="absolute"
      left={{ sm: '-40px', md: '-50px' }}
      top={{ sm: 4, md: 2 }}
      color="grey"
    >
      <Box marginTop={{ sm: 6, md: 9 }}>8</Box>
      <Box marginTop={{ sm: 5, md: 9 }}>9</Box>
      <Box marginTop={{ sm: 7, md: 9 }}>10</Box>
      <Box marginTop={{ sm: 7, md: 9 }}>11</Box>
      <Box marginTop={{ sm: 7, md: 8 }}>12</Box>
      <Box marginTop={{ sm: 7, md: 10 }}>13</Box>
      <Box marginTop={{ sm: 7, md: 10 }}>14</Box>
      <Box marginTop={{ sm: 7, md: 10 }}>15</Box>
      <Box marginTop={{ sm: 7, md: 10 }}>16</Box>
      <Box marginTop={{ sm: 7, md: 10 }}>17</Box>
    </Flex>
    <Flex
      flexDirection="column"
      position="absolute"
      left={{ sm: '-40px', md: '-50px' }}
      top={{ sm: 590, md: 700 }}
      color="grey"
    >
      <Box marginTop={{ sm: 7, md: 9 }}>18</Box>
      <Box marginTop={{ sm: 7, md: 9 }}>19</Box>
      <Box marginTop={{ sm: 6, md: 9 }}>20</Box>
      <Box marginTop={{ sm: 6, md: 10 }}>21</Box>
      <Box marginTop={{ sm: 7, md: 10 }}>22</Box>
      <Box marginTop={{ sm: 6, md: 10 }}>23</Box>
      <Box marginTop={{ sm: 7, md: 10 }}>24</Box>
      <Box marginTop={{ sm: 7, md: 10 }}>25</Box>
    </Flex>
  </>
);
