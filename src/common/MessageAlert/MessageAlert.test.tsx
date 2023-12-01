import { render, screen } from '@testing-library/react';

import MessageAlert from './MessageAlert';

describe('test ErrorLoader component', () => {
  it('should it be in document', () => {
    render(<MessageAlert status="error" title="something went wrong" />);
    expect(screen.getByText('something went wrong')).toBeInTheDocument();
  });
});
