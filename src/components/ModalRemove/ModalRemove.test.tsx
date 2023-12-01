import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ModalRemove from './ModalRemove';

const promise = new Promise<void>((resolve) => {
  resolve();
});

const open = true;

describe('check modalRemove', () => {
  it('check', () => {
    render(
      <BrowserRouter>
        <ModalRemove
          isOpen={open}
          onClose={() => ''}
          onDelete={() => promise}
          itemOnDelete={1}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('Удалить')).toBeInTheDocument();
    expect(screen.getByText('Отменить')).toBeInTheDocument();
  });
});
