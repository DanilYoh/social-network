import type { FC } from 'react';
import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { ModalRemove } from '@/components/ModalRemove';
import { IDropdownMenuDestination } from '@/interfaces/drop-down.interfaces';
import DropdownIcon from '@common/icons/dropdown';

const DropdownMenuDestination: FC<IDropdownMenuDestination> = ({
  id,
  onDeleteClick,
  onEditClick,
  navigateParams,
  navigateButtons,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [destination, setDestination] = useState(0);
  const navigate = useNavigate();

  const onDestinationDelete = (itemId: number) => {
    onOpen();
    setDestination(itemId);
  };

  const links = navigateButtons?.map((el) => (
    <MenuItem
      onClick={() => {
        typeof navigateParams === 'string' &&
          navigate(`${el?.path}${navigateParams}`);
      }}
    >
      {el?.name}
    </MenuItem>
  ));

  return (
    <Menu isLazy>
      <ModalRemove
        isOpen={isOpen}
        onClose={onClose}
        // Заглушка на синхронную функцию, т.к. удаление не реализовано
        // eslint-disable-next-line @typescript-eslint/require-await
        onDelete={async () => onDeleteClick(destination)}
        textBody="Вы действительно ходите удалить место назначения?"
        itemOnDelete={id}
      />
      <MenuButton
        as={IconButton}
        icon={<DropdownIcon />}
        background="transparent"
        data-testid="menu-button"
      />

      <MenuList>
        <MenuItem
          onClick={() => onDestinationDelete(id)}
          data-testid="delete-btn"
          color="red.500"
        >
          Удалить
        </MenuItem>

        <MenuItem
          data-testid="edit-btn"
          onClick={() => onEditClick && onEditClick(id)}
        >
          Редактировать
        </MenuItem>
        {links}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenuDestination;
