import React from 'react';
import { render, cleanup, findByTestId, findByText } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { gql } from 'apollo-boost';

import { GET_CHARACTER_LIST } from '../lib/queries';
import List from '../pages/index';
import { LIST_MOCK } from '../utils/mocks';

const mocks = [
  {
    request: {
      query: GET_CHARACTER_LIST(gql),
      variables: {
        page: 1,
        filter: {
          name: null,
          status: null,
          species: null,
          type: null,
          gender: null
        }
      }
    },
    result: LIST_MOCK
  }
];

describe('List page', () => {
  afterEach(cleanup);

  it('renders title', async () => {
    const { container, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <List />
      </MockedProvider>
    );

    const titleElement = await findByTestId(container, 'heading');
    const titleContent = await findByText(titleElement, 'Find Rick and Morty characters');

    expect(getByText('Find Rick and Morty characters')).toBeInTheDocument();
    expect(titleElement).toBeTruthy();
    expect(titleContent).toBeTruthy();
  });
});
