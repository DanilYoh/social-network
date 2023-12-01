import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ErrorText from './ErrorText';

describe('CreateFlightForm', () => {
  const text = 'error';
  it('ErrorText componet', () => {
    render(<ErrorText text={text} />);
    expect(screen.getByText('error')).toBeInTheDocument();
  });
});
