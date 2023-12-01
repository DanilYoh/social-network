import type { FC } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { IDropDownProps } from '@/interfaces/drop-down.interfaces';
import DropdownIcon from '@common/icons/dropdown';

const DropdownMenu: FC<IDropDownProps> = ({
  onDeleteClick,
  onEditClick,
  navigateParams,
  navigateButtons,
}) => {
  const navigate = useNavigate();
  const links = navigateButtons?.map((el) => (
    <MenuItem
      key={el.name}
      onClick={() => {
        typeof navigateParams === 'string' &&
          navigate(`${el?.path}${navigateParams}`);
      }}
    >
      {el?.name}
    </MenuItem>
  ));

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<DropdownIcon />}
        background="transparent"
        data-testid="menu-button"
      />

      <MenuList>
        <MenuItem
          onClick={onDeleteClick}
          data-testid="delete-btn"
          color="red.500"
        >
          Удалить
        </MenuItem>

        <MenuItem data-testid="edit-btn" onClick={onEditClick}>
          Редактировать
        </MenuItem>
        {links}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
