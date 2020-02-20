import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { gql } from 'apollo-boost';
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Image
} from '@chakra-ui/core';

export const Title = ({ children }) => (
  <Heading fontSize="26px" color="gray.600" marginBottom="20px">
    {children}
  </Heading>
);

export const Episode = ({ episode, name, air_date }) => (
  <Box as="li" ml="20px" mb="10px">
    <Text>{`${episode} - ${name}`}</Text>
    <Text ml="10px" fontSize="12px" color="gray.600" textTransform="uppercase">
      {air_date}
    </Text>
  </Box>
);
