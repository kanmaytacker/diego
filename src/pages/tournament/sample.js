import React, { useContext } from 'react';
import * as styles from './sample.module.css';

import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import Layout from '../../components/Layout/Layout';

import Icon from '../../components/Icons/Icon';
import { generateMockTournamentsData } from '../../helpers/mock';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

const ProductPage = (props) => {
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const sampleTournament = generateMockTournamentsData(1)[0];

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.title}>
            <h1>{sampleTournament.name}</h1>
            <span className={styles.location}>{sampleTournament.city}</span>
          </div>
          <div className={styles.content}>
            <div className={styles.gallery}>
              <Gallery images={sampleTournament.gallery} />
            </div>
            <div className={styles.details}>
              <div className={styles.description}>
                <p>{sampleTournament.description}</p>
              </div>

              <div className={styles.priceContainer}>
                <span className={styles.priceLabel}>You can win</span>
                <CurrencyFormatter
                  appendZero
                  amount={sampleTournament.winnings}
                  currency="INR"
                />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={() => showNotification()}
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
                  <p className={styles.information}>
                    {sampleTournament.description}
                  </p>
                </Accordion>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'Terms & Conditions'}
                >
                  <p className={styles.information}>
                    {sampleTournament.description}
                  </p>
                </Accordion>
                <Accordion type={'plus'} customStyle={styles} title={'Help'}>
                  <p className={styles.information}>
                    {sampleTournament.description}
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ProductPage;
