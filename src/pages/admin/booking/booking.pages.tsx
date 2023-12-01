import { Button, Flex, Spinner, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FormikErrors } from 'formik';

import { Plus } from '@icons/index';
import { BookingTable } from '@components/BookingTable';
import { Pagination } from '@common/Pagination';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  createAdminBooking,
  deleteAdminBookingItemById,
  editAdminBooking,
  fetchAdminBookingList,
  fetchDestinationsForBooking,
  fetchFlightsListForBooking,
  fetchPassengersForBooking,
} from '@/store/thunks/booking-admin.thunk';
import { bookingAdminSlice } from '@/store/booking-admin.slice';
import { AdminModalForm } from '@common/AdminModalForm';
import {
  IFormValues,
  TInputField,
  TInputFields,
} from '@interfaces/admin-modal-form.intefaces';
import { ModalRemove } from '@/components/ModalRemove';
import { useMessageAlert } from '@/hooks/useMessageAlert';
import { TicketCategory } from '@enums/ticket-category';
import {
  IAdminBooking,
  TAdminBookingForm,
} from '@interfaces/admin-booking.interfaces';
import { BookingService } from '@services/booking.service';
import { FlightsAdminApi } from '@services/flights.services';
import { IFlightContent } from '@interfaces/search-form.interfaces';

const initialInputs: TInputFields = {
  flightKey: {
    type: 'text',
    label: 'Код (рейс)',
    disabled: true,
    value: '',
  },
  arrivalCity: {
    type: 'hidden',
    value: '',
  },
  destinationCity: {
    type: 'hidden',
    value: '',
  },
  arrivalPort: {
    type: 'select',
    placeholder: 'Выбирете город отбытия',
    label: 'Город отбытия',
    options: [],
    validate: (value: string) => {
      if (!value?.length) {
        return 'Не выбран город отправления';
      }
    },
  },
  destinationPort: {
    type: 'select',
    placeholder: 'Выбирете город прибытия',
    label: 'Город прибытия',
    options: [],
    validate: (value: string) => {
      if (!value?.length) {
        return 'Не выбран город прибытия';
      }
    },
  },
  arrivalDate: {
    type: 'datepicker',
    label: 'Дата отбытия',
    activeDates: [],
    disabled: true,
    validate: (value: string | Date) => {
      if (!(value instanceof Date)) {
        return 'Не выбрана дата отправления';
      }
    },
  },
  flightId: {
    type: 'select',
    label: 'Время отбытия',
    options: [],
    disabled: true,
    placeholder: 'Выберите время отлета',
    validate: (value: string | number) => {
      if (!value) {
        return 'Не выбрано время отправления';
      }
    },
  },
  passengerId: {
    type: 'select',
    label: 'Пассажир',
    placeholder: 'Выбирите пассажира',
    options: [],
    validate: (value: string | number) => {
      if (!value) {
        return 'Не выбран пассажир';
      }
    },
  },
  categoryType: {
    type: 'select',
    placeholder: 'Выберите категорию билета',
    label: 'Категория',
    options: Object.entries(TicketCategory).map((cat) => ({
      value: cat[0],
      name: cat[0],
    })),
    validate: (value: string) => {
      if (!value?.length) {
        return 'Не выбрана категория билета';
      }
    },
  },
};

