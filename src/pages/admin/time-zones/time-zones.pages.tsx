import { Flex, Text, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { TimeZonesTable } from '@components/TimeZonesTable';
import { TimeZonesFetch } from '@/store/thunks/timezones-admin.thunk';
import { ModalWindow } from '@/common/ModalWindow';
import { CreateTimeZonesForm } from '@/components/CreateTimeZonesForm';
import { TCreateOnSubmitHandler } from '@/interfaces/user-modal-timezones.interfaces';
import { ModalWindowTimeZone } from '@/common/ModalWindowTimeZones';
import { TimeZonesServices } from '@/services/time-zones.services';
import {
  timeZoneData,
  clickModalTimeZoneButton,
} from '@/store/timezones-admin.slice';
import { useMessageAlert } from '@/hooks/useMessageAlert';

const AdminTimeZones = () => {
  const { timezones, error } = useAppSelector((state) => state.timezones);
  const dispatch = useAppDispatch();

  const [createError, setCreateError] = useState<Error | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [getListLoading, setGetListLoading] = useState(false);
  const [idTimeZone, setTimeZone] = useState(0);
  const { messageApi, MessageAlertContainer } = useMessageAlert();

  const getTimeZones = async () => {
    setGetListLoading(true);
    try {
      await dispatch(TimeZonesFetch());
    } catch (err) {
      if (err instanceof Error) {
        messageApi.error(err.name);
      }
    } finally {
      setGetListLoading(false);
    }
  };

  const onSubmit: TCreateOnSubmitHandler = async (
    values,
    onSuccess,
    onClose
  ) => {
    setCreateError(null);
    setCreateLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await TimeZonesServices.postTimeZone(values);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getTimeZones();
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

  const onEditClick = (id: number) => {
    const indx = timezones.findIndex((el) => id === el.id);
    dispatch(timeZoneData(timezones[indx]));
    dispatch(clickModalTimeZoneButton());
    setTimeZone(id);
  };

  const onPatchSubmit: TCreateOnSubmitHandler = async (
    values,
    onSuccess,
    onClose
  ) => {
    try {
      await TimeZonesServices.patchAdminTimeZone(values, idTimeZone);
      await dispatch(TimeZonesFetch());
      onSuccess();
      onClose();
    } catch (err) {
      if (err instanceof Error) {
        setCreateError(err);
      }
    } finally {
      setCreateLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getTimeZones();
  }, []);

  const timeZonesTable =
    timezones.length !== 0 ? (
      <TimeZonesTable onEditClick={onEditClick} />
    ) : null;
  const errorMessage = error.length !== 0 ? 'something goes wrong' : null;
  const spinner =
    timezones.length === 0 && errorMessage == null && getListLoading ? (
      <Spinner size="xl" />
    ) : null;

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
      <Flex justifyContent="center">{errorMessage}</Flex>
      {spinner || errorMessage ? null : (
        <Flex flexDirection="row" justifyContent="space-between" w="100%">
          <Text fontSize="1.25rem" color="#818080">
            Часовые пояса
          </Text>
          <ModalWindowTimeZone
            buttonText="Редактировать"
            component={CreateTimeZonesForm}
            loading={createLoading}
            onSubmit={onPatchSubmit}
            error={createError}
          />
          <ModalWindow
            removeItemFromState={() => dispatch(timeZoneData(null))}
            buttonText="Добавить часовой пояс"
            component={CreateTimeZonesForm}
            onSubmit={onSubmit}
            error={createError}
            loading={createLoading}
          />
        </Flex>
      )}
      {timeZonesTable}
    </Flex>
  );
};

export default AdminTimeZones;
