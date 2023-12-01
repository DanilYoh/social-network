/* eslint-disable react/prop-types */
import { FC, memo } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverBody,
  Button,
  IconButton,
  PopoverContent,
  PopoverArrow,
} from '@chakra-ui/react';
import { CloseIcon, EditIcon } from '@chakra-ui/icons';

import DropdownIcon from '@/common/icons/dropdown';
import { IDropDownProps } from '@/interfaces/drop-down.interfaces';

const PopOver: FC<IDropDownProps> = (props) => {
  const {
    onDeleteClick,
    onEditClick,
    edit = 'Редактировать',
    remove = 'Удалить',
  } = props;

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button
          as={IconButton}
          icon={<DropdownIcon />}
          background="transparent"
        />
      </PopoverTrigger>
      <PopoverContent
        w="13rem"
        h="6.26rem"
        border="0.06rem"
        borderColor="gray.600"
      >
        <PopoverArrow bg="#E0EFEA" border="0.06rem" />

        <PopoverBody p="0">
          <Button
            onClick={onEditClick}
            display="flex"
            alignItems="center"
            justifyContent="left"
            gap="1rem"
            color="gray.700"
            bg="#E0EFEA"
            width="100%"
            height="3.13rem"
            borderRadius="none"
            borderTopRightRadius="0.32rem"
            borderTopLeftRadius="0.32rem"
            _hover={{ backgroundColor: '#C5E3F6' }}
          >
            <EditIcon color="gray.700" />
            {edit}
          </Button>
          <Button
            onClick={onDeleteClick}
            display="flex"
            colorScheme="transparent"
            alignItems="center"
            justifyContent="left"
            gap="1.4rem"
            color="gray.700"
            bg="#E0EFEA"
            width="100%"
            borderRadius="none"
            height="3rem"
            borderBottomRightRadius="0.32rem"
            borderBottomLeftRadius="0.32rem"
            _hover={{ backgroundColor: '#C5E3F6' }}
          >
            <CloseIcon w={2.5} h={2.5} color="gray.700" />
            {remove}
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default memo(PopOver);
