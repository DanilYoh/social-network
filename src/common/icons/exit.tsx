import { Icon, type IconProps } from '@chakra-ui/react';
import type { FC } from 'react';

const Exit: FC<IconProps> = (props) => (
  <Icon
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="0.938rem"
    height="1rem"
    viewBox="0 0 15 16"
  >
    <path
      d="M13.4911 7.59961L10.652 10.4387C10.5348 10.5559 10.4688 10.7151 10.4688 10.8809C10.4688 10.8909 10.469 10.9009 10.4695 10.9109C10.4769 11.0661 10.5419 11.2129 10.6518 11.3228C10.769 11.44 10.928 11.5059 11.0938 11.5059C11.2595 11.5059 11.4185 11.44 11.5357 11.3228L14.8169 8.04155C14.9342 7.92434 15 7.76537 15 7.59961C15 7.43385 14.9342 7.27488 14.8169 7.15767L11.5358 3.87649C11.4185 3.75921 11.2595 3.69336 11.0938 3.69336C10.928 3.69336 10.769 3.75921 10.6518 3.87642C10.5346 3.99363 10.4688 4.1526 10.4688 4.31836C10.4688 4.48412 10.5346 4.64309 10.6518 4.7603L13.4911 7.59961Z"
      fill="white"
    />
    <path
      d="M5.625 8.22461H14.375C14.7202 8.22461 15 7.94479 15 7.59961C15 7.25443 14.7202 6.97461 14.375 6.97461H5.625C5.27982 6.97461 5 7.25443 5 7.59961C5 7.94479 5.27982 8.22461 5.625 8.22461Z"
      fill="white"
    />
    <path
      d="M1.25 1.34961H5.625C5.97018 1.34961 6.25 1.06979 6.25 0.724609C6.25 0.379431 5.97018 0.0996094 5.625 0.0996094H1.25C0.732233 0.0996094 0.366117 0.465726 0.366117 0.465726C0 0.831843 0 1.34961 0 1.34961V13.8496C0 14.3674 0.366117 14.7335 0.366117 14.7335C0.732233 15.0996 1.25 15.0996 1.25 15.0996H5.625C5.97018 15.0996 6.25 14.8198 6.25 14.4746C6.25 14.1294 5.97018 13.8496 5.625 13.8496H1.25V1.34961Z"
      fill="white"
    />
  </Icon>
);

export default Exit;
