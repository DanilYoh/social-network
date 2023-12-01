import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { OpenModalButton } from '@common/Buttons/OpenModalButton/';
import { IOpenModalButtonMock } from '@interfaces/modal.mocks.interfaces';
import { openModalButtonMocks } from '@/mocks/open-modal-button.mocks';

const setup = ({ props, buttonText, onClick }: IOpenModalButtonMock) => {
  const utils = render(
    <OpenModalButton onClick={onClick} {...props}>
      {buttonText}
    </OpenModalButton>
  );
  const button = utils.getByRole('button') as HTMLButtonElement;
  return { ...utils, button };
};
describe('OpenModalButton', () => {
  it('should have specific title', () => {
    const mock = openModalButtonMocks.clickable;
    const { button } = setup(mock);
    expect(button.textContent).toBe(mock.buttonText);
  });
  it('should be clickable', async () => {
    const user = userEvent.setup();
    const mock = openModalButtonMocks.clickable;
    const { button } = setup(mock);
    await user.click(button);
    await user.click(button);
    expect(mock.onClick).toBeCalledTimes(2);
  });

  it('should be disabled', async () => {
    const user = userEvent.setup();
    const mock = openModalButtonMocks.disabled;
    const { button } = setup(mock);
    await user.click(button);
    await user.click(button);
    expect(mock.onClick).not.toBeCalled();
  });
});
