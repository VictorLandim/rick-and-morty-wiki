import React from 'react';
import { Spinner, Flex, Heading } from '@chakra-ui/core';

const Loader = () => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center" marginTop="230px">
    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
    <Heading color={'gray.700'} mt={5} as="h4" size="md">
      Loading...
    </Heading>
  </Flex>
);
export default Loader;
