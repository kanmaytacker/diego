import { navigate } from 'gatsby';
import React, { useState } from 'react';
import * as styles from './players.module.css';

import AccountLayout from '../../components/AccountLayout';
import AddressCard from '../../components/AddressCard';
import AddressForm from '../../components/AddressForm';
import Icon from '../../components/Icons/Icon';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal';

import Button from '../../components/Button';
import { isAuth } from '../../helpers/general';

const AddressPage = (props) => {
  const player = {
    name: 'John Doe',
    isCaptain: true,
    email: 'john@email.com'
  };

  const [players] = useState(Array(5).fill(player));
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  if (isAuth() === false) {
    navigate('/login');
  }

  return (
    <Layout>
      <AccountLayout>
        <h1>Players</h1>

        {showForm === false && (
          <div className={styles.addressListContainer}>
            {players.map((player) => {
              return (
                <AddressCard
                  showForm={() => setShowForm(true)}
                  showDeleteForm={() => setShowDelete(true)}
                  {...player}
                />
              );
            })}
            <div
              className={styles.addCard}
              role={'presentation'}
              onClick={() => setShowForm(true)}
            >
              <Icon symbol={'plus'}></Icon>
              <span>new player</span>
            </div>
          </div>
        )}

        {showForm === true && (
          <AddressForm closeForm={() => setShowForm(false)} />
        )}
      <Modal visible={showDelete} close={() => setShowDelete(false)}>
        <div className={styles.confirmDeleteContainer}>
          <h4>Delete Address?</h4>
          <p>
            Are you sure you want to delete this address? You cannot undo this
            action once you press <strong>'Delete'</strong>
          </p>
          <div className={styles.actionContainer}>
            <Button onClick={() => setShowDelete(false)} level={'primary'}>
              Delete
            </Button>
            <Button onClick={() => setShowDelete(false)} level={'secondary'}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
      </AccountLayout>
    </Layout>
  );
};

export default AddressPage;
