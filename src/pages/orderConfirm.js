import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const OrderConfirmPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Thank You!</h1>
          <p>
            We are now processing your order. If you have any concerns feel free
            to email us at contact@gurufa.com.
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title='Team details'
              icon={'user'}
              subtitle='Update your team details'
              link='/team/details'
              size={'lg'}
            />

            <ActionCard
              title='Player details'
              icon={'plus'}
              subtitle='Add the players to your team'
              link={'/team/players'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;
