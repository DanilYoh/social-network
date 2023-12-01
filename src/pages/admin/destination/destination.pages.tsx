import { Flex, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { DestinationsTable } from '@components/DestinationsTable';
import { ModalWindow } from '@/common/ModalWindow';
import { ModalWindowDestination } from '@common/ModalWindowDestination';
import { CreateDestinationForm } from '@/components/CreateDestinationForm';
import { TCreateOnSubmitHandler } from '@/interfaces/modal-form-props.interfaces';
import { fetchDestinationAdmin } from '@/store/thunks/destination-admin.thunk';
import { DestinationServices } from '@services/destination.services';
import { useMessageAlert } from '@/hooks/useMessageAlert';
import {
  clickDestinationModal,
  setDestinationData,
} from '@store/destinations-admin.slice';

const AdminDestinations = () => {
  const { destinations, error } = useAppSelector((state) => state.destination);
  const dispatch = useAppDispatch();
  const [createError, setCreateError] = useState<Error | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [destinationId, setDestinationId] = useState(0);
  const { messageApi, MessageAlertContainer } = useMessageAlert();
  const getDestination = useCallback(() => {
    dispatch(fetchDestinationAdmin())
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
      await DestinationServices.postAdminDestination(values);
      getDestination();
      onSuccess();
      onClose();
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
    setCreateError(null);
    setCreateLoading(true);
    try {
      await DestinationServices.patchAdminDestination(values, destinationId);
      getDestination();
      onSuccess();
      onClose();
      messageApi.success('Редактирование записи произошло успешно');
    } catch (err) {
      if (err instanceof Error) {
        messageApi.error(err.name);
        setCreateError(err);
      }
    } finally {
      setCreateLoading(false);
    }
  };

  const handleEditClick = (id: number) => {
    dispatch(clickDestinationModal());
    const destinationTarget = destinations.content.find((d) => d.id === id);
    if (destinationTarget) {
      dispatch(setDestinationData(destinationTarget));
      setDestinationId(id);
    }
  };

  useEffect(() => {
    getDestination();
  }, [dispatch, getDestination]);

  const destinationsTable =
    destinations.content.length !== 0 ? (
      <DestinationsTable onEditClick={handleEditClick} />
    ) : null;
  const spinner =
    destinations.content.length === 0 && error.length === 0 ? (
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
        <Text fontSize="1.25rem" color="#818080">
          Место назначения
        </Text>
        <ModalWindow
          buttonText="Добавить пункт назначения"
          component={CreateDestinationForm}
          onSubmit={onSubmit}
          error={createError}
          loading={createLoading}
          removeItemFromState={() => dispatch(setDestinationData(null))}
        />
        <ModalWindowDestination
          buttonText="Редактировать пункт назначения"
          component={CreateDestinationForm}
          onSubmit={onPatchSubmit}
          error={createError}
          loading={createLoading}
        />
      </Flex>
      {destinationsTable}
    </Flex>
  );
};
export default AdminDestinations;
