import { describe, test } from 'vitest';
import { screen, waitFor } from '@testing-library/react';

import { TModalMeta } from '@/interfaces/modal-meta.interfaces';
import { renderWithProviders } from '@/utils/test.utils';
import { FormOuter } from '@/components/FormCommon/FormOuter';

import { useTicketFields } from './useTicketFields';

interface UseTicketFields {
  meta: TModalMeta;
}

const metaStub: UseTicketFields = {
  meta: {
    action: 'create',
    title: 'Добавить билет',
    type: 'ticket',
  },
};

const Component = () => {
  const properties = useTicketFields(metaStub);
  return <FormOuter buttonText="Save" {...properties} />;
};

describe('useTicketFields hook', () => {
  test('correct data for ticket adding', async () => {
    renderWithProviders(<Component />);

    await waitFor(() => {
      const x = screen.getByPlaceholderText('Леонова');
      expect(x).toHaveValue('');
    });
  });
});
