import { Button, Box, FormLabel } from '@chakra-ui/react';
import React, { type FC, useState, useRef, useEffect } from 'react';

import {
  ISelectDestination,
  IDestinationContent,
} from '@interfaces/search-form.interfaces';

const SelectDestination: FC<ISelectDestination> = ({
  id,
  value,
  setValue,
  fieldHasError,
  label,
  options,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const onSelectChange = (event: React.MouseEvent<HTMLDivElement>) => {
    const data = JSON.parse(
      event.currentTarget.getAttribute('data-value') as string
    ) as IDestinationContent;
    setValue(label, data);
    setIsDropdownOpen(false);
  };

  const onDropdown = () => {
    setIsDropdownOpen((state) => !state);
  };

  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef]);

  const borderStyle = fieldHasError ? '1px solid red' : '1px solid #d9d9d9';

  const {
    cityName,
    airportName,
    timezone: countryName,
  } = value as IDestinationContent;

  return (
    <>
      <FormLabel
        htmlFor={id}
        display="flex"
        flexDirection="column"
        w="100%"
        m={0}
      >
        <Box
          color="rgba(78, 76, 76, 0.71)"
          fontSize=".6875rem"
          pl=".3rem"
          textTransform="capitalize"
        >
          {label}
        </Box>
      </FormLabel>
      <Box position="relative" ref={selectRef}>
        <Button
          id={id}
          flexDirection="column"
          data-testid="testID"
          h="2.8125rem"
          w="100%"
          border={borderStyle}
          boxShadow="0 .25rem .25rem rgba(0, 0, 0, 0.25)"
          backgroundColor="#fff"
          alignItems="flex-start"
          fontSize=".8125rem"
          cursor="default"
          aria-label={label}
          _hover={{
            backgroundColor: '#fff',
          }}
          _active={{
            backgroundColor: '#fff',
          }}
          onClick={onDropdown}
        >
          {value && (
            <>
              <Box fontWeight={600}>{cityName}</Box>
              <Box fontWeight={500}>
                {airportName}, {countryName}
              </Box>
            </>
          )}
        </Button>
        {isDropdownOpen && (
          <Box
            w="100%"
            position="absolute"
            border="1px solid #D9D9D9"
            top="100%"
            left={0}
            backgroundColor="#fff"
            zIndex={100}
            maxH="8rem"
            overflowY="auto"
          >
            {options.map((destination: IDestinationContent) => {
              const { id: destinationId, cityName: optionName } = destination;
              return (
                <Box
                  key={destinationId}
                  data-value={JSON.stringify(destination)}
                  cursor="default"
                  _hover={{
                    backgroundColor: '#1e90ff',
                    color: '#fff',
                  }}
                  p=".2rem .5rem"
                  onClick={onSelectChange}
                >
                  {optionName}
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </>
  );
};

export default SelectDestination;
