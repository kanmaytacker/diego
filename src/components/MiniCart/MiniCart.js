import { navigate } from 'gatsby';
import React, { useState } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';

import {
  isEmpty
} from '../../helpers/general';
import FormInputField from '../FormInputField/FormInputField';
import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {

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
    console.log('id', e);
    const tempForm = { ...signupForm, [id]: e };
    setSignupForm(tempForm);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorState };

    if (isEmpty(signupForm.teamName) === true) {
      tempError.teamName = 'Field required';
      validForm = false;
    }

    // if (isEmpty(signupForm.contactPhone) === true) {
    //   tempError.contactPhone = 'Field required';
    //   validForm = false;
    // }

    // if (validateEmail(signupForm.contactEmail) !== true) {
    //   tempError.contactEmail =
    //     'Please use a valid email address, such as user@example.com.';
    //   validForm = false;
    // }

    console.log('validForm', validForm);
    if (validForm === true) {
      
      // const { data, error } = await supabase.from('team').insert([{
      //   name: signupForm.teamName
      // }]);

      // if (error) {
      //   console.log('error', error);
      //   return;
      // }
      setErrorForm(errorState);
      navigate('/team/details');
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
          <Button onClick={handleSubmit} level={'primary'} fullWidth>
            checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
