import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Regulations } from '@common/Regulations';

describe('Regulations component List tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Regulations />
      </BrowserRouter>
    );
  });
  it('Check Heading', () => {
    expect(screen.getByText('Travel Regulations')).toBeInTheDocument();
  });

  it('Check Text', () => {
    expect(
      screen.getByText(/Dear Passengers, We recommend that you review/i)
    ).toBeInTheDocument();
  });

  it('Link test', () => {
    expect(screen.getByTestId('travel-link')).toHaveAttribute(
      'href',
      '/travel'
    );
    expect(screen.getByTestId('covid-link')).toHaveAttribute('href', '/covid');
  });
});
