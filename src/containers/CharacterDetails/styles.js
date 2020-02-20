import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/core';

export const Title = ({ text }) => (
  <Flex alignItems="center" justifyContent="center" marginBottom="15px">
    <Heading fontSize="sm" color="gray.400" fontWeight="400" textTransform="uppercase" mr="10px">
      {text}
    </Heading>
    <Box flex="1" height="1px" bg="gray.100"></Box>
  </Flex>
);

export const Episode = ({ episode, name, air_date }) => (
  <Box as="li" mb="10px" listStyleType="none">
    <Text fontSize="15px">⇾{` ${episode} - "${name}"`}</Text>
    <Text ml="20px" fontSize="12px" color="gray.600" textTransform="uppercase">
      {air_date}
    </Text>
  </Box>
);

export const Row = ({ color, icon, label, text }) => (
  <Box d="flex" mb="10px">
    <Text fontWeight="bold" mr="10px" fontSize="lg">
      {label}
    </Text>

    <Box d="flex" alignItems="center" color={color} fontSize="lg">
      <Box w="20px" as={icon} mr="5px" />
      {text.charAt(0).toUpperCase() + text.substring(1)}
    </Box>
  </Box>
);
