import { act } from '@testing-library/react';
import { vi } from 'vitest';

import { renderWithProviders } from '@/utils/test.utils';
import { PopMessageManager } from '@components/PopMessageManager';
import { IPopMessageManager } from '@interfaces/pop-message-manager.interfaces';
import { popMessageManagerMocks } from '@/mocks/pop-message-manager.mocks';

const { useAppSelector } = vi.hoisted(() => ({
  useAppSelector: vi.fn(),
}));

vi.mock('@/hooks', () => ({
  useAppDispatch: vi.fn(() => vi.fn()),
  useAppSelector,
}));

const setup = async ({ meta }: IPopMessageManager) => {
  useAppSelector.mockImplementation(() => ({
    meta,
  }));
  const utils = await act(() => renderWithProviders(<PopMessageManager />));
  const popMessage = utils.queryByRole('status');
  return { ...utils, popMessage };
};
describe('PopMessageManager', () => {
  it('should render nothing', async () => {
    const mock = popMessageManagerMocks.empty;
    const { popMessage } = await setup(mock);
    expect(popMessage).toBeNull();
  });
  it('should render success', async () => {
    const mock = popMessageManagerMocks.success;
    const { popMessage } = await setup(mock);
    expect(popMessage).not.toBeNull();
    expect(popMessage).toHaveTextContent('Success');
  });
  it('should render error', async () => {
    const mock = popMessageManagerMocks.error;
    const { popMessage } = await setup(mock);
    expect(popMessage).not.toBeNull();
    expect(popMessage).toHaveTextContent('Error');
  });
});
