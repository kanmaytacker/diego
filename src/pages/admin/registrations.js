import React from 'react';
import * as styles from './registrations.module.css';

import AccountLayout from '../../components/AccountLayout/AccountLayout';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout/Layout';
import OrderItem from '../../components/OrderItem/OrderItem';
import { isAuth } from '../../helpers/general';
import { navigate } from 'gatsby';
import Button from '../../components/Button/Button';

const OrderPage = (props) => {
  if (isAuth() === false) {
    navigate('/login');
  }

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today  = new Date();
  const date = today.toLocaleDateString("en-US", options);
  const sampleOrder1 = {
    id: '2',
    orderPlaced: date,
    lastUpdate: date,
    status: 'pending',
    items: [
      {
        image: '/products/shirt1.jpg',
        alt: 'order 1 product 1',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '2',
        price: '100',
      },
      {
        image: '/products/shirt2.jpg',
        alt: 'order 1 product 2',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '1',
        price: '300',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'NSW',
      country: 'Australia',
    },
    billingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'NSW',
      country: 'Australia',
    },
  };

  const sampleOrder2 = {
    id: '1',
    orderPlaced: date,
    lastUpdate: date,
    status: 'pending',
    items: [
      {
        image: '/products/shirt1.jpg',
        alt: 'order 1 product 1',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '2',
        price: '100',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'NSW',
      country: 'Australia',
    },
    billingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'NSW',
      country: 'Australia',
    },
  };

  return (
    <Layout>
      <AccountLayout>
        <h1>Registrations</h1>
        <div className={`${styles.tableHeaderContainer} ${styles.gridStyle}`}>
          <span className={styles.tableHeader}>Registration #</span>
          <span className={styles.tableHeader}>Created on</span>
          <span className={styles.tableHeader}>Last update</span>
          <span className={styles.tableHeader}>Status</span>
        </div>

        <OrderItem order={sampleOrder1} headerStyling={styles.gridStyle} />
        <OrderItem order={sampleOrder2} headerStyling={styles.gridStyle} />

        <Button onClick={() => console.log('Download')} level={'primary'}>
          Download
          </Button>
      </AccountLayout>
    </Layout>
  );
};

export default OrderPage;