import { FC, useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Button, VStack, Text, Spinner } from '@chakra-ui/react';
import { formatRFC3339 } from 'date-fns';

import { EFlyStatus } from '@/enums/flight-status';
import { ErrorText } from '@common/ErrorText';
import { FormInputModal } from '@common/FormInputModal';
import { FormSelectModal } from '@common/FormSelectModal';
import {
  ICreateFormProps,
  IDataForm,
} from '@/interfaces/modal-form-props.interfaces';
import { IAircraftData } from '@/interfaces/aircraft-data.interfaces';
import { AircraftServices } from '@services/aircraft.services';
import { fetchDestinationAdmin } from '@/store/thunks/destination-admin.thunk';
import { useAppSelector, useAppDispatch } from '@/hooks';

interface IDataInitForm {
  code: string;
  cityNameFrom: string;
  cityNameTo: string;
  arrivalDateTime: string;
  departureDateTime: string;
  model: string;
  flyStatus: string;
}

const initialValues: IDataInitForm = {
  code: '',
  cityNameFrom: '',
  cityNameTo: '',
  arrivalDateTime: '',
  departureDateTime: '',
  model: '',
  flyStatus: '',
};

const validationSchema = Yup.object().shape({
  code: Yup.string(),
  cityNameFrom: Yup.string().required('please select value'),
  cityNameTo: Yup.string().required('please select value'),
  arrivalDateTime: Yup.string()
    .required('please complete field')
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d[ ]([0-1]\d|2[0-3])(:[0-5]\d)$/,
      'Invalid time format'
    ),
  departureDateTime: Yup.string()
    .required('please complete field')
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d[ ]([0-1]\d|2[0-3])(:[0-5]\d)$/,
      'Invalid time format'
    ),
  model: Yup.string().required('please select value'),
  flyStatus: Yup.string().required('please select value'),
});

