import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { render } from '@/test-utils';
import { MembershipLinks } from '@common/MembershipLinks';

describe('image', () => {
  it('All icons must be shown: ', () => {
    render(<MembershipLinks />);
    expect(screen.getByTestId('fb')).toBeDefined();
    expect(screen.getByTestId('twt')).toBeDefined();
    expect(screen.getByTestId('lin')).toBeDefined();
    expect(screen.getByTestId('inst')).toBeDefined();
    expect(screen.getByTestId('yt')).toBeDefined();
  });

  it('Links rendered ', () => {
    render(<MembershipLinks />);
    expect(screen.getAllByRole('link')).toHaveLength(5);
  });
});
