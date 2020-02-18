import React from 'react';
import CharacterDetails from '../components/CharacterDetails';
import withData from '../lib/apollo';
import Layout from '../lib/layout';

export default withData(() => (
  <Layout>
    <CharacterDetails />
  </Layout>
));
