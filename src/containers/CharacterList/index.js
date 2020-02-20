import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Heading, SimpleGrid, Text } from '@chakra-ui/core';

import CharacterItem from '../../components/common/CharacterItem';
import Loader from '../../components/common/Loader';
import Filter from '../../components/layout/Filter';
import Pagination from '../../components/layout/Pagination';

import { GET_CHARACTER_LIST } from '../../lib/queries';
import { Error, Container } from './styles';

const CharacterList = () => {
  const INITIAL_FILTER = {
    name: null,
    status: null,
    species: null,
    type: null,
    gender: null
  };

  const [filter, setFilter] = useState({ ...INITIAL_FILTER });

  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTER_LIST(gql), {
    variables: { page: 1, filter },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first'
    // fetchPolicy: 'network-only'
  });

  const characterData = data ? data['characters']['results'] : [];
  const { pages, next, prev, count } = data ? data['characters']['info'] : {};

  const onPrev = () => paginate(data, fetchMore, prev);
  const onNext = () => paginate(data, fetchMore, next);

  const renderContent = () => {
    if (loading || !data) return <Loader />;

    if (error)
      return <Error error={error} message="Could not fetch Rick and Morty characters..." />;

    return (
      <>
        {characterData && (
          <Pagination prev={prev} next={next} onPrev={onPrev} onNext={onNext} pages={pages} />
        )}

        {characterData && (
          <>
            <Text textAlign="center" color="gray.400" marginBottom="0px" fontSize="14px">
              &bull; {count} characters &bull;
            </Text>
            <Text textAlign="center" color="gray.400" marginBottom="20px" fontSize="12px">
              Showing {characterData.length}
            </Text>
          </>
        )}

        {!characterData ? (
          <Error message="Could not find any characters for that search..." />
        ) : (
          <SimpleGrid columns={{ md: 5, sm: 3, xs: 1 }} spacingX="30px" spacingY="30px">
            {characterData.map(character => (
              <CharacterItem key={character.id} {...character} />
            ))}
          </SimpleGrid>
        )}
        {characterData && (
          <Pagination prev={prev} next={next} onPrev={onPrev} onNext={onNext} pages={pages} />
        )}
      </>
    );
  };

  return (
    <Container>
      <Heading as="h1" fontSize="36px" mb="45px" textAlign="center">
        Find Rick and Morty characters
      </Heading>

      <Filter setFilter={setFilter} onFilter={() => {}} />

      {renderContent()}
    </Container>
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
