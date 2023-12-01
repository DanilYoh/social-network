import { Divider, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Arrow } from '@common/icons';
import { ICard } from '@interfaces/formik.interfaces';

const TravelCard: FC<ICard> = ({ title, header, text, image }) => (
  <Flex
    minW="14.3752rem"
    maxW="16.875rem"
    border="0.0625rem solid #D9D9D9"
    borderRadius="0.2475rem"
    boxShadow="0rem 0.2475rem 0.2475rem rgba(0, 0, 0, 0.25)"
    flexDirection="column"
    bgColor="#FFF"
    px="0.6877rem"
    pt="0.3127rem"
    pb="0.4373rem"
  >
    <Heading
      as="h2"
      display="flex"
      fontWeight="600"
      fontSize="0.8123rem"
      lineHeight="1.125rem"
      color="rgba(0, 0, 0, 0.71)"
      justifyContent="space-between"
      pt="0.4373rem"
      pl="0rem"
    >
      {title}
      <Link href="/discover">
        <Arrow mr="-0.2497rem" />
      </Link>
    </Heading>
    <Divider
      orientation="horizontal"
      bg="#868484"
      h="0.06rem"
      border="none"
      mb="0.4373rem"
      mt="0.3127rem"
    />
    <Flex alignItems="center" columnGap="0.1275rem">
      <Flex flexDirection="column" rowGap="1.2525rem">
        <Heading
          as="h3"
          display="flex"
          fontWeight="600"
          fontSize="0.6248rem"
          lineHeight="0.8752rem"
          color="#0A66C2"
          pt="0.2497rem"
        >
          {header}
        </Heading>
        <Text
          fontSize="0.6248rem"
          lineHeight="0.8752rem"
          color="#868484"
          textAlign="start"
          pr="0rem"
        >
          {text}
        </Text>
      </Flex>
      <Image src={image} w="6.9997rem" h="5.4997rem" alt="card image" />
    </Flex>
  </Flex>
);

export default TravelCard;
