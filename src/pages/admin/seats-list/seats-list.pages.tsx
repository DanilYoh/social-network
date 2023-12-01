import { Container, Flex, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { useParams } from 'react-router';

import { TableSeat } from '@components/TableSeats';
import { useAppDispatch } from '@/hooks';
import { ModalWindow } from '@common/ModalWindow';
import { CreateSeatForm } from '@components/CreateSeatForm';
import { CreateSeatServices, GetSeatById } from '@/store/thunks/seat.thunk';
import { TCreateOnSubmitHandler } from '@interfaces/modal-form-props.interfaces';
import { createFinalOjb } from '@utils/create-aircraft-obj.utils';
import { useMessageAlert } from '@/hooks/useMessageAlert';

const SeatsListPages: FC = () => {
  const [createError, setCreateError] = useState<Error | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { messageApi, MessageAlertContainer } = useMessageAlert();
  const onCreateSubmit: TCreateOnSubmitHandler = async (
    values,
    onSuccess,
    onClose
  ) => {
    setCreateError(null);
    setCreateLoading(true);
    try {
      const finalObj = createFinalOjb(values);
      await dispatch(CreateSeatServices(finalObj));
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
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
  const params = useParams();
  const aircraftId = params.seat && params.seat.split(';')[0];
  const model = params.seat && params.seat.split(';')[2];
  const company = params.seat && params.seat.split(';')[1];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line
  dispatch(GetSeatById(aircraftId));
  return (
    <Container maxW="85.75rem" pt="4.0625rem">
      {MessageAlertContainer}
      <Flex justifyContent="space-between" mb="1.375rem">
        <Text fontSize="1.25rem" color="#818080">
          {company && model ? `${company} ${model} Сиденье` : null}
        </Text>
        <ModalWindow
          buttonText="Добавить сиденье"
          component={CreateSeatForm}
          onSubmit={onCreateSubmit}
          error={createError}
          loading={createLoading}
        />
      </Flex>
      <TableSeat />
    </Container>
  );
};

export default SeatsListPages;
