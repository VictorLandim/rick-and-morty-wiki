import React from 'react';
import { Box, Heading, Image, PseudoBox, Button, Divider, Tooltip } from '@chakra-ui/core';
import {
  FaRegDizzy,
  FaRegFlushed,
  FaRegGrin,
  FaMapMarkerAlt,
  FaGenderless,
  FaMars,
  FaVenus,
  FaTransgender
} from 'react-icons/fa';
import Link from 'next/link';

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

  const genderMap = {
    Male: {
      color: 'blue.400',
      icon: FaMars,
      text: 'Male'
    },
    Female: {
      color: 'pink.400',
      icon: FaVenus,
      text: 'Female'
    },
    Genderless: {
      color: 'gray.500',
      icon: FaGenderless,
      text: 'Genderless'
    },
    unknown: {
      color: 'purple.400',
      icon: FaTransgender,
      text: 'Gender unknown'
    }
  };

  return (
    <PseudoBox
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      shadow="md"
      transition="0.3s all"
      _hover={{
        // transform: 'translateY(-5px)'
        transform: 'scale(1.05)'
      }}
    >
      <Image src={image} fallbackSrc="placeholder.png" alt={name} width="100%" />

      <Box p="15px">
        <Tooltip hasArrow label={name} placement="top">
          <Heading as="h2" mb="3px" isTruncated size="md">
            {name}
          </Heading>
        </Tooltip>

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

        <Box
          d="flex"
          alignItems="center"
          flexDir="row"
          color={genderMap[gender]['color']}
          mb="10px"
          fontSize="sm"
        >
          <Box w="20px" mr="3px" as={genderMap[gender]['icon']} />
          {genderMap[gender]['text']}
        </Box>

        <Box d="flex" alignItems="center" flexDir="row" mb="10px" fontSize="xs" color="gray.600">
          <Box w="20px" mr="3px" as={FaMapMarkerAlt} />
          {location.name}
        </Box>

        <Link href={`/character/${id}`}>
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
        </Link>
      </Box>
    </PseudoBox>
  );
};

export default CharacterItem;
