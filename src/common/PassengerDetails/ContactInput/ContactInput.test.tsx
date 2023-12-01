import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { ContactInput } from '@common/PassengerDetails';

describe('ContactInput test', () => {
  it('Check elements', () => {
    render(
      <BrowserRouter>
        <ContactInput />
      </BrowserRouter>
    );
    expect(screen.getByTestId('contactPerson')).toHaveAttribute(
      'aria-label',
      'contact person'
    );
    expect(screen.getByTestId('countryCode')).toHaveAttribute(
      'aria-label',
      'country code'
    );
    expect(screen.getByTestId('tel')).toHaveAttribute('aria-label', 'tel');
    expect(screen.getByTestId('email')).toHaveAttribute('aria-label', 'email');
    expect(screen.getByTestId('email')).toHaveAttribute('aria-label', 'email');
  });
});
