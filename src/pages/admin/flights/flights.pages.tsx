import { Flex, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';

import { fetchDestinationAdmin } from '@/store/thunks/destination-admin.thunk';
import { fetchFlightAdmin } from '@/store/thunks/flights-admin.thunk';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { FlightsTable } from '@components/FlightsTable';
import { ModalWindow } from '@/common/ModalWindow';
import { CreateFlightForm } from '@/components/CreateFlightForm';
import { TCreateOnSubmitHandler } from '@/interfaces/modal-form-props.interfaces';
import { FlightsAdminApi } from '@services/flights.services';
import { clickModalButton, flightData } from '@/store/flights.slice';
import ModalWindowFlights from '@/common/ModalWindowFlights/ModalWindowFlights';
import { useMessageAlert } from '@/hooks/useMessageAlert';

const FlightsPage = () => {
  const { flights, error } = useAppSelector((state) => state.flights);
  const dispatch = useAppDispatch();

  const [createError, setCreateError] = useState<Error | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [idFlight, setIdFlight] = useState(0);
  const { messageApi, MessageAlertContainer } = useMessageAlert();

  useEffect(() => {
    dispatch(fetchDestinationAdmin()).catch((err) => err as Error);
  }, []);

  const getFlight = useCallback(() => {
    dispatch(fetchFlightAdmin())
      .then((res) => res)
      .catch((err: Error) => messageApi.error(err.name));
  }, [dispatch]);

  const onSubmit: TCreateOnSubmitHandler = async (
    values,
    onSuccess,
    onClose
  ) => {
    setCreateError(null);
    setCreateLoading(true);
    try {
      await FlightsAdminApi.postAdminFlights(values);
      getFlight();
      onSuccess?.();
      onClose?.();
    } catch (err) {
      if (err instanceof Error) {
        messageApi.error(err.name);
        setCreateError(err);
      }
    } finally {
      setCreateLoading(false);
    }
  };

  const onSubmitPatch: TCreateOnSubmitHandler = async (
    values,
    onSuccess,
    onClose
  ) => {
    setCreateError(null);
    setCreateLoading(true);
    try {
      await FlightsAdminApi.patchAdminFlights(values, idFlight);
      getFlight();
      onSuccess?.();
      onClose?.();
    } catch (err) {
      if (err instanceof Error) {
        messageApi.error(err.name);
        setCreateError(err);
      }
    } finally {
      setCreateLoading(false);
    }
  };

  const onEditClick = (id: number) => {
    const indx = flights.content.findIndex((el) => id === el.id);
    dispatch(clickModalButton());
    dispatch(flightData(flights.content[indx]));
    setIdFlight(id);
  };

  useEffect(() => {
    getFlight();
  }, [dispatch, getFlight]);

  const flightsTable =
    flights.content.length !== 0 ? (
      <FlightsTable onEditClick={onEditClick} />
    ) : null;
  const spinner =
    flights.content.length === 0 && error.length === 0 ? (
      <Spinner size="xl" />
    ) : null;

  if (error.length !== 0) {
    return (
      <Flex padding="3.125rem" justifyContent="center">
        <Text>Something goes wrong</Text>;
      </Flex>
    );
  }

  return (
    <Flex
      background="#fff"
      fontSize="0.875rem"
      flexDirection="column"
      margin="0"
      padding="3.125rem"
      boxSizing="border-box"
      gap="1.375rem"
    >
      {MessageAlertContainer}
      <Flex justifyContent="center">{spinner}</Flex>
      <Flex flexDirection="row" justifyContent="space-between" w="100%">
        <Text fontSize="1.25rem" color="#000000">
          Рейсы
        </Text>
        <ModalWindowFlights
          buttonText="Редактировать"
          component={CreateFlightForm}
          onSubmit={onSubmitPatch}
          error={createError}
          loading={createLoading}
        />
        <ModalWindow
          buttonText="Добавить рейсы +"
          component={CreateFlightForm}
          onSubmit={onSubmit}
          error={createError}
          loading={createLoading}
        />
      </Flex>
      {flightsTable}
    </Flex>
  );
};
export default FlightsPage;
