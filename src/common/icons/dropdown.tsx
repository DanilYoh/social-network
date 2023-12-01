import { Icon, type IconProps } from '@chakra-ui/react';
import type { FC } from 'react';

const DropdownIcon: FC<IconProps> = () => (
  <Icon
    width="4"
    height="18"
    viewBox="0 0 4 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <svg>
      <path
        d="M0.5 16.5C0.5 17.325 1.175 18 2 18C2.825 18 3.5 17.325 3.5 16.5C3.5 15.675 2.825 15 2 15C1.175 15 0.5 15.675 0.5 16.5ZM0.499999 1.5C0.499999 2.325 1.175 3 2 3C2.825 3 3.5 2.325 3.5 1.5C3.5 0.674999 2.825 -1.0398e-07 2 -6.70839e-08C1.175 -3.01878e-08 0.499999 0.674999 0.499999 1.5ZM0.5 9C0.5 9.825 1.175 10.5 2 10.5C2.825 10.5 3.5 9.825 3.5 9C3.5 8.175 2.825 7.5 2 7.5C1.175 7.5 0.5 8.175 0.5 9Z"
        fill="#04396D"
      />
    </svg>
  </Icon>
);

export default DropdownIcon;
