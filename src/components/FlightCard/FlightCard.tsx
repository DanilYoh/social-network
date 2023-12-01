import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  TabList,
  TabPanels,
  Tabs,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';

import { IFlightCard } from '@/interfaces/flight-card';
import wifi from '@images/wifi.png';
import dinner from '@images/dinner.png';
import headphones from '@images/headphones.png';
import ArrowBottom from '@/common/icons/arrowBottom';
import ClockIcon from '@/common/icons/clock';
import TransferIcon from '@/common/icons/transfer';
import { FlightClass } from '@components/FlightClass';
import { FlightFareCategory } from '@components/FlightFareCategory';

const FlightCard: FC<IFlightCard> = ({ data }) => {
  const [flightDetails, setFlightDetails] = useBoolean();
  const [tabVisible, settabVisible] = useBoolean();
  const [tab, setTab] = useState(0);

  const arrivalDate = new Date(data.arrivalDateTime);
  const departureDate = new Date(data.departureDateTime);
  const flightDuration = (param = true) => {
    const timeBetween = arrivalDate.getTime() - departureDate.getTime();
    if (param) {
      return `${Math.trunc(timeBetween / 36000000)}:${Math.trunc(
        (timeBetween / 60000) % 60
      )}`;
    }
    return `${Math.trunc(timeBetween / 36000000)}h ${Math.trunc(
      (timeBetween / 60000) % 60
    )}m`;
  };

  return (
    <Flex alignItems="flex-start" justifyContent="space-between">
      <Flex direction="column">
        <Flex
          fontSize={12}
          justifyContent="space-between"
          width={590}
          padding="10px 15px"
          height="75px"
          border="1px solid #D9D9D9"
          boxShadow="0px 1px 1px #D9D9D9"
          borderRadius="2px"
        >
          <Flex direction="column">
            <Text fontWeight={700}>
              {departureDate.getHours()}:{departureDate.getMinutes()}
            </Text>
            <Text>{data.from.cityName}</Text>
            <Text>{data.from.airportCode}</Text>
          </Flex>
          <Box display="flex" alignItems="center">
            <TransferIcon />
          </Box>
          <Flex direction="column">
            <Text fontWeight={700}>
              {arrivalDate.getHours()}:{arrivalDate.getMinutes()}
            </Text>
            <Text>{data.to.cityName}</Text>
            <Text>{data.to.airportCode}</Text>
          </Flex>
          <Flex alignItems="center">
            <ClockIcon />
            <Text>{flightDuration(false)}</Text>
          </Flex>
          <Flex
            padding="0 12px 0 0"
            borderRight="1px solid rgba(78, 76, 76, 0.71)"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text>Inflight Services</Text>
            <Flex gap="2px" alignItems="center">
              <div>
                <img src={wifi} alt="wifi" />
              </div>
              <div>
                <img src={dinner} alt="dinner" />
              </div>
              <div>
                <img src={headphones} alt="headphones" />
              </div>
            </Flex>
          </Flex>
          <Button
            _hover={{ background: 'none' }}
            _active={{ background: 'none' }}
            onClick={() => setFlightDetails.toggle()}
            height="100%"
            background="none"
          >
            <Text color="#0A66C2" fontSize={12}>
              Flight Details
            </Text>

            <ArrowBottom
              style={{
                position: 'absolute',
                right: '0',
                bottom: '0',
                transform: flightDetails ? 'rotate(180deg)' : '',
              }}
            />
          </Button>
        </Flex>
        <Grid
          fontSize={12}
          marginTop="5px"
          width="590px"
          height="93px"
          display={flightDetails ? 'grid' : 'none'}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
        >
          <GridItem
            colStart={1}
            colSpan={4}
            rowStart={1}
            background="#0A66C2"
            borderRadius="4px 4px 0px 0px"
            border="1px solid #D9D9D9"
          />
          <GridItem color=" #FFFFFF" margin="auto" rowStart={1} colStart={1}>
            FLIGHT
          </GridItem>
          <GridItem color=" #FFFFFF" margin="auto" rowStart={1} colStart={2}>
            FROM
          </GridItem>
          <GridItem color=" #FFFFFF" margin="auto" rowStart={1} colStart={3}>
            TO
          </GridItem>
          <GridItem color=" #FFFFFF" margin="auto" rowStart={1} colStart={4}>
            DURATION
          </GridItem>

          <GridItem
            height="58px"
            colStart={1}
            colSpan={4}
            rowStart={2}
            box-shadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
            borderRadius="0px 0px 4px 4px"
            border="1px solid #D9D9D9"
          />
          <GridItem margin="auto" rowStart={2} colStart={1}>
            <img src="" alt="" />
            <Flex direction="column">
              <Text>{data.aircraft.model}</Text>
              <Text>{data.aircraft.aircraftNumber}</Text>
            </Flex>
          </GridItem>
          <GridItem margin="auto" rowStart={2} colStart={2}>
            <Text>
              {data.from.cityName} {data.from.airportCode}
            </Text>
            <Text color="#0A66C2">
              {departureDate.getHours()}:{departureDate.getMinutes()}
            </Text>
          </GridItem>
          <GridItem margin="auto" rowStart={2} colStart={3}>
            <Text>
              {data.to.cityName} {data.to.airportCode}
            </Text>
            <Text color="#0A66C2">
              {arrivalDate.getHours()}:{arrivalDate.getMinutes()}
            </Text>
          </GridItem>
          <GridItem margin="auto" rowStart={2} colStart={4}>
            {flightDuration(false)}
          </GridItem>
        </Grid>
      </Flex>
      <Tabs defaultIndex={0}>
        <TabList gap="1em" borderBottom="none">
          {data.aircraft.seatSet.map((el) => (
            <FlightClass
              setTabVisible={() => settabVisible.on()}
              key={el.id}
              id={el.id}
              price={el.price}
              category={el.category}
              tab={tab}
              setTab={setTab}
            />
          ))}
        </TabList>
        <TabPanels display={tabVisible ? 'block' : 'none'}>
          {data.aircraft.seatSet.map((el) => (
            <FlightFareCategory key={el.id} price={el.price} />
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default FlightCard;
