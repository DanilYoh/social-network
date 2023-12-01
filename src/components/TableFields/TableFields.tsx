import { FC, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Td, Tr } from '@chakra-ui/react';
import * as Yup from 'yup';

import { SeatInterfaceContent } from '@interfaces/seat-interface.interfaces';
import { DropdownMenu } from '@components/DropdownMenu';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  DeleteSeatServices,
  PatchSeatServices,
} from '@/store/thunks/seat.thunk';
import { IDataForm } from '@interfaces/modal-form-props.interfaces';
import { seatsSlice } from '@/store/seats.slice';

import styles from './TableFields.module.css';

const TableFields: FC<SeatInterfaceContent> = (item) => {
  const { id, isLockedBack, isNearEmergencyExit, category, seatNumber } = item;
  const initialValues: IDataForm = {
    airCraftId: '1',
    class:
      category.categoryType === 'PREMIUM_ECONOMY'
        ? 'PREMIUM'
        : category.categoryType && category.categoryType,
    seatNumber: seatNumber && seatNumber,
    isLockedBack: isLockedBack ? 'true' : 'false',
    isNearEmergencyExit: isNearEmergencyExit ? 'true' : 'false',
  };
  const [editMode, setEditMode] = useState(false);
  const dispatch = useAppDispatch();
  const editModeGlobal = useAppSelector((state) => state.seats.editMode);
  const submitEdit = useAppSelector((state) => state.seats.submitEdit);

  const formik = useFormik({
    initialValues: { ...initialValues },
    onSubmit: (values) => {
      dispatch(seatsSlice.actions.setEditModeFalse());
      setEditMode(false);
      // eslint-disable-next-line
      dispatch(PatchSeatServices({ seatId: id, ...values }));
    },
    validationSchema: Yup.object().shape({
      airCraftId: Yup.number().required('please complete field'),
      seatNumber: Yup.string()
        .required('please complete field')
        .min(2, 'минимальная длинна 2 символа')
        .max(5, 'максимальная длинна 5 символов'),
    }),
  });
  useEffect(() => {
    if (editModeGlobal && editMode) {
      // setEditMode(true);
    } else setEditMode(false);
    if (!editModeGlobal && editMode) {
      submitEdit && formik.handleSubmit();
    }
  }, [editMode, editModeGlobal, formik, submitEdit]);

  const onEditClick = () => {
    setEditMode(true);
    dispatch(seatsSlice.actions.setEditModeTrue());
  };
  const onDeleteClick = (): void => {
    // Удаление происходит,но из за ошибки на бэке приходит только 10 сидений,также удаленное сиденье не освобождает id
    // нельзя удалить первые 10 сидений,их запретили удалять :(
    // eslint-disable-next-line
    dispatch(DeleteSeatServices(id));
  };

  return (
    <Tr key={id} className={styles.editTr}>
      <Td
        padding="0.9375rem 0.625rem 0.9375rem 0.625rem"
        border="0.0625rem solid grey"
        color="#393939"
        className={styles.editTd}
      >
        <form
          id="editForm"
          onSubmit={formik.handleSubmit}
          className={styles.editForm}
        >
          {id}
        </form>
      </Td>
      <Td
        padding="0.9375rem 0.625rem 0.9375rem 0.625rem"
        border="0.0625rem solid grey"
        color="#393939"
      >
        {editMode && (
          <div className={styles.editField}>
            <input
              type="text"
              form="editForm"
              name="seatNumber"
              value={formik.values.seatNumber}
              onChange={formik.handleChange}
              className={styles.editInput}
            />
            {formik.errors.seatNumber && (
              <span className={styles.editSpan}>
                {formik.errors.seatNumber}
              </span>
            )}
          </div>
        )}
        {!editMode && seatNumber}
      </Td>
      <Td
        padding="0.9375rem 0.625rem 0.9375rem 0.625rem"
        border="0.0625rem solid grey"
        color="#393939"
      >
        {editMode && (
          <div className={styles.editField}>
            <select
              name="class"
              form="editForm"
              value={formik.values.class}
              onChange={formik.handleChange}
              className={styles.editSelect}
            >
              <option value="ECONOMY">ECONOMY</option>
              <option value="BUSINESS">BUSINESS</option>
              <option value="PREMIUM">PREMIUM</option>
              <option value="FIRST">FIRST</option>
            </select>
            {formik.errors.class && (
              <span className={styles.editSpan}>{formik.errors.class}</span>
            )}
          </div>
        )}
        {!editMode && category.categoryType}
      </Td>
      <Td
        padding="0.9375rem 0.625rem 0.9375rem 0.625rem"
        border="0.0625rem solid grey"
        color="#393939"
      >
        {editMode && (
          <div className={styles.editField}>
            <select
              name="isLockedBack"
              form="editForm"
              value={formik.values.isLockedBack}
              onChange={formik.handleChange}
              className={styles.editSelect}
            >
              <option value="false">Нет</option>
              <option value="true">Да</option>
            </select>
            {formik.errors.isLockedBack && (
              <span className={styles.editSpan}>
                {formik.errors.isLockedBack}
              </span>
            )}
          </div>
        )}
        {!editMode ? isLockedBack ? <span>Да</span> : <span>Нет</span> : null}
      </Td>
      <Td
        padding="0.9375rem 0.625rem 0.9375rem 0.625rem"
        border="0.0625rem solid grey"
        color="#393939"
      >
        {editMode && (
          <div className={styles.editField}>
            <select
              name="isNearEmergencyExit"
              form="editForm"
              value={formik.values.isNearEmergencyExit}
              onChange={formik.handleChange}
              className={styles.editSelect}
            >
              <option value="false">Нет</option>
              <option value="true">Да</option>
            </select>
            {formik.errors.isNearEmergencyExit && (
              <span className={styles.editSpan}>
                {formik.errors.isNearEmergencyExit}
              </span>
            )}
          </div>
        )}
        {!editMode ? (
          isNearEmergencyExit ? (
            <span>Да</span>
          ) : (
            <span>Нет</span>
          )
        ) : null}
      </Td>
      <Td
        padding="0.3125rem 0 0 0.9375rem"
        textAlign="center"
        border="0.0625rem solid grey"
        color="#393939"
      >
        <DropdownMenu onDeleteClick={onDeleteClick} onEditClick={onEditClick} />
      </Td>
    </Tr>
  );
};

export default TableFields;
