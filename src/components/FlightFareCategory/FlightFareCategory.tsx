import { Tabs, TabPanel, Flex, Text, Button } from '@chakra-ui/react';
import { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { TSeatSet } from '@/interfaces/flight-card';

const FlightOptions = ({ link, option }: { link: string; option: string }) => (
  <Flex>
    <img src={link} alt="icn" />
    <Text>{option}</Text>
  </Flex>
);

const FlightFareCategory: FC<Pick<TSeatSet, 'price'>> = ({ price }) => {
  const uslugi = [
    { link: 'dfdfdf', option: 'dfddf' },
    { link: 'dfdfdf', option: 'dfddf' },
    { link: 'dfdfdf', option: 'dfddf' },
    { link: 'dfdfdf', option: 'dfddf' },
    { link: 'dfdfdf', option: 'dfddf' },
    { link: 'dfdfdf', option: 'dfddf' },
  ];
  return (
    <Tabs>
      <TabPanel padding="7px 0 0 0" color="white">
        <Flex direction="column" width="580px">
          <Flex
            height="41px"
            border="1px solid #D9D9D9"
            padding="6px 0"
            borderRadius="4px 4px 0 0"
            backgroundColor="#0A66C2"
            justify="space-around"
          >
            <Flex
              justify="space-between"
              borderRight="1px solid white"
              grow="1"
              padding="0 13px"
            >
              <Text>Eco Light</Text>
              <Text>CHF {price}</Text>
            </Flex>
            <Flex justify="space-between" grow="1" padding="0 13px">
              <Text>Eco Light</Text>
              <Text>CHF {price}</Text>
            </Flex>
          </Flex>
          <Flex
            color="black"
            height="200px"
            padding="6px 0"
            border="1px solid #D9D9D9"
            borderRadius="0 0 4px 4px"
            backgroundColor="white"
            justify="space-around"
          >
            <Flex
              height="100%"
              position="relative"
              justify="space-between"
              borderRight="1px solid #0A66C2"
              grow="1"
              padding="0 13px"
            >
              <Flex direction="column">
                {uslugi.map((el) => (
                  <FlightOptions
                    link={el.link}
                    option={el.option}
                    key={nanoid()}
                  />
                ))}
              </Flex>
              <Button
                fontSize="12px"
                variant="solid"
                height="22px"
                borderRadius="4px"
                colorScheme="red"
                position="absolute"
                bottom="10px"
                right="15"
              >
                SELECT
              </Button>
            </Flex>
            <Flex
              height="100%"
              position="relative"
              justify="space-between"
              grow="1"
              padding="0 13px"
            >
              <Flex direction="column">
                {uslugi.map((el) => (
                  <FlightOptions
                    link={el.link}
                    option={el.option}
                    key={nanoid()}
                  />
                ))}
              </Flex>
              <Button
                fontSize="12px"
                variant="solid"
                height="22px"
                borderRadius="4px"
                colorScheme="red"
                position="absolute"
                bottom="10px"
                right="15"
              >
                SELECT
              </Button>
            </Flex>
          </Flex>
          <Flex />
        </Flex>
      </TabPanel>
    </Tabs>
  );
};

export default FlightFareCategory;
