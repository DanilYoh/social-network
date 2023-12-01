import { TTicketInitValues } from '@interfaces/formik.interfaces';
import { FieldsObject } from '@interfaces/form-unions.interfaces';

export const ticketFormFields: FieldsObject<TTicketInitValues> = {
  code: {
    type: 'input',
    label: 'Рейс',
    restProps: { isDisabled: true },
  },
  lastName: {
    type: 'input',
    label: 'Фамилия',
    placeholder: 'Леонова',
  },
  firstName: {
    type: 'input',
    label: 'Имя',
    placeholder: 'Полина',
  },
  passengerId: {
    type: 'input',
    label: 'Идентификатор пассажира',
    placeholder: '1',
    restProps: {
      type: 'number',
    },
  },
  from: {
    version: 'destinations',
    type: 'select',
    label: 'Город отбытия',
    placeholder: 'Выберите город',
  },
  to: {
    version: 'destinations',
    type: 'select',
    label: 'Город прибытия',
    placeholder: 'Выберите город',
  },
  arrivalDateTime: {
    type: 'input',
    label: 'Дата прибытия',
    placeholder: '12.04.2023 18:43',
    restProps: {
      type: 'datetime-local',
    },
  },
  departureDateTime: {
    type: 'input',
    label: 'Дата отбытия',
    placeholder: '12.04.2023 18:43',
    restProps: {
      type: 'datetime-local',
    },
  },
  seatNumber: {
    type: 'input',
    label: 'Номер места на рейсе',
    placeholder: '1B',
  },
  flightSeatId: {
    type: 'input',
    label: 'Идентификатор места на рейсе',
    placeholder: '1',
    restProps: {
      type: 'number',
    },
  },
  ticketNumber: {
    type: 'input',
    label: 'Номер билета',
    placeholder: 'SD-2222',
  },
  flightId: {
    type: 'input',
    label: 'Идентификатор рейса',
    placeholder: '1',
    restProps: {
      type: 'number',
    },
  },
};
