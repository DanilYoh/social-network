import { render } from '@testing-library/react';

import { NextPage } from '@/common/NextPage';

describe('Chevron component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<NextPage />);
    expect(getByText('Следующая страница')).toBeInTheDocument();

    it('should have an svg icon', () => {
      const { getByRole } = render(<NextPage />);
      expect(getByRole('img')).toBeInTheDocument();
    });
  });
});
