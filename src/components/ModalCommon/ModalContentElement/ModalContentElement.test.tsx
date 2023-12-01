import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';

import { ModalContentElement } from '@components/ModalCommon/ModalContentElement';
import { TModalMeta } from '@interfaces/modal-meta.interfaces';
import { modalContentElementMocks } from '@/mocks/modal-content-element.mocks';
import { mockConsoleError } from '@utils/mock-console-error.utils';

vi.mock('@components/TicketForm', () => ({
  TicketForm: () => <div>TicketForm</div>,
}));
const setup = (meta: TModalMeta) => {
  const utils = render(<ModalContentElement meta={meta} />);
  const validElement = utils.queryByText('TicketForm');
  return { ...utils, validElement };
};
describe('ModalContentElement', () => {
  it('check if element is correct', () => {
    const mock = modalContentElementMocks.valid;
    const { validElement } = setup(mock);
    expect(validElement).not.toBeNull();
  });
  it('should throw an error', () => {
    mockConsoleError(() => {
      const mock = modalContentElementMocks.invalid;
      expect(() => setup(mock)).toThrowError('No such ModalContentElement');
    });
  });
});
