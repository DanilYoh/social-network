import { fireEvent, render, screen } from '@testing-library/react';

import { useMessageAlert } from './useMessageAlert';

const Component = () => {
  const { messageApi, MessageAlertContainer } = useMessageAlert();
  const showAlert = (): void => {
    messageApi.success('everything is success!');
  };
  return (
    <>
      {MessageAlertContainer}
      <button type="button" onClick={showAlert}>
        click
      </button>
    </>
  );
};

describe('test hook alert message', () => {
  test('test component that alert works', () => {
    render(<Component />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('everything is success!')).toBeInTheDocument();
  });
});
