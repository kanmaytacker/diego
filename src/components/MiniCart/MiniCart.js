import { Link, navigate } from 'gatsby';
import React, { useState } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';

import * as styles from './MiniCart.module.css';
import SignupPage from '../../pages/signup';
import {
  isEmpty,
  validateEmail,
  validateStrongPassword,
} from '../../helpers/general';
import FormInputField from '../FormInputField/FormInputField';

const MiniCart = (props) => {
  const sampleCartItem = {
    image: '/products/pdp1.jpeg',
    alt: '',
    name: 'Lambswool Crew Neck Jumper',
    price: 220,
    color: 'Anthracite Melange',
    size: 'xs',
  };

  const initialState = {
    teamName: '',
    contactPhone: '',
    contactEmail: '',
    contactName: '',
  };

  const errorState = {
    teamName: '',
    contactPhone: '',
    contactEmail: '',
    contactName: '',
  };

  const [signupForm, setSignupForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState(errorState);

  const handleChange = (id, e) => {
    const tempForm = { ...signupForm, [id]: e };
    setSignupForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorState };

    if (isEmpty(signupForm.teamName) === true) {
      tempError.firstName = 'Field required';
      validForm = false;
    }

    if (isEmpty(signupForm.contactPhone) === true) {
      tempError.lastName = 'Field required';
      validForm = false;
    }

    if (validateEmail(signupForm.contactEmail) !== true) {
      tempError.email =
        'Please use a valid email address, such as user@example.com.';
      validForm = false;
    }

    if (validForm === true) {
      setErrorForm(errorState);
      navigate('/accountSuccess');
      window.localStorage.setItem('key', 'sampleToken');
      //create account endpoint
    } else {
      setErrorForm(tempError);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Your Team</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        <form
          noValidate
          className={styles.signupForm}
          onSubmit={(e) => handleSubmit(e)}
        >
          <FormInputField
            id={'teamName'}
            value={signupForm.teamName}
            handleChange={(id, e) => handleChange(id, e)}
            type={'input'}
            labelName={'Team name'}
            error={errorForm.teamName}
          />

          <FormInputField
            id={'phone'}
            value={signupForm.contactPhone}
            handleChange={(id, e) => handleChange(id, e)}
            type={'input'}
            labelName={'Contact phone number'}
            error={errorForm.contactPhone}
          />

          <FormInputField
            id={'email'}
            value={signupForm.contactEmail}
            handleChange={(id, e) => handleChange(id, e)}
            type={'email'}
            labelName={'Contact email'}
            error={errorForm.contactEmail}
          />
          <FormInputField
            id={'contactName'}
            value={signupForm.contactName}
            handleChange={(id, e) => handleChange(id, e)}
            type={'input'}
            labelName={'Contact name'}
            error={errorForm.contactName}
          />

        </form>
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Total (INR)</span>
            <span>
              <CurrencyFormatter amount={500} appendZero currency='INR'/>
            </span>
          </div>
          <span className={styles.taxNotes}>
            Taxes and shipping will be calculated at checkout
          </span>
          <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
            checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
