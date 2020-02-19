import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  StarIcon,
  Badge,
  PseudoBox,
  Button,
  Tooltip,
  Icon,
  Divider
} from '@chakra-ui/core';
import { FaRegDizzy, FaRegFlushed, FaRegGrin, FaMapMarkerAlt } from 'react-icons/fa';

const CharacterItem = props => {
  const { id, name, status, species, type, gender, image, location } = props;

  const statusMap = {
    Alive: {
      color: 'teal.500',
      icon: FaRegGrin,
      text: 'Alive'
    },
    Dead: {
      color: 'red.500',
      icon: FaRegDizzy,
      text: 'Dead'
    },
    unknown: {
      color: 'purple.500',
      icon: FaRegFlushed,
      text: 'Status unknown'
    }
  };

  return (
    <PseudoBox
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      shadow="md"
      transition="0.3s all"
      _hover={
        {
          // transform: 'translateY(-5px)'
        }
      }
    >
      <Image src={image} fallbackSrc="placeholder.png" alt={name} width="100%" />

      <Box p="6">
        <Heading as="h2" mb="3px" isTruncated size="md">
          {name}
        </Heading>

        <Box
          color="blue.300"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          {species}
        </Box>

        <Divider />

        <Box
          d="flex"
          alignItems="center"
          flexDir="row"
          color={statusMap[status]['color']}
          mb="10px"
          fontSize="sm"
        >
          <Box w="20px" mr="3px" as={statusMap[status]['icon']} />
          {statusMap[status]['text']}
        </Box>

        <Box d="flex" alignItems="center" flexDir="row" mb="10px" fontSize="xs" color="gray.600">
          <Box w="20px" mr="3px" as={FaMapMarkerAlt} />
          {location.name}
        </Box>

        <Button
          alignSelf="flex-end"
          rightIcon="arrow-forward"
          mt="10px"
          width="100%"
          variantColor="teal"
          size="md"
        >
          Details
        </Button>
      </Box>
    </PseudoBox>
  );
};

export default CharacterItem;
