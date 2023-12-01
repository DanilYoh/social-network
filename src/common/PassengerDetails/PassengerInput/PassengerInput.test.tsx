import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PassengerInput } from '@common/PassengerDetails';

describe('PassengerInput test', () => {
  it('Check elements', () => {
    render(<PassengerInput passengerNumber={1} key={1} />);
    expect(screen.getByText('Passenger 1:')).toBeDefined();
    expect(screen.getByTestId('firstName')).toHaveAttribute(
      'aria-label',
      'first name'
    );
    expect(screen.getByTestId('lastName')).toHaveAttribute(
      'aria-label',
      'last name'
    );
    expect(screen.getByTestId('birthDay')).toHaveAttribute(
      'aria-label',
      'day of birth'
    );
    expect(screen.getByTestId('birthMonth')).toHaveAttribute(
      'aria-label',
      'month of birth'
    );
    expect(screen.getByTestId('birthYear')).toHaveAttribute(
      'aria-label',
      'year of birth'
    );
  });
});
