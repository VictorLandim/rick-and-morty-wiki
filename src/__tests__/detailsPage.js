import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { gql } from 'apollo-boost';

import { RouterContext } from 'next/dist/next-server/lib/router-context';

import { GET_CHARACTER_DETAILS } from '../lib/queries';
import Details from '../pages/character/[pid]';
import { DETAILS_MOCK } from '../utils/mocks';

const mocks = [
  {
    request: {
      query: GET_CHARACTER_DETAILS(gql),
      variables: { id: 1 } // Rick
    },
    result: DETAILS_MOCK
  }
];

const router = {
  pathname: '/characters/1',
  route: '/characters/1',
  query: { pid: '1' },
  asPath: '/characters/1'
};

describe('Details page', () => {
  afterEach(cleanup);

  it('runs the mocked useRouter() and mocked graphQL query', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RouterContext.Provider value={router}>
          <Details />
        </RouterContext.Provider>
      </MockedProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders name and contains all info labels', async () => {
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RouterContext.Provider value={router}>
          <Details />
        </RouterContext.Provider>
      </MockedProvider>
    );

    const characterName = await findByText('Rick Sanchez');

    const statusLabel = await findByText('Status:');
    const genderLabel = await findByText('Gender:');
    const speciesLabel = await findByText('Species:');
    const typeLabel = await findByText('Type:');
    const originLabel = await findByText('Origin:');
    const locationLabel = await findByText('Location:');

    expect(characterName).toBeTruthy();

    expect(statusLabel).toBeTruthy();
    expect(genderLabel).toBeTruthy();
    expect(speciesLabel).toBeTruthy();
    expect(typeLabel).toBeTruthy();
    expect(originLabel).toBeTruthy();
    expect(locationLabel).toBeTruthy();
  });
});