const CreateFlightForm: FC<ICreateFormProps> = ({
  onSubmit,
  error,
  loading,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const { destinations } = useAppSelector((state) => state.destination);

  const initialState: IAircraftData = {
    content: [],
  };

  const [getListError, setGetListError] = useState<Error | null>(null);
  const [getListLoading, setGetListLoading] = useState<boolean>(false);
  const [aircraftList, setAircraftList] = useState<IAircraftData>(initialState);

  const cities = destinations.content.map((item) => item.cityName);
  const [aircraft, setAircraft] = useState<string[]>([]);

  const flyStatus = [
    EFlyStatus.complited,
    EFlyStatus.arriver,
    EFlyStatus.canceled,
    EFlyStatus.delay,
    EFlyStatus.sent,
    EFlyStatus.onTime,
  ];

  const getCity = (city: string) => {
    const choseObj = destinations.content.find(
      (variant) => variant.cityName === city
    );
    return choseObj;
  };

  const getAircraft = (model: string) => {
    const choseObj = aircraftList.content.find(
      (variant) => variant.model === model
    );
    if (choseObj !== undefined) return Number(choseObj.id);
    return 0;
  };

  const getUTF = (date: string) => {
    const arrDate = date.split(/[.,:, ]/);
    const result = formatRFC3339(
      new Date(
        Number(arrDate[2]),
        Number(arrDate[1]),
        Number(arrDate[0]),
        Number(arrDate[3]),
        Number(arrDate[4])
      )
    );
    const formatDate = result.replace('+03:00', '').concat('.000Z');
    return formatDate;
  };

  const showCodeFrom = (destination: string) => {
    const obj = destinations.content.find(
      (variant) => variant.cityName === destination
    ) || {
      airportCode: 'From',
    };
    return obj.airportCode;
  };

  const showCodeTo = (destination: string) => {
    const obj = destinations.content.find(
      (variant) => variant.cityName === destination
    ) || {
      airportCode: 'To',
    };
    return obj.airportCode;
  };

  const getAircraftList = async () => {
    setGetListError(null);
    setGetListLoading(true);
    try {
      const result = await AircraftServices.getClientAircraft();
      setAircraftList(result);
      const aircraftModels = result.content.map((item) => item.model);
      setAircraft(aircraftModels);
    } catch (err) {
      if (err instanceof Error) {
        setGetListError(err);
      }
    } finally {
      setGetListLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getAircraftList();
  }, []);

  useEffect(() => {
    setGetListLoading(true);
    dispatch(fetchDestinationAdmin())
      .then(() => setGetListLoading(false))
      .catch((err: Error) => setGetListError(err));
  }, [dispatch]);

  const form = (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newValue: IDataForm = {
          aircraftId: getAircraft(values.model),
          arrivalDateTime: getUTF(values.arrivalDateTime),
          code: `${showCodeFrom(values.cityNameFrom)}${showCodeTo(
            values.cityNameTo
          )}`,
          departureDateTime: getUTF(values.departureDateTime),
          flightStatus: values.flyStatus,
          from: getCity(values.cityNameFrom),
          to: getCity(values.cityNameTo),
        };
        onSubmit?.(newValue, resetForm, onClose);
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <Container p="3" maxHeight="600px" overflowY="scroll">
            <VStack spacing="1.775rem" align="stretch" fontSize="1.2rem">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h6 style={{ fontSize: '0.75rem' }}>Код (Рейс)</h6>
                <span
                  style={{ fontSize: '0.857rem', fontWeight: 400 }}
                  id="code"
                >
                  {showCodeFrom(values.cityNameFrom)}
                  {showCodeTo(values.cityNameTo)}
                </span>
              </div>
              <FormSelectModal
                label="Город отбытия"
                name="cityNameFrom"
                data={cities}
                error={errors.cityNameFrom}
                touch={touched.cityNameFrom}
                getCityName={showCodeFrom}
                load={getListLoading}
              />
              <FormSelectModal
                label="Город прибытия"
                name="cityNameTo"
                data={cities}
                error={errors.cityNameTo}
                touch={touched.cityNameTo}
                getCityName={showCodeTo}
                load={getListLoading}
              />
              <FormInputModal
                label="Дата отбытия"
                name="departureDateTime"
                placeholder="12.04.2023 18:43"
                error={errors.arrivalDateTime}
                touch={touched.arrivalDateTime}
              />
              <FormInputModal
                label="Дата прибытия"
                name="arrivalDateTime"
                placeholder="12.04.2023 18:43"
                error={errors.departureDateTime}
                touch={touched.departureDateTime}
              />
              <FormSelectModal
                label="Модель самолета"
                name="model"
                data={aircraft}
                error={errors.model}
                touch={touched.model}
                load={getListLoading}
              />
              <FormSelectModal
                label="Статус"
                name="flyStatus"
                error={errors.flyStatus}
                touch={touched.flyStatus}
                data={flyStatus}
              />
            </VStack>
            <Button
              data-testid="submit-form"
              type="submit"
              height="2.5rem"
              borderRadius="0.125rem"
              width="100%"
              mt="3rem"
              color="black"
              colorScheme="white"
              border="1px solid #DEDEDE"
              boxShadow="0  0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)"
            >
              {loading ? <Spinner color="green.500" /> : 'Сохранить'}
            </Button>
            {loading && (
              <Text pt="0.625rem" color="green.500" align="center">
                Loading
              </Text>
            )}
            {error && (
              <Text
                fontSize="0.625rem"
                backgroundColor="red.100"
                mt="0.9375rem"
                p="0.325rem"
                color="red.500"
                align="center"
              >
                {`${error.message}!!! Что-то пошло не так!`}
              </Text>
            )}
          </Container>
        </Form>
      )}
    </Formik>
  );

  if (getListError !== null) {
    return <ErrorText text="Что-то пошло не так!" />;
  }
  return form;
};

export default CreateFlightForm;
