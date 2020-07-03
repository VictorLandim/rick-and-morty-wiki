import React from 'react';
import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  HttpLink,
  ApolloClient,
  InMemoryCache
} from 'apollo-boost';

export default withApollo(
  ({ initialState }) => {
    const client = new ApolloClient({
      link: new HttpLink({
        uri: "https://rickandmortyapi.com/graphql",
      }),
      cache: new InMemoryCache().restore(initialState || {}),
    });


    return client;
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
