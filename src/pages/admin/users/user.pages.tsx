import { Flex, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { UsersFetch } from '@/store/thunks/passengers.thunk';
import { PassengerServices } from '@services/passenger.services';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { UsersTable } from '@components/UsersTable';
import { TCreateOnSubmitHandler } from '@/interfaces/modal-form-props.interfaces';
import { ModalWindow } from '@/common/ModalWindow';
import { CreateUserForm } from '@/components/CreateUserForm';
import { EditUserForm } from '@/components/EditUserForm';
import { userData, clickModalUsersButton } from '@/store/users.slice';
import { ModalWindowUsers } from '@/common/ModalWindowUsers';
import { useMessageAlert } from '@/hooks/useMessageAlert';

const AdminUsers = () => {
  const { users, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const [createError, setCreateError] = useState<Error | null>(null);
  const [createLoading, setCreateLoading] = useState(false);

  const [idUser, setIdUser] = useState(0);
  const { messageApi, MessageAlertContainer } = useMessageAlert();

  const onSubmit: TCreateOnSubmitHandler = async (values, onSuccess) => {
    try {
      await PassengerServices.postNewPassenger(values);
      await dispatch(UsersFetch());
      onSuccess?.();
    } catch (err) {
      if (err instanceof Error) {
        messageApi.error(err.name);
        setCreateError(err);
      }
    } finally {
      setCreateLoading(false);
    }
  };

  const onSubmitPatch: TCreateOnSubmitHandler = async (values, onSuccess) => {
    try {
      await PassengerServices.editPassenger(values, idUser);
      await dispatch(UsersFetch());
      onSuccess?.();
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
    const indx = users.findIndex((el) => id === el.id);
    dispatch(clickModalUsersButton());
    dispatch(userData(users[indx]));
    setIdUser(id);
  };

  useEffect(() => {
    dispatch(UsersFetch())
      .then((res) => res)
      .catch((err) => err as Error);
  }, [dispatch]);

  const usersTable =
    users.length !== 0 ? <UsersTable onEditClick={onEditClick} /> : null;
  const errorMessage = error.length !== 0 ? 'Something goes wrong' : null;
  const spinner =
    users.length === 0 && errorMessage == null ? <Spinner size="xl" /> : null;
  return (
    <Flex
      background="#fff"
      fontSize="0.875rem"
      flexDirection="column"
      margin="0 auto"
      padding="3.125rem"
      boxSizing="border-box"
      gap="1.375rem"
      data-testid="testId"
    >
      {MessageAlertContainer}
      <Flex justifyContent="center">{spinner}</Flex>
      <Flex justifyContent="center">{errorMessage}</Flex>
      {spinner || errorMessage ? null : (
        <Flex flexDirection="row" justifyContent="space-between" w="100%">
          <Text fontSize="1.25rem" color="#818080">
            Пассажиры
          </Text>
          <ModalWindowUsers
            buttonText="Редактировать"
            component={EditUserForm}
            onSubmit={onSubmitPatch}
            error={createError}
            loading={createLoading}
          />
          <ModalWindow
            buttonText="Добавить пассажира"
            component={CreateUserForm}
            onSubmit={onSubmit}
            error={createError}
            loading={createLoading}
          />
        </Flex>
      )}
      {usersTable}
    </Flex>
  );
};
export default AdminUsers;
