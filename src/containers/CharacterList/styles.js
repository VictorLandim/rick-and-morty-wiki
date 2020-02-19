import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import { FaRegSadCry } from 'react-icons/fa';

export const Error = ({ error, message }) => (
  <Box
    mt="70px"
    d="flex"
    flexDir="column"
    alignItems="center"
    justifyContent="center"
    color="gray.400"
  >
    <Heading mb="15px" textAlign="center" fontSize="26px" fontWeight="semibold">
      {message}
    </Heading>
    <Box as={FaRegSadCry} size="64px" />
    {error && <pre>{JSON.stringify(error, null, 4)}</pre>}
  </Box>
);

export const Container = ({ children }) => (
  <Box
    paddingTop="20px"
    paddingBottom="75px"
    paddingLeft={{ md: '50px', sm: '40px', xs: '20px' }}
    paddingRight={{ md: '50px', sm: '40px', xs: '20px' }}
  >
    {children}
  </Box>
);
