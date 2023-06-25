import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import * as styles from './sample.module.css';

import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import Layout from '../../components/Layout/Layout';
import MiniCart from '../../components/MiniCart';

import Icon from '../../components/Icons/Icon';

import Drawer from '../../components/Drawer/Drawer';
import { generateMockTournamentsData } from '../../helpers/mock';

const ProductPage = (props) => {

 // TODO: Use tournamentId to fetch tournament data from supabase
  const mockTournament = generateMockTournamentsData(1)[0];
  const {
    supabaseTournament: tournament,
  } = useStaticQuery(graphql`
  query MyQuery {
    supabaseTournament {
      id
      metadata {
        name
        description
      }
      created_at
      databaseId
      skill_id
      winnings
      city {
        id
        name
      }
    }
  }
`);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.title}>
            <h1>{tournament.metadata.name ?? ''}</h1>
            <span className={styles.location}>{tournament.city.name}</span>
          </div>
          <div className={styles.content}>
            <div className={styles.gallery}>
              <Gallery images={mockTournament.gallery} />
            </div>
            <div className={styles.details}>
              <div className={styles.description}>
                <p>{tournament.metadata.description}</p>
              </div>

              <div className={styles.priceContainer}>
                <span className={styles.priceLabel}>You can win</span>
                <CurrencyFormatter
                  appendZero
                  amount={tournament.winnings}
                  currency="INR"
                />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={() => setShowRegister(true)}
                    fullWidth
                    level={'primary'}
                  >
                    Register
                  </Button>
                </div>
                <div
                  className={styles.wishlistActionContainer}
                  role={'presentation'}
                >
                  <Icon symbol={'heart'}></Icon>
                </div>
              </div>

              <div className={styles.informationContainer}>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'Rules & Regulations'}
                >
                  <p className={styles.information}>{tournament.metadata.description}</p>
                </Accordion>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'Terms & Conditions'}
                >
                  <p className={styles.information}>{tournament.metadata.description}</p>
                </Accordion>
                <Accordion type={'plus'} customStyle={styles} title={'Help'}>
                  <p className={styles.information}>{tournament.metadata.description}</p>
                </Accordion>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Drawer visible={showRegister} close={() => setShowRegister(false)}>
        <MiniCart />
      </Drawer>{' '}
    </Layout>
  );
};

export default ProductPage;
