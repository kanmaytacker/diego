import { graphql, navigate, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import * as styles from './details.module.css';

import AccountLayout from '../../components/AccountLayout';
import FormInputField from '../../components/FormInputField';
import Layout from '../../components/Layout/Layout';

import {
  isAuth,
  validateEmail,
  validateStrongPassword,
} from '../../helpers/general';
import Button from '../../components/Button/Button';

const SettingsPage = (props) => {
  if (isAuth() === false) {
    navigate('/login');
  }

  const initialState = {
    teamName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const errorState = {
    teamName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [updateForm, setUpdateForm] = useState(initialState);
  const [error, setError] = useState(errorState);

  const {
    supabaseTeam: { name: teamName },
  } = useStaticQuery(graphql`
    query {
      supabaseTeam {
        name
      }
    }
  `);

  useEffect(() => {
    setUpdateForm({
      ...updateForm,
      teamName: teamName,
    });
  }, [setUpdateForm, teamName]);

  const handleChange = (id, e) => {
    const tempForm = { ...updateForm, [id]: e };
    setUpdateForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorState };

    if (updateForm.email !== '') {
      if (validateEmail(updateForm.email) !== true) {
        validForm = false;
        tempError.email =
          'Please use a valid email address, such as user@example.com.';
      }
    }

    if (updateForm.password !== '') {
      if (validateStrongPassword(updateForm.password) === false) {
        validForm = false;
        tempError.password =
          'Password must have at least 8 characters, 1 lowercase, 1 uppercase and 1 numeric character.';
      }

      if (updateForm.password !== updateForm.confirmPassword) {
        validForm = false;
        tempError.confirmPassword = 'Confirm password not the same.';
      }
    }

    if (validForm === true) {
      //success
      setError(errorState);
      setUpdateForm(initialState);
    } else {
      setError(tempError);
    }
  };

  return (
    <Layout>
      <AccountLayout>
        <h1>Team Details</h1>
        <div>
          <form onSubmit={(e) => handleSubmit(e)} noValidate>
            <div className={styles.nameSection}>
              <FormInputField
                id={'teamName'}
                value={updateForm.teamName}
                handleChange={(id, e) => handleChange(id, e)}
                type={'input'}
                labelName={'Team Name'}
              />
              <FormInputField
                id={'email'}
                value={updateForm.email}
                handleChange={(id, e) => handleChange(id, e)}
                type={'email'}
                labelName={'Email'}
                error={error.email}
              />
              <FormInputField
                id={'firstName'}
                value={updateForm.firstName}
                handleChange={(id, e) => handleChange(id, e)}
                type={'input'}
                labelName={'First Name'}
              />
              <FormInputField
                id={'lastName'}
                value={updateForm.lastName}
                handleChange={(id, e) => handleChange(id, e)}
                type={'input'}
                labelName={'Last Name'}
              />
            </div>{' '}
          </form>
          <Button onClick={() => console.log('Download')} level={'primary'}>
            Save
          </Button>
        </div>
      </AccountLayout>
    </Layout>
  );
};

export default SettingsPage;
