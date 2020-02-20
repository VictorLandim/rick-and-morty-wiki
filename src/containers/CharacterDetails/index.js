import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { gql } from 'apollo-boost';
import { Box, Heading, Image, Divider, Button } from '@chakra-ui/core';
import { FaMapMarkerAlt, FaGlobeAfrica, FaUserAlt, FaUserPlus } from 'react-icons/fa';

import { GET_CHARACTER_DETAILS } from '../../lib/queries';
import { Loader } from '../../components/common';
import Layout from '../../utils/layout';
import { Error } from '../CharacterList/styles';
import { Title, Episode, Row } from './styles';
import { genderMap, statusMap } from '../../utils/styleMaps';

const CharacterDetails = () => {
  const router = useRouter();

  const { pid } = router.query;

  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS(gql), {
    variables: { id: pid },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network'
  });

  const { name, image, status, species, type, gender, origin, location, episode } = data
    ? data['character']
    : {};

  const renderButton = () => (
    <Link href="/">
      <Button
        variant="ghost"
        size="md"
        as="a"
        leftIcon="arrow-left"
        variantColor="blue"
        marginTop="10px"
        marginLeft="10px"
      >
        Go back
      </Button>
    </Link>
  );

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
      <>
        {renderButton()}

        <Box
          flexDir={{ md: 'row', sm: 'column', xs: 'column' }}
          d="flex"
          justifyContent="normal"
          alignItems={{ md: 'flex-start', sm: 'stretch', xs: 'stretch' }}
          padding={{ md: '20px', sm: '10px', xs: '10px' }}
          borderRadius="10px"
          maxWidth="100%"
          width="900px"
          marginLeft="auto"
          marginRight="auto"
        >
          <Box
            flex="0 0 60%"
            shadow="lg"
            marginRight={{ md: '20px', sm: '0px', xs: '0px' }}
            marginBottom={{ md: '0px', sm: '20px', xs: '20px' }}
            marginTop={{ md: '0px', sm: '20px', xs: '20px' }}
            paddingTop="15px"
          >
            <Image
              src={image}
              fallbackSrc="/placeholder.png"
              alt={name}
              width="50%"
              borderRadius="1000px"
              border="2px solid teal"
              shadow="lg"
              justifySelf="center"
              margin="0 auto"
            />
            <Heading fontSize="3xl" textAlign="center" mt="20px" mb="20px">
              {name}
            </Heading>
            <Divider />

            <Box p="20px">
              <Title text="Info" />

              <Row {...statusMap[status]} label="Status:" />
              <Row {...genderMap[gender]} label="Gender:" />
              <Row color="gray" text={species} icon={FaUserAlt} label="Species:" />
              <Row color="gray" text={type ? type : 'No type'} icon={FaUserPlus} label="Type:" />
              <Row color="gray" text={origin.name} icon={FaGlobeAfrica} label="Origin:" />
              <Row color="gray" text={location.name} icon={FaMapMarkerAlt} label="Location:" />
            </Box>
          </Box>
          <Box p={{ md: '30px', sm: '20px', xs: '20px' }} pt="15px" pb="10px" flex="1" shadow="lg">
            <Title text="Featured in" />

            {renderEpisodes()}
          </Box>
        </Box>
      </>
    );
  };

  return <Layout title={`Rick and Morty Wiki | ${name}`}>{renderContent()}</Layout>;
};

export default CharacterDetails;
