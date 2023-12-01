import { renderWithProviders } from '@/utils/test.utils';

import AdminTimeZones from './time-zones.pages';

describe('Admin time zone', () => {
  it('Admin time zone page', () => {
    renderWithProviders(<AdminTimeZones />);
  });
});
