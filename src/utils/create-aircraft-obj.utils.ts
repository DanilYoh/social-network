import { IDataForm } from '@interfaces/modal-form-props.interfaces';

export const createFinalOjb = (values: IDataForm) => {
  const params = window.location.pathname;
  const id = params.split('/')[3][0];
  return {
    aircraftId: id,
    category: {
      categoryType:
        values.class === 'BUSINESS' ||
        values.class === 'ECONOMY' ||
        values.class === 'FIRST'
          ? values.class
          : values.class === 'PREMIUM'
          ? 'PREMIUM_ECONOMY'
          : 'ECONOMY',
    },
    isLockedBack: values.isLockedBack !== 'false',
    isNearEmergencyExit: values.isNearEmergencyExit !== 'false',
    seatNumber: values.seatNumber ? values.seatNumber : '',
  };
};
