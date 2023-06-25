import * as React from 'react';

import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';

const IndexPage = () => {
  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Join competitions near you'}
        subtitle={'Discover hidden gems and win prizes'}
        ctaText={'play now'}
      />
    </Layout>
  );
};

export default IndexPage;
