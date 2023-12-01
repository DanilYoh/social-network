import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    sm: '0px',
    smp: '500px',
    md: '650px',
    mdp: '800px',
    mds: '1000px',
    dt: '1170px',
    dtp: '1280px',
    dl: '1380px',
  },
  fonts: {
    body: 'Open Sans',
    heading: 'Open Sans',
  },
  styles: {
    global: {},
  },
  client: {
    white: '#FFFFFF',
    primary: {
      1: '#EBF3FF',
      2: '#C2DCFF',
      3: '#85BAFF',
      4: '#4797FF',
      5: '#006FFF',
      6: '#0052BD',
      7: '#004094',
      8: '#00285C',
      9: '#001229',
    },
    black: {
      1: '#F5F5F5',
      2: '#E0E0E0',
      3: '#C2C2C2',
      4: '#A3A3A3',
      5: '#808080',
      6: '#5E5E5E',
      7: '#4A4A4A',
      8: '#2E2E2E',
      9: '#141414',
    },
    bg: '#445EBD',
    bgSecondary: '#EFEFEF',
  },
});
export default theme;
