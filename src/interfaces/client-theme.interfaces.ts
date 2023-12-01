import { Theme } from '@chakra-ui/react';

export type ClientTheme = Theme & {
  client: {
    white: string;
    primary: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
    black: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
    bg: string;
    bgSecondary: string;
  };
};
