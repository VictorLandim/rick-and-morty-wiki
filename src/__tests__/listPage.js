import React from 'react';
import { render, cleanup, findByTestId, findByText, findAllByTestId } from '@testing-library/react';
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

  it('runs the mocked query', () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <List />
      </MockedProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders the filter', () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <List />
      </MockedProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders the title with content', async () => {
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

  it('renders 20 characters on start', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <List />
      </MockedProvider>
    );

    const characterItems = await findAllByTestId(container, 'character-item');
    const characterItemContainer = await findByTestId(container, 'character-item-container');

    expect(characterItemContainer).toBeInTheDocument();
    expect(characterItems).toHaveLength(20);
  });
});
