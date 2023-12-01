import { FC, useEffect, useState } from 'react';
import { Container, Flex, Spinner, Text } from '@chakra-ui/react';

import { FormProps } from '@interfaces/signin-form.interfaces';
import { CreateAircraftForm } from '@components/CreateAircraftForm';
import { ModalWindow } from '@common/ModalWindow';
import { AircraftServices } from '@services/aircraft.services';
import { TableAircraft } from '@components/TableAircraft';
import { TCreateOnSubmitHandler } from '@interfaces/modal-form-props.interfaces';
import { ModalWindowAircrafts } from '@/common/ModalWindowAircrafts';
import {
  clickModalAircraftsButton,
  aircraftData,
} from '@/store/aircrafts.slice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { AircraftsFetch } from '@/store/thunks/aircrafts.thunk';
import { useMessageAlert } from '@/hooks/useMessageAlert';

const AircraftListPage: FC<FormProps> = () => {
  const { aircrafts } = useAppSelector((state) => state.aircrafts);
  const dispatch = useAppDispatch();
  const [idAircraft, setIdAircraft] = useState(0);

  const [createError, setCreateError] = useState<Error | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [getListError, setGetListError] = useState<Error | null>(null);
  const [getListLoading, setGetListLoading] = useState(false);
  const { messageApi, MessageAlertContainer } = useMessageAlert();

  const getAircraftList = async () => {
    setGetListError(null);
    setGetListLoading(true);
    try {
      await dispatch(AircraftsFetch());
    } catch (err) {
      if (err instanceof Error) {
        messageApi.error(err.name);
        setGetListError(null);
      }
    } finally {
      setGetListLoading(false);
    }
  };
  const onCreateSubmit: TCreateOnSubmitHandler = async (
    values,
    onSuccess,
    onClose
  ) => {
    setCreateError(null);
    setCreateLoading(true);
    try {
      await AircraftServices.postAdminAircraft(values);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getAircraftList();
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
  const onPatchSubmit: TCreateOnSubmitHandler = async (
    values,
    onSuccess,
    onClose
  ) => {
    try {
      await AircraftServices.patchAdminAircraft(values, idAircraft);
      await dispatch(AircraftsFetch());
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
    const indx = aircrafts.findIndex((el) => id === el.id);
    dispatch(aircraftData(aircrafts[indx]));
    dispatch(clickModalAircraftsButton());
    setIdAircraft(id);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getAircraftList();
  }, []);

  if (getListError) {
    return (
      <Flex padding="3.125rem" justifyContent="center">
        <Text>Something goes wrong</Text>;
      </Flex>
    );
  }

  return (
    <Container maxW="85.75rem" pt="4.0625rem">
      {MessageAlertContainer}
      <Flex justifyContent="space-between" mb="1.375rem">
        <Text fontSize="1.25rem" color="#818080">
          Самолёты
        </Text>
        <ModalWindowAircrafts
          buttonText="Редактировать"
          component={CreateAircraftForm}
          onSubmit={onPatchSubmit}
          error={createError}
          loading={createLoading}
        />
        <ModalWindow
          removeItemFromState={() => dispatch(aircraftData(null))}
          buttonText="Добавление самолёта"
          component={CreateAircraftForm}
          onSubmit={onCreateSubmit}
          error={createError}
          loading={createLoading}
        />
      </Flex>
      {getListLoading ? (
        <Flex pt="9.375rem" align="center" justifyContent="center">
          <Spinner
            width="70px"
            height="70px"
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
          />
        </Flex>
      ) : (
        <TableAircraft
          onEditClick={onEditClick}
          update={getAircraftList}
          data={{ content: aircrafts }}
          error={getListError}
        />
      )}
    </Container>
  );
};

export default AircraftListPage;
