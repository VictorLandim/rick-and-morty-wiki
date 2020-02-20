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
import { Loader } from '../../components/common';
import { Error } from '../CharacterList/styles';
import { Title, Episode } from './styles';
import Layout from '../../lib/layout';

const CharacterDetails = () => {
  const router = useRouter();

  const { pid } = router.query;

  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS(gql), {
    variables: { id: pid },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first'
  });

  const { name, image, status, species, type, gender, origin, location, episode } = data
    ? data['character']
    : {};

  const renderEpisodes = () => (
    <ul>
      {episode.map(episode => (
        <Episode key={episode.id} {...episode} />
      ))}
    </ul>
  );

  const renderContent = () => {
    if (loading || !data) return <Loader />;
    if (error) return <Error error={error} message="Error fetching character data..." />;

    return (
      <Box
        padding={{ md: '20px', sm: '20px', xs: '20px' }}
        marginLeft={{ md: '200px', sm: '20px', xs: '20px' }}
        marginRight={{ md: '200px', sm: '20px', xs: '20px' }}
        marginTop="50px"
        pb="100px"
        borderRadius="10px"
        d="flex"
        justifyContent="normal"
        flexDir={{ md: 'row', sm: 'column', xs: 'column' }}
      >
        <Box
          flex="0 0 60%"
          p="100px"
          ml="50px"
          mr="50px"
          paddingTop="0px"
          paddingBottom="0px"
          shadow="md"
        >
          <Image
            src={image}
            fallbackSrc="/placeholder.png"
            alt={name}
            width="60%"
            borderRadius="1000px"
            border="5px solid teal"
            shadow="md"
            justifySelf="center"
            margin="0 auto"
          />
          <Heading fontSize="2xl" textAlign="center" mt="20px">
            {name}
          </Heading>
          <Divider />

          <Box>{species}</Box>
          <Box>{type}</Box>

          <Box>{status}</Box>
          <Box>{gender}</Box>

          <Box>{origin.name}</Box>
          <Box>{location.name}</Box>
          <Box></Box>
        </Box>
        <Box pl="20px" pr="20px" ml="50px" mr="50px" flex="1" shadow="md">
          <Title>Appears on:</Title>
          {renderEpisodes()}
        </Box>
      </Box>
    );
  };

  return <Layout title="Rick and Morty Wiki | Character">{renderContent()}</Layout>;
};

export default CharacterDetails;
