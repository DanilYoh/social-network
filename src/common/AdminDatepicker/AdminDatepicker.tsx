import DatePicker from 'react-datepicker';
import { useField, useFormikContext } from 'formik';
import { FieldInputProps } from 'formik/dist/types';
import { ForwardedRef, forwardRef } from 'react';
import { Input } from '@chakra-ui/react';

import { useMessageAlert } from '@hooks/useMessageAlert';
import Calendar from '@icons/calendar';

import classes from './AdminDatepicker.module.scss';

const MyInput = forwardRef(
  ({ ...props }, ref: ForwardedRef<HTMLInputElement>) => (
    <div className={classes['admin-datepicker__wrapper']}>
      <Input type="text" {...props} ref={ref} data-testid="datepicker-field" />
      <Calendar
        className={classes['admin-datepicker__icon']}
        width="16px"
        height="17px"
      />
    </div>
  )
);

const AdminDatepicker = ({
  ...props
}: // eslint-disable-next-line react/require-default-props
FieldInputProps<string> & { activeDates?: Date[] }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField<FieldInputProps<string> & { activeDates?: Date[] }>(
    props
  );

  const { messageApi, MessageAlertContainer } = useMessageAlert();

  const isActiveDate = (date: Date) => {
    if (!props.activeDates || !props.activeDates.length) return true;
    return !!props.activeDates.find(
      (d) => date.toDateString() === d.toDateString()
    );
  };

  const isSelectedDate = (date: Date) =>
    field.value?.toString() === date.toString();

  return (
    <>
      {MessageAlertContainer}
      <DatePicker
        {...field}
        {...props}
        dateFormat="dd/MM/yyyy"
        customInput={<MyInput />}
        calendarClassName={classes['admin-datepicker']}
        renderDayContents={(day, date) => (
          <p
            data-testid="datepicker-day"
            className={[
              classes['react-datepicker__day'],
              date && !isActiveDate(date)
                ? classes['react-datepicker__day--disabled']
                : '',
              date && isSelectedDate(date)
                ? classes['react-datepicker__day--selected']
                : '',
            ].join(' ')}
          >
            {day}
          </p>
        )}
        onChange={(value) => {
          setFieldValue(field.name, value).catch((e: Error) =>
            messageApi.error(e.message)
          );
        }}
        filterDate={isActiveDate}
      />
    </>
  );
};

export default AdminDatepicker;
