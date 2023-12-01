import { FC } from 'react';

const ErrorText: FC<{ text: string }> = ({ text }) => (
  <div style={{ color: 'red' }}>
    <span>{text}</span>
  </div>
);

export default ErrorText;
