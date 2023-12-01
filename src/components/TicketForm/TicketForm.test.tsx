import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { setupServer } from 'msw/node';
import {
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@utils/test.utils';
import { TicketForm } from '@components/TicketForm/';
import { TTicketFormMocks } from '@interfaces/specific-form-mocks.interfaces';
import {
  getInitialTicketFormState,
  ticketFormMocks,
} from '@/mocks/ticket-form.mocks';
import { TTicketInitValues } from '@interfaces/formik.interfaces';
import { formFieldsRecord } from '@utils/form-fields-record.utils';
import { ticketHandlers } from '@utils/server-handlers.utils';

const server = setupServer(...ticketHandlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const setup = async (props: TTicketFormMocks) => {
  const utils = renderWithProviders(<TicketForm meta={props.meta} />, {
    preloadedState: getInitialTicketFormState(props),
  });
  const getSelects = () =>
    utils.getAllByRole('combobox') as HTMLSelectElement[];
  const checkIsSelectFilled = () =>
    getSelects().every((e) => e.options.length > 1);
  await waitFor(() => expect(checkIsSelectFilled()).toBeTruthy());

  const stringInputs = utils.getAllByRole('textbox') as HTMLInputElement[];
  const numberInputs = utils.getAllByRole('spinbutton') as HTMLInputElement[];
  const dateInputs = utils.getAllByTestId(
    'datetime-local'
  ) as HTMLInputElement[];

  const stringInputsRecord = formFieldsRecord<
    Extract<
      TTicketInitValues,
      'firstName' | 'lastName' | 'ticketNumber' | 'seatNumber' | 'code'
    >,
    HTMLInputElement
  >(stringInputs);
  const numberInputsRecord = formFieldsRecord<
    Extract<TTicketInitValues, 'flightId' | 'passengerId' | 'flightSeatId'>,
    HTMLInputElement
  >(numberInputs);
  const dateInputsRecord = formFieldsRecord<
    Extract<TTicketInitValues, 'arrivalDateTime' | 'departureDateTime'>,
    HTMLInputElement
  >(dateInputs);
  const selectsRecord = formFieldsRecord<
    Extract<TTicketInitValues, 'from' | 'to'>,
    HTMLSelectElement
  >(getSelects());

  const submitButton = utils.getByRole('button');
  return {
    ...utils,
    fieldsRecord: {
      stringInputsRecord,
      numberInputsRecord,
      selectsRecord,
      dateInputsRecord,
    },
    submitButton,
  };
};

describe('TicketForm', () => {
  it('created', async () => {
    const user = userEvent.setup();
    const mock = ticketFormMocks.create;
    const {
      submitButton,
      fieldsRecord: {
        stringInputsRecord,
        numberInputsRecord,
        selectsRecord,
        dateInputsRecord,
      },
      ...utils
    } = await setup(mock);
    await user.type(stringInputsRecord.firstName, 'Bary');
    await user.type(stringInputsRecord.lastName, 'Allen');
    await user.type(stringInputsRecord.seatNumber, '1B');
    await user.type(stringInputsRecord.ticketNumber, 'SD-2223');
    fireEvent.change(numberInputsRecord.flightId, { target: { value: 1 } });
    fireEvent.change(numberInputsRecord.flightSeatId, { target: { value: 1 } });
    fireEvent.change(numberInputsRecord.passengerId, { target: { value: 4 } });
    await user.selectOptions(selectsRecord.from, selectsRecord.from.options[1]);
    await user.selectOptions(selectsRecord.to, selectsRecord.to.options[1]);
    fireEvent.change(dateInputsRecord.departureDateTime, {
      target: { value: '2023-06-28T11:00' },
    });
    fireEvent.change(dateInputsRecord.arrivalDateTime, {
      target: { value: '2023-06-28T11:00' },
    });

    await user.click(submitButton);
    await waitForElementToBeRemoved(() => utils.getByText('Loading...'));
  });
  it.todo('has invalid fields'); // todo Обработать проверку невалидных полей после запроса на сервер, когда бэк доделает валидацию
});
