import { Icon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

const Arrows: FC<IconProps> = (props) => (
  <Icon
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="6"
    fill="none"
  >
    <path
      fill="#868484"
      fillRule="evenodd"
      d="m6.934.308 4.13 3.863a.626.626 0 0 1 .033.885l-3.835 4.1a.626.626 0 0 1-.885.027.626.626 0 0 1-.033-.884L9.15 5.297l-8.5.255-.047-1.25 8.501-.256L6.082 1.22a.626.626 0 0 1-.033-.885.626.626 0 0 1 .885-.027Z"
      clipRule="evenodd"
    />
    <path
      fill="#868484"
      fillRule="evenodd"
      d="M4.168 16.567.183 12.582a.626.626 0 0 1 0-.885l3.985-3.985a.626.626 0 1 1 .885.886l-2.915 2.915h8.506v1.252H2.138l2.915 2.916a.626.626 0 1 1-.885.886Z"
      clipRule="evenodd"
    />
  </Icon>
);

export default Arrows;
