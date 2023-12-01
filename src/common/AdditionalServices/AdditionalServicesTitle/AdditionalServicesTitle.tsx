import { FC } from 'react';
import { Flex, Button, Spacer, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const AdditionalServicesTitle: FC<{ label: string }> = ({ label }) => {
  const { pathname } = useLocation();
  const bg = '#0A66C2';
  return (
    <Flex bg={bg}>
      <Flex alignItems="center">
        <Link
          to={
            pathname === '/baggage' ? '/additional-services' : '/search/results'
          }
        >
          <Button
            colorScheme={bg}
            fontSize={10}
            fontWeight="extrabold"
            color="white"
            pl={0}
            bg={bg}
          >
            <ChevronLeftIcon h={13} w={7} boxSize={7} color="white" />
            BACK
          </Button>
        </Link>
      </Flex>

      <Spacer />
      <Text color="white" fontSize={16} fontWeight="bold" mt="5px">
        {label.toUpperCase()}
      </Text>
      <Spacer bg={bg} />
      <Flex alignItems="center">
        <Link to="/payment">
          <Button
            colorScheme={bg}
            fontSize={10}
            pr={0}
            fontWeight="extrabold"
            color="white"
            bg={bg}
          >
            SKIP
            <ChevronRightIcon boxSize={7} color="white" />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default AdditionalServicesTitle;