const BookingPage = () => {
  const dispatch = useAppDispatch();

  const { page, totalPages, isLoading, destinations, passengers, flights } =
    useAppSelector((state) => state.booking);

  const [inputs, setInputs] = useState<TInputFields>(initialInputs);
  const modalForm = useDisclosure();
  const contextMenu = useDisclosure();
  const [itemForDelete, setItemForDelete] = useState(0);
  const { messageApi, MessageAlertContainer } = useMessageAlert();
  const [editId, setEditId] = useState(0);

  const formChange = (
    values: IFormValues<TInputField[]>,
    setFieldValue: (
      field: string,
      value: string | number,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IFormValues<TInputField[]>>>
  ) => {
    if (values.arrivalPort) {
      const arrivalCity =
        destinations.destinations.find(
          (destination) => destination.airportCode === values.arrivalPort
        )?.cityName ?? '';
      if (arrivalCity !== values.arrivalCity) {
        setFieldValue('arrivalCity', arrivalCity).catch((e) =>
          messageApi.error((e as Error).message)
        );
      }
    }

    if (values.destinationPort) {
      const destinationCity =
        destinations.destinations.find(
          (destination) => destination.airportCode === values.destinationPort
        )?.cityName ?? '';
      if (destinationCity !== values.destinationCity) {
        setFieldValue('destinationCity', destinationCity).catch((e) =>
          messageApi.error((e as Error).message)
        );
      }
    }

    if (values.arrivalPort && values.destinationPort) {
      const flightKey = values.arrivalPort + values.destinationPort;
      if (values.flightKey !== flightKey) {
        dispatch(bookingAdminSlice.actions.resetStateKey('flights'));
        setFieldValue('arrivalDate', '').catch((e) => {
          messageApi.error((e as Error).message);
        });
        setFieldValue('flightId', '').catch((e) => {
          messageApi.error((e as Error).message);
        });
        setFieldValue('flightKey', flightKey).catch((e) =>
          messageApi.error((e as Error).message)
        );
      }
    }

    if (
      values.arrivalCity &&
      values.destinationCity &&
      !flights.flights.length
    ) {
      dispatch(
        fetchFlightsListForBooking({
          cityFrom: values.arrivalCity,
          cityTo: values.destinationCity,
          page: 0,
        })
      ).catch((e) => messageApi.error((e as Error).message));
    }

    if (values.arrivalDate) {
      const flOptions = flights.flights
        .filter(
          (flight) =>
            new Date(flight.arrivalDateTime).toDateString() ===
            new Date(values.arrivalDate).toDateString()
        )
        .map((flight) => ({
          value: flight.id,
          name: new Date(flight.arrivalDateTime).toLocaleTimeString(),
        }));

      setInputs((prevState) => ({
        ...prevState,
        flightId: {
          ...prevState.flightId,
          disabled: false,
          options: flOptions,
        },
      }));
    }
  };

  useEffect(() => {
    dispatch(fetchAdminBookingList(page)).catch((err: Error) =>
      messageApi.error(err.name)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  useEffect(() => {
    if (
      destinations.page === -1 ||
      destinations.page + 1 < destinations.totalPages
    ) {
      dispatch(fetchDestinationsForBooking(destinations.page + 1))
        .then((r) => r)
        .catch((e: Error) => messageApi.error(e.message));
    }

    if (destinations.destinations.length) {
      setInputs((prevState) => ({
        ...prevState,
        arrivalPort: {
          ...prevState.arrivalPort,
          options: destinations.destinations.map((destination) => ({
            value: destination.airportCode,
            name: destination.cityName,
          })),
        },
        destinationPort: {
          ...prevState.destinationPort,
          options: destinations.destinations.map((destination) => ({
            value: destination.airportCode,
            name: destination.cityName,
          })),
        },
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinations, dispatch]);

  useEffect(() => {
    if (passengers.page === -1 || passengers.page + 1 < passengers.totalPages) {
      dispatch(fetchPassengersForBooking(passengers.page + 1)).catch(
        (e: Error) => messageApi.error(e.message)
      );
    }

    if (passengers.passengers.length) {
      setInputs((prevState) => ({
        ...prevState,
        passengerId: {
          ...prevState.passengerId,
          options: passengers.passengers.map((passenger) => ({
            value: passenger.id,
            name: `${passenger.firstName} ${passenger.lastName}`,
          })),
        },
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, passengers]);

  useEffect(() => {
    if (flights.page + 1 < flights.totalPages) {
      dispatch(
        fetchFlightsListForBooking({
          cityFrom: inputs.arrivalCity.value as string,
          cityTo: inputs.destinationCity.value as string,
          page: flights.page + 1,
        })
      ).catch((e: Error) => messageApi.error(e.message));
    }

    if (flights.flights.length) {
      setInputs((prevState) => {
        const flightId = {
          ...prevState.flightId,
        };
        if (flightId.value) {
          flightId.options = flights.flights
            .filter(
              (flight) =>
                new Date(flight.arrivalDateTime).toDateString() ===
                new Date(prevState.arrivalDate.value as string).toDateString()
            )
            .map((flight) => ({
              value: flight.id,
              name: new Date(flight.arrivalDateTime).toLocaleTimeString(),
            }));
        }

        return {
          ...prevState,
          arrivalDate: {
            ...prevState.arrivalDate,
            disabled: false,
            activeDates: flights.flights.map(
              (flight) => new Date(flight.arrivalDateTime)
            ),
          },
          flightId,
        };
      });
    }

    if (!flights.flights.length) {
      setInputs((prevState) => ({
        ...prevState,
        flightId: {
          ...prevState.flightId,
          value: '',
          options: [],
          disabled: true,
        },
        arrivalDate: {
          ...prevState.arrivalDate,
          value: '',
          disabled: true,
        },
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flights, dispatch]);

  const onDeleteBookingItem = (id: number) => {
    contextMenu.onOpen();
    setItemForDelete(id);
  };

  const deleteBooking = async (id: number) => {
    await dispatch(deleteAdminBookingItemById(id))
      .then(() => dispatch(fetchAdminBookingList(page)))
      .catch((e: Error) => messageApi.error(e.name));
  };

  const onEditBooking = (id: number) => {
    BookingService.fetchBookingById(id)
      .then((r) => {
        const booking = r.data as IAdminBooking;

        FlightsAdminApi.getFlightById(booking.flightId)
          .then((result) => {
            const flight = result.data as IFlightContent;

            const airportFrom = destinations.destinations.find(
              (destination) => destination.airportCode === flight.airportFrom
            );

            const airportTo = destinations.destinations.find(
              (destination) => destination.airportCode === flight.airportTo
            );

            setInputs((prevState) => ({
              ...prevState,
              flightKey: {
                ...prevState.flightKey,
                value: `${airportFrom?.airportCode ?? ''}${
                  airportTo?.airportCode ?? ''
                }`,
              },
              arrivalCity: {
                ...prevState.arrivalCity,
                value: airportFrom?.cityName ?? '',
              },
              destinationCity: {
                ...prevState.destinationCity,
                value: airportTo?.cityName ?? '',
              },
              arrivalPort: {
                ...prevState.arrivalPort,
                value: airportFrom?.airportCode ?? '',
              },
              destinationPort: {
                ...prevState.destinationPort,
                value: airportTo?.airportCode ?? '',
              },
              arrivalDate: {
                ...prevState.arrivalDate,
                disabled: false,
                value: new Date(Date.parse(flight.arrivalDateTime)),
              },
              passengerId: {
                ...prevState.passengerId,
                value: booking.passengerId,
              },
              categoryType: {
                ...prevState.categoryType,
                value: booking.categoryType,
              },
              flightId: {
                ...prevState.flightId,
                value: booking.flightId,
              },
            }));
            setEditId(id);
            modalForm.onOpen();
          })
          .catch((e) => {
            throw e;
          });
      })
      .catch((e: Error) => messageApi.error(e.message));
  };

  return (
    <Flex p="3.125rem" direction="column">
      {MessageAlertContainer}
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="1.25rem" fontWeight="600">
          Бронирование
        </Text>
        <Button onClick={modalForm.onOpen} data-testid="booking-modal-open">
          Забронировать
          <Plus ml="0.5rem" />
        </Button>
      </Flex>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <>
          <BookingTable
            onDeleteItem={onDeleteBookingItem}
            onEditItem={onEditBooking}
          />
          {totalPages > 1 && (
            <Pagination
              handlePageClick={(p) =>
                dispatch(bookingAdminSlice.actions.setPage(p.selected))
              }
              initialPage={page}
              pageCount={totalPages}
            />
          )}
          <ModalRemove
            isOpen={contextMenu.isOpen}
            onClose={contextMenu.onClose}
            onDelete={deleteBooking}
            textBody="Вы действительно ходите удалить бронирование?"
            itemOnDelete={itemForDelete}
          />
        </>
      )}
      <AdminModalForm
        header="Забронировать"
        isOpen={modalForm.isOpen}
        inputs={inputs}
        onChange={formChange}
        submitHandler={(data, actions) => {
          const formData: TAdminBookingForm = {
            bookingData:
              flights.flights?.find(
                (flight) => flight.id === parseInt(data.flightId, 10)
              )?.arrivalDateTime || '',
            bookingNumber: '012345678',
            categoryType: TicketCategory.BUSINESS,
            flightId: parseInt(data.flightId, 10),
            passengerId: parseInt(data.passengerId, 10),
          };

          if (!editId) {
            dispatch(createAdminBooking(formData))
              .then((r) => {
                if (r.meta.requestStatus !== 'rejected') {
                  messageApi.success('Бронь успешно создана');
                  dispatch(bookingAdminSlice.actions.resetStateKey('page'));
                  modalForm.onClose();
                } else {
                  throw new Error((r.payload as Error).message);
                }
              })
              .catch((e: Error) => messageApi.error(e.message))
              .finally(() => {
                actions.setSubmitting(false);
              });
          }
          if (editId) {
            dispatch(editAdminBooking({ ...formData, id: editId }))
              .then((r) => {
                if (r.meta.requestStatus !== 'rejected') {
                  messageApi.success('Бронь успешно отредактированна');
                  dispatch(bookingAdminSlice.actions.resetStateKey('page'));
                  setEditId(0);
                  modalForm.onClose();
                } else {
                  throw new Error((r.payload as Error).message);
                }
              })
              .catch((e: Error) => messageApi.error(e.message))
              .finally(() => {
                actions.setSubmitting(false);
              });
          }
        }}
        onClose={() => {
          setInputs((prevState) => ({
            ...initialInputs,
            arrivalPort: {
              ...initialInputs.arrivalPort,
              options: prevState.arrivalPort.options,
            },
            destinationPort: {
              ...initialInputs.destinationPort,
              options: prevState.destinationPort.options,
            },
            passengerId: {
              ...initialInputs.passengerId,
              options: prevState.passengerId.options,
            },
          }));
          setEditId(0);
          modalForm.onClose();
        }}
        submitButton={
          <>
            <p>Забронировать</p>
            <Plus />
          </>
        }
      />
    </Flex>
  );
};

export default BookingPage;
