import React from 'react';
import Link from 'next/link';
import { Box, Heading, Image, PseudoBox, Button, Divider, Tooltip } from '@chakra-ui/core';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { genderMap, statusMap } from '../../utils/styleMaps';

const CharacterItem = props => {
  const { id, name, status, species, type, gender, image, location } = props;

  return (
    <PseudoBox
      data-testid="character-item"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      shadow="md"
      transition="0.3s all"
      _hover={{
        transform: 'scale(1.05)'
      }}
    >
      <Image src={image} fallbackSrc="/placeholder.png" alt={name} width="100%" />

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
          {`${species}`}
        </Box>

        <Box
          color="blue.200"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="10px"
          textTransform="uppercase"
        >
          {type ? type : 'No type'}
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

        <Link href="/character/[pid]" as={`/character/${id}`}>
          <Button
            as="a"
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
