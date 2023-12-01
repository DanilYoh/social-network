import { Icon, type IconProps } from '@chakra-ui/react';
import type { FC } from 'react';

// import minus from '@images/minusSign.svg';

const Minus: FC<IconProps> = (props) => (
  <Icon {...props} h="1.5625rem" w="1.6875rem">
    <svg
      width="24"
      height="24"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="12.5" r="11.5" stroke="#A6A6A6" strokeWidth="2" />
      <rect x="6" y="11.5" width="13" height="2" rx="1" fill="#A6A6A6" />
    </svg>
    ;
  </Icon>
);

export default Minus;
