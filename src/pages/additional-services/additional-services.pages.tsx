import React, { FC } from 'react';
import { Box, extendTheme } from '@chakra-ui/react';

import { AdditionalServicesFooter } from '@common/AdditionalServices/Footer/AdditionalServicesFooter';
import { AdditionalServicesTitle } from '@/common/AdditionalServices/AdditionalServicesTitle';
import { AdditionalServicesHeader } from '@common/AdditionalServices/Header/AdditionalServicesHeader';
import { Checkboxes } from '@common/AdditionalServices/Checkboxes/Checkboxes';
import { SeatSection } from '@common/AdditionalServices/Sections/SeatSection';
import { Numeration } from '@common/AdditionalServices/Numeration/Numeration';
import { LettersNumeration } from '@common/AdditionalServices/Numeration/LettersNumeration';
import { DepartingFlight } from '@common/AdditionalServices/Sections/DepartingFlight';

import './additional-services.pages.css';

const AdditionalServices: FC = () => {
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1170px',
  };

  extendTheme({ breakpoints });

  return (
    <>
      <AdditionalServicesTitle label="Seat Selection" />
      <AdditionalServicesHeader />

      <Box
        display="grid"
        top={{ sm: 135, md: 140 }}
        left={{ sm: '50px', md: '70px' }}
        width={{ sm: '300px', md: '580px', lg: '680px' }} // 580
        height={{ sm: 1050, md: 1250 }}
        gridGap={2}
        gridAutoFlow="row dense"
        backgroundColor="white"
        position="absolute"
        borderRight="5px solid"
        borderLeft="5px solid"
        borderColor="grey"
      >
        <LettersNumeration />
        <Checkboxes />
        <Numeration />
      </Box>
      <SeatSection />
      <Box
        display="grid"
        top={{ sm: 1330, md: 320 }}
        left={{ sm: 0, md: 900 }}
        width={{ sm: 370, md: 550 }}
        height={400}
        gridGap={2}
        gridAutoFlow="row dense"
        backgroundColor="white"
        position="absolute"
        border="1px solid #A6A6A6"
      >
        <DepartingFlight />
      </Box>

      <AdditionalServicesFooter />
    </>
  );
};

export default AdditionalServices;
