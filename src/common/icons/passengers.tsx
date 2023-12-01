import { type IconProps } from '@chakra-ui/react';
import type { FC } from 'react';

import { UserIcon } from '@common/UserIcon';

const PassengersIcon: FC<IconProps> = (props) => {
  const { h, w, color } = props;

  return (
    <>
      <UserIcon
        h={h || '1.3rem'}
        w={w || '1.3rem'}
        mr="-.15rem"
        color={color || '#9E9E9E'}
      />
      <UserIcon
        h={h || '1.3rem'}
        w={w || '1.3rem'}
        mr=".8rem"
        color={color || '#9E9E9E'}
      />
    </>
  );
};

export default PassengersIcon;
