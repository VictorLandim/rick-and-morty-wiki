import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Box, Heading, Stack, Flex, SimpleGrid, Button } from '@chakra-ui/core';
import CharacterItem from '../CharacterItem';
import Loader from '../Loader';
import Filter from '../Filter';
import { FaRegSadCry } from 'react-icons/fa';
import Pagination from '../Pagination';

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
  query characters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
  const INITIAL_FILTER = {
    name: null,
    status: null,
    species: null,
    type: null,
    gender: null
  };

  const [filter, setFilter] = useState({ ...INITIAL_FILTER });

  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: 0, filter },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first'
  });

  if (loading) return <Loader />;

  const characterData = data ? data['characters']['results'] : [];
  const { pages, next, prev } = data['characters']['info'];

  const onPrev = () => paginate(data, fetchMore, prev);
  const onNext = () => paginate(data, fetchMore, next);

  return (
    <Box
      paddingTop="20px"
      paddingBottom="20px"
      paddingLeft={{ md: '50px', sm: '40px', xs: '20px' }}
      paddingRight={{ md: '50px', sm: '40px', xs: '20px' }}
    >
      <Heading as="h1" size="2xl">
        Rick and Morty Characters:
      </Heading>

      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Filter />
          <Pagination prev={prev} next={next} onPrev={onPrev} onNext={onNext} pages={pages} />

          <SimpleGrid columns={{ md: 5, sm: 3, xs: 1 }} spacingX="30px" spacingY="30px">
            {characterData.map(character => (
              <CharacterItem key={character.id} {...character} />
            ))}
          </SimpleGrid>

          <Pagination prev={prev} next={next} onPrev={onPrev} onNext={onNext} pages={pages} />
        </>
      )}
    </Box>
  );
};

const paginate = (data, fetchMore, page) =>
  fetchMore({
    variables: {
      page
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult;

      return fetchMoreResult;
    }
  });

export default CharacterList;
