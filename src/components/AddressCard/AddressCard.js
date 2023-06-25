import React from 'react';
import * as styles from './AddressCard.module.css';

const AddressCard = (props) => {
  const {
    name,
    isCaptain,
    email,
    showForm,
    showDeleteForm,
  } = props;

  return (
    <div className={`${styles.root}`}>
      <span className={styles.name}>{name}</span>
      {email ? <span>{email}</span> : null}
      {isCaptain ? <span>Captain</span> : null}
      <div className={styles.actionContainer}>
        <span role={'presentation'} onClick={showForm}>
          Edit
        </span>
        <span role={'presentation'} onClick={showDeleteForm}>
          Remove
        </span>
      </div>
    </div>
  );
};

export default AddressCard;
