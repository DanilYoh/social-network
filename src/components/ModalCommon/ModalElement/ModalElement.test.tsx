import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';

import { ModalElement } from '@components/ModalCommon/ModalElement';
import { TModalMeta } from '@interfaces/modal-meta.interfaces';
import { modalElementMocks } from '@/mocks/modal-element.mocks';

vi.mock('@components/ModalCommon/ModalContentElement', () => ({
  ModalContentElement: () => <div>ModalContentElement</div>,
}));

const setup = (meta: TModalMeta | null) => {
  const utils = render(<ModalElement meta={meta} />);
  const invalidElement = utils.queryByText('No ModalMeta was found');
  const validElement = utils.queryByText('ModalContentElement');
  return { ...utils, invalidElement, validElement };
};
describe('ModalElement', () => {
  it('should render valid object', () => {
    const mock = modalElementMocks.valid;
    const { invalidElement, validElement } = setup(mock);
    expect(invalidElement).toBeNull();
    expect(validElement).not.toBeNull();
  });
  it('should render invalid object', () => {
    const mock = modalElementMocks.invalid;
    const { invalidElement, validElement } = setup(mock);
    expect(invalidElement).not.toBeNull();
    expect(validElement).toBeNull();
  });
});
