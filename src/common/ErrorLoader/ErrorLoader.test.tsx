import { render, screen } from '@testing-library/react';
import { Spinner } from '@chakra-ui/react';

import ErrorLoader from './ErrorLoader';

const errors = [
  {
    key: 'error key',
    message: 'something went wrong',
  },
];

describe('test ErrorLoader component', () => {
  it('should it be in document', () => {
    const utils = render(<ErrorLoader errors={errors} isLoading={false} />);
    utils.debug();
    expect(screen.getByText('something went wrong')).toBeInTheDocument();
  });

  test('should render Spinner component when isLoading is true', () => {
    render(<ErrorLoader errors={[]} isLoading />);
    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('should not render Spinner component when isLoading is false', () => {
    render(<ErrorLoader errors={[]} isLoading={false} />);
    const spinnerElement = screen.queryByTestId('spinner');
    expect(spinnerElement).toBeNull();
  });
});
