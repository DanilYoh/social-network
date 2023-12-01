import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TicketFilter from './TicketFilter';

describe('TicketFilter', () => {
  it('renders the component', () => {
    render(<TicketFilter />);
    expect(screen.getByLabelText('Direct Flights Only')).toBeInTheDocument();
    expect(screen.getByText('Sort By')).toBeInTheDocument();
  });

  it('changes the selected radio option', async () => {
    const user = userEvent.setup();
    render(<TicketFilter />);
    const radioOptions = screen.getAllByRole('radio');
    expect(radioOptions[0]).toBeChecked();
    await user.click(radioOptions[1]);
    expect(radioOptions[1]).toBeChecked();
  });
});
