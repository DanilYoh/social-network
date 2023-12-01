import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';

import { ModalManager } from '@components/ModalCommon/ModalManager';
import { IModalManagerMocks } from '@interfaces/modal.mocks.interfaces';
import { modalManagerMocks } from '@/mocks/modal-manager.mocks';

const { useAppSelector, useAppDispatch } = vi.hoisted(() => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}));
vi.mock('@/hooks', () => ({ useAppSelector, useAppDispatch: vi.fn() }));
vi.mock('@components/ModalCommon/ModalElement', () => ({
  ModalElement: () => <div>Модалка</div>,
}));

const setup = ({ meta, isOpen, setClose }: IModalManagerMocks) => {
  useAppSelector.mockReturnValue({ isOpen, meta });
  useAppDispatch.mockReturnValue({ setClose });
  const utils = render(<ModalManager />);
  const modalContent = utils.queryByTestId('modal-content');
  return { ...utils, modalContent };
};
describe('ModalManager', () => {
  it('check closed ModalManager', () => {
    const mock = modalManagerMocks.closed;
    const { modalContent } = setup(mock);
    expect(modalContent).toBeNull();
  });
  it('check opened ModalManager', () => {
    const mock = modalManagerMocks.opened;
    const { modalContent } = setup(mock);
    expect(modalContent).not.toBeNull();
  });
});
