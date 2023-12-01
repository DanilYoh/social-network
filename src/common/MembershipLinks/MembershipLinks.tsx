import { Flex, FlexProps, Link } from '@chakra-ui/react';
import type { FC } from 'react';

import { Twitter, Facebook, Linkedin, Instagram, Youtube } from '@common/icons';

const sizeForIcons = '1.125rem';

const MembershipLinks: FC<FlexProps> = (props) => (
  <Flex h="1.7497rem" align="center" {...props}>
    <Link
      aria-label="facebook"
      data-testid="fb"
      href="https://www.facebook.com/"
    >
      <Facebook boxSize={sizeForIcons} />
    </Link>
    <Link aria-label="twitter" data-testid="twt" href="https://twitter.com/">
      <Twitter boxSize={sizeForIcons} />
    </Link>
    <Link
      aria-label="linkedin"
      data-testid="lin"
      href="https://ru.linkedin.com/"
    >
      <Linkedin boxSize={sizeForIcons} />
    </Link>
    <Link
      aria-label="instagram"
      data-testid="inst"
      href="https://www.instagram.com/"
    >
      <Instagram boxSize={sizeForIcons} />
    </Link>
    <Link aria-label="youtube" data-testid="yt" href="https://www.youtube.com/">
      <Youtube boxSize={sizeForIcons} />
    </Link>
  </Flex>
);

export default MembershipLinks;
