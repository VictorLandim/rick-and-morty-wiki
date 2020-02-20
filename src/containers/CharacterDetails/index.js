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
  Image,
  Divider
} from '@chakra-ui/core';
import { GET_CHARACTER_DETAILS } from '../../lib/queries';
import Loader from '../../components/common/Loader';
import { Error } from '../CharacterList/styles';
import { Title, Episode } from './styles';

const CharacterDetails = () => {
  const router = useRouter();

  const { pid } = router.query;

  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS(gql), {
    variables: { id: pid },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first'
  });

  if (loading) return <Loader />;
  if (error) return <Error error="error" message="Erro fetching character data..." />;

  const { name, image, status, species, type, gender, origin, location, episode } = data[
    'character'
  ];

  const renderEpisodes = () => (
    <ul>
      {episode.map(episode => (
        <Episode key={episode.id} {...episode} />
      ))}
    </ul>
  );

  return (
    <Box
      padding={{ md: '20px', sm: '20px', xs: '20px' }}
      marginLeft={{ md: '250px', sm: '20px', xs: '20px' }}
      marginRight={{ md: '250px', sm: '20px', xs: '20px' }}
      marginTop="50px"
      pb="100px"
      borderRadius="10px"
      d="flex"
      alignItems={{ md: 'flex-start', sm: 'center', xs: 'center' }}
      justifyContent="normal"
      flexDir={{ md: 'row', sm: 'column', xs: 'column' }}
    >
      <Box flex="0 0 60%" p="150px" paddingTop="0px" paddingBottom="0px" shadow="md">
        <Image
          src={image}
          fallbackSrc="/placeholder.png"
          alt={name}
          textAlign="center"
          width="100%"
          borderRadius="1000px"
          border="5px solid teal"
          shadow="md"
        />
        <Heading fontSize="2xl" textAlign="center" mt="20px">
          {name}
        </Heading>
        <Divider />
      </Box>
      <Box pl="20px" pr="20px" flex="1">
        <Title>Appears on:</Title>
        {renderEpisodes()}
      </Box>
    </Box>
  );

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default CharacterDetails;
