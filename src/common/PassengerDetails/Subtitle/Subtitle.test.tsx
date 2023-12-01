import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Subtitle } from '@common/PassengerDetails';

describe('Subtitle test', () => {
  it('Title and icon must be shown', () => {
    render(<Subtitle icon={<div>Icon</div>} title="Title" />);
    expect(screen.getByText(/Icon/i)).toBeDefined();
    expect(screen.getByText(/Title/i)).toBeDefined();
  });
});
