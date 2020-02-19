import React from 'react';
import CharacterDetails from '../../containers/CharacterDetails';
import withData from '../../lib/apollo';
import Layout from '../../lib/layout';

export default withData(() => (
  <Layout>
    <CharacterDetails title="Rick and Morty Wiki | Character" />
  </Layout>
));
