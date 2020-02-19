import React from 'react';
import { Spinner, Flex, Stack, Heading } from '@chakra-ui/core';

const Loader = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" height={'100vh'}>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      <Heading color={'gray.700'} mt={5} as="h4" size="md">
        Loading...
      </Heading>
    </Flex>
  );
};

export default Loader;
