import React from 'react';
import CharacterList from '../containers/CharacterList';
import withData from '../lib/apollo';
import Layout from '../lib/layout';

export default withData(() => (
  <Layout title="Rick and Morty Wiki">
    <CharacterList />
  </Layout>
));
