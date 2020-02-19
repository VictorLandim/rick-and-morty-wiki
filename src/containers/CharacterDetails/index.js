import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { gql } from 'apollo-boost';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/core';
import { GET_CHARACTER_DETAILS } from '../../lib/queries';

const CharacterDetails = () => {
  const router = useRouter();

  const { pid } = router.query;

  // const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS(gql, id), {
  //   variables: { page: 1, filter },
  //   notifyOnNetworkStatusChange: true,
  //   fetchPolicy: 'cache-first'
  // });

  return <div>CharacterDetails : {pid}</div>;
};

export default CharacterDetails;
