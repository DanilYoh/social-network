import type { FC } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { CloseIcon, EditIcon } from '@chakra-ui/icons';

import { IDropDownPropsFlights } from '@/interfaces/drop-down.interfaces';
import DropdownIcon from '@common/icons/dropdown';

const DropdownMenuFlights: FC<IDropDownPropsFlights> = ({
  id,
  onDeleteClick,
  onEditClick,
}) => {
  const isDeleteClick = () => {
    onDeleteClick(id);
  };

  const isEditClick = () => {
    onEditClick(id);
  };

  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        icon={<DropdownIcon />}
        background="transparent"
        data-testid="menu-button"
      />
      <MenuList padding="1px" border="1px solid #2B2B2B">
        <MenuItem
          background="#e6f1f2"
          data-testid="edit-btn"
          onClick={isEditClick}
        >
          <Icon marginRight="12px" as={EditIcon} />
          Редактировать
        </MenuItem>
        <MenuItem
          background="#e6f1f2"
          onClick={isDeleteClick}
          data-testid="delete-btn"
        >
          <Icon marginRight="12px" as={CloseIcon} />
          Удалить
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownMenuFlights;
