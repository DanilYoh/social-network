import { Box, Icon, Text, type IconProps } from '@chakra-ui/react';
import type { FC } from 'react';

const Logo: FC<IconProps> = () => (
  <Box display="flex">
    <Icon
      viewBox="0 0 88 62"
      w="5.34rem"
      h="3.6225rem"
      lineHeight="0"
      border="0.1275rem solid #04396D"
      fill="#FFF"
    >
      <g filter="url(#filter0_b_1_66)">
        <g filter="url(#filter1_b_1_66)">
          <circle cx="31" cy="31" r="29" fill="#FEFEFE" />
          <circle cx="31" cy="31" r="30" stroke="#04396D" strokeWidth="2" />
        </g>
        <path
          d="M3.93359 17.4673L18.2403 32.934L31.3869 45.3073L58.0669 17.4673L29.0669 54.5873L3.93359 17.4673Z"
          fill="#0A66C2"
        />
        <path
          d="M13.9868 32.9341L33.403 38.0896L51.2449 42.2141L87.4535 32.9341L48.0964 45.3074L13.9868 32.9341Z"
          fill="#BD0909"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1_66"
          x="-7"
          y="-7"
          width="101.454"
          height="76"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_66"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_66"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_1_66"
          x="-4"
          y="-4"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_66"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_66"
            result="shape"
          />
        </filter>
      </defs>
    </Icon>

    <Text
      whiteSpace="nowrap"
      fontSize="1.125rem"
      color="#FFF"
      ml="-1.875rem"
      mt="auto"
    >
      UX AIR
    </Text>
  </Box>
);

export default Logo;
