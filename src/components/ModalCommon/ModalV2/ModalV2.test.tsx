import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { ModalV2 } from '@components/ModalCommon/ModalV2';
import { IModalV2Mock } from '@interfaces/modal.mocks.interfaces';
import { modalV2Mocks } from '@/mocks/modal-v2.mocks';

const setup = ({ isOpen, onClose, title }: IModalV2Mock) => {
  const utils = render(
    <ModalV2 title={title} isOpen={isOpen} onClose={onClose}>
      Модалка
    </ModalV2>
  );
  const modalContent = utils.getByTestId('modal-content');
  const modalBG = modalContent.closest('div') as HTMLDivElement;
  const closeButton = utils.getByRole('button') as HTMLButtonElement;
  return { ...utils, modalContent, modalBG, closeButton };
};

describe('render form components', () => {
  it('should call "onClose" callback', async () => {
    const user = userEvent.setup();
    const mock = modalV2Mocks.opened;
    const { modalBG, closeButton } = setup(mock);
    await user.click(modalBG);
    expect(mock.onClose).toBeCalledTimes(1);
    await user.click(closeButton);
    await user.click(closeButton);
    expect(mock.onClose).toBeCalledTimes(3);
  });
});
