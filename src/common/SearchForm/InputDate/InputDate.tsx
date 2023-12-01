import { Box, Flex, Button, Image } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import React, { useState, type FC, useRef, useEffect } from 'react';
import { format } from 'date-fns';

import calendarImg from '@assets/images/calendar.png';
import { IInputDate } from '@interfaces/search-form.interfaces';

const InputDate: FC<IInputDate> = ({
  id,
  value,
  setValue,
  fieldHasError,
  label,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const onDatepickerChange = (e: Date) => {
    setValue(label, new Date(e));
  };
  const onInputClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCalendarOpen(true);
  };

  const calendarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [calendarRef]);

  const borderStyle = fieldHasError ? '1px solid red' : '1px solid transparent';
  const monthsToShow = window.innerWidth >= 1000 ? 2 : 1;

  return (
    <>
      <Button
        id={id && id}
        data-testid="testID"
        onClick={onInputClick}
        w="50%"
        minW={{ base: '8.375rem', dt: '9.3184375rem' }}
        border={borderStyle}
        fontSize=".8125rem"
        bgColor="#fff"
        h="100%"
        justifyContent="flex-start"
        _hover={{
          backgroundColor: '#fff',
        }}
        _active={{
          backgroundColor: '#fff',
        }}
        _first={{
          borderRight: 'none!important',
          borderRadius: '.375rem 0 0 .375rem',
        }}
        _last={{
          borderLeft: 'none!important',
          borderRadius: '0 .375rem .375rem 0',
          justifyContent: 'flex-end',
        }}
      >
        {value && (
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            marginRight="auto"
            h="100%"
          >
            <Box
              textTransform="capitalize"
              color="#868484"
              fontSize=".75rem"
              mb=".05rem"
            >
              {label}
            </Box>
            <Box fontSize={{ base: '.7rem', smp: '.8125rem' }} fontWeight={600}>
              {value.getDate()} {format(value, 'MMM')}, {format(value, 'EEEE')}
            </Box>
          </Flex>
        )}
        {!value && <Image src={calendarImg} />}
      </Button>
      {isCalendarOpen && (
        <Box
          position="absolute"
          data-testid="testCalendarID"
          top="calc(100% + .7619rem)"
          left="50%"
          transform="translateX(-50%)"
          w={{ base: '22rem', mds: '44.4rem' }}
          ref={calendarRef}
          zIndex={100}
          _before={{
            content: '""',
            position: 'absolute',
            top: '-.5rem',
            left: '50%',
            display: 'block',
            width: '1rem',
            height: '1rem',
            backgroundColor: '#fff',
            transform: 'translateX(-50%) rotate(45deg)',
            border: '1px solid #D9D9D9',
            borderBottom: 'none',
            borderRight: 'none',
            zIndex: '1001',
          }}
        >
          <DatePicker
            renderCustomHeader={({
              monthDate,
              customHeaderCount,
              decreaseMonth,
              increaseMonth,
            }) => (
              <Flex
                w="100%"
                h="2rem"
                justifyContent="center"
                alignItems="center"
                mb=".5rem"
              >
                <button
                  type="button"
                  aria-label="Previous Month"
                  className="react-datepicker__navigation react-datepicker__navigation--previous"
                  style={
                    customHeaderCount === 1
                      ? { visibility: 'hidden' }
                      : undefined
                  }
                  onClick={decreaseMonth}
                >
                  <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                    {'<'}
                  </span>
                </button>
                <span className="react-datepicker__current-month">
                  {monthDate.toLocaleString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <button
                  type="button"
                  aria-label="Next Month"
                  className="react-datepicker__navigation react-datepicker__navigation--next"
                  style={
                    customHeaderCount === 0 && monthsToShow === 2
                      ? { visibility: 'hidden' }
                      : undefined
                  }
                  onClick={increaseMonth}
                >
                  <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                    {'>'}
                  </span>
                </button>
              </Flex>
            )}
            selected={value}
            onChange={onDatepickerChange}
            monthsShown={monthsToShow}
            inline
          >
            <Flex
              position="absolute"
              top="1.8rem"
              left="0"
              flexDirection="column"
              w="100%"
              p={{ base: '0 2.5rem', mds: '0 4.125rem' }}
            >
              <Button
                w="1rem"
                minW="1rem"
                flex="0 0 .65625rem"
                h=".65625rem"
                p={0}
                backgroundColor="transparent"
                alignSelf="flex-end"
                onClick={() => setIsCalendarOpen(false)}
                _after={{
                  position: 'absolute',
                  content: '""',
                  display: 'block',
                  width: '.15rem',
                  height: '1rem',
                  backgroundColor: '#D9D9D9',
                  transform: 'rotate(-45deg)',
                }}
                _before={{
                  position: 'absolute',
                  content: '""',
                  display: 'block',
                  width: '.15rem',
                  height: '1rem',
                  backgroundColor: '#D9D9D9',
                  transform: 'rotate(45deg)',
                }}
                _hover={{
                  backgroundColor: 'transparent',
                }}
                _active={{
                  backgroundColor: 'transparent',
                }}
              />
              <Box color="#0A66C2" fontSize=".8125rem" fontWeight={600}>
                Choose you {label} date
              </Box>
            </Flex>
            <Button
              type="button"
              onClick={() => setIsCalendarOpen(false)}
              h="1.625rem"
              backgroundColor="#E32E22"
              textTransform="uppercase"
              color="#fff"
              fontWeight={600}
              fontSize="0.875rem"
              boxShadow="0 .25rem .25rem rgba(0, 0, 0, 0.25)"
              mt={{ base: '1rem', mds: '0' }}
              _hover={{
                backgroundColor: '#E32E22',
              }}
              _active={{
                backgroundColor: '#E32E22',
              }}
            >
              ok
            </Button>
          </DatePicker>
        </Box>
      )}
    </>
  );
};

export default InputDate;
