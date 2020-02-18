import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Box, Heading, Spinner } from '@chakra-ui/core';
import CharacterItem from '../CharacterItem';

const GET_CHARACTERS = gql`
  {
    characters(filter: { species: "Alien" }) {
      results {
        id
        name
        status
        species
      }
    }
  }
`;

const CharacterList = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS);

  if (loading) return <Spinner />;
  if (error) return 'Error fetching characters.';

  return (
    <Box p={50}>
      <Heading>Characters</Heading>

      {!loading && data['characters']['results'].map(character => <CharacterItem {...character} />)}
    </Box>
  );
};

export default CharacterList;
