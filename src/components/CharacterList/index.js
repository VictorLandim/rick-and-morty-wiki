import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Box, Heading, Stack, Flex, SimpleGrid, Button } from '@chakra-ui/core';
import CharacterItem from '../CharacterItem';
import Loader from '../Loader';
import Filter from '../Filter';
import { FaRegSadCry } from 'react-icons/fa';

// location {
//   id
//   name
//   type
// }

// origin {
//   id
//   name
//   type
//   dimension
// }

const GET_CHARACTERS = gql`
  query characters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender

        image
        episode {
          id
          name
          air_date
        }

        location {
          name
        }
        created
      }

      info {
        pages
        next
        prev
        count
      }
    }
  }
`;

const Error = ({ error }) => (
  <Box
    mt="70px"
    d="flex"
    flexDir="column"
    alignItems="center"
    justifyContent="center"
    color="gray.400"
  >
    <Heading mb="15px" textAlign="center" fontSize="26px" fontWeight="semibold">
      Could not fetch Rick and Morty characters...
    </Heading>
    <Box as={FaRegSadCry} size="64px" />
    <pre>{JSON.stringify(error, null, 4)}</pre>
  </Box>
);

const CharacterList = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: 0 },
    notifyOnNetworkStatusChange: true
  });

  const characterData = data ? data['characters']['results'] : [];

  if (loading) return <Loader />;

  return (
    <Box p={{ md: '50px', sm: '40px', xs: '20px' }}>
      <Heading as="h1" size="2xl">
        Rick and Morty Characters:
      </Heading>

      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Filter />

          <SimpleGrid columns={{ md: 5, sm: 3, xs: 1 }} spacingX="30px" spacingY="30px">
            {characterData.map(character => (
              <CharacterItem key={character.id} {...character} />
            ))}
          </SimpleGrid>

          <Box d="flex" alignItems="center" justifyContent="center" mt="50px">
            <Button onClick={() => loadMoreCharacters(data, fetchMore)} color="blue" size="lg">
              Fetch more!
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

const loadMoreCharacters = (data, fetchMore) =>
  fetchMore({
    variables: {
      page: data['characters']['info']['next']
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult;

      return fetchMoreResult;

      return Object.assign({}, previousResult, {
        characters: {
          results: [...previousResult.characters.results, ...fetchMoreResult.characters.results]
        }
      });
    }
  });

export default CharacterList;
