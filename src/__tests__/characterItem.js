import React from 'react';
import { render, cleanup, findByTestId } from '@testing-library/react';
import { CharacterItem } from '../components/common';
import Layout from '../utils/layout';

const characterData = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: null,
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  location: 'Earth (Replacement Dimension)'
};

describe('Character Item', () => {
  afterEach(cleanup);

  it('renders correctly', async () => {
    const { container } = render(
      <Layout>
        <CharacterItem {...characterData} />
      </Layout>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders info & button', async () => {
    const { container, findByText } = render(
      <Layout>
        <CharacterItem {...characterData} />
      </Layout>
    );

    const name = await findByText(characterData.name);
    const status = await findByText(characterData.status);
    const species = await findByText(characterData.species);
    const gender = await findByText(characterData.gender);

    const button = await findByTestId(container, 'item-button');

    expect(name).toBeTruthy();
    expect(status).toBeTruthy();
    expect(species).toBeTruthy();
    expect(gender).toBeTruthy();

    expect(button).toBeTruthy();
  });
});
