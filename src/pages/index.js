import React from 'react';
import CharacterList from '../components/CharacterList';
import withData from '../lib/apollo';
import Layout from '../lib/layout';

export default withData(() => (
  <Layout>
    <CharacterList />
  </Layout>
));
