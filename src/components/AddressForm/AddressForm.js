import React, { useState } from 'react';
import * as styles from './AddressForm.module.css';

import Button from '../Button';
import FormInputField from '../FormInputField';
import Checkbox from '../Checkbox/Checkbox';

const AddressForm = (props) => {
  const { closeForm } = props;

  const initialState = {
    name: '',
    isCaptain: false,
    isViceCaptain: false,
    email: '',
  };

  const errorState = {
    name: '',
    isCaptain: false,
    isViceCaptain: false,
    email: '',
  };

  const [form, setForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState(errorState);

  const handleChange = (id, e) => {
    const tempForm = { ...form, [id]: e };
    setForm(tempForm);
  };

  const setCaptain = (e) => {
    const tempForm = { ...form, isCaptain: e };
    setForm(tempForm);
  };

  const setViceCaptain = (e) => {
    const tempForm = { ...form, isViceCaptain: e };
    setForm(tempForm);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm(errorState);
    closeForm();
  };

  return (
    <div className={styles.root}>
      <form className={styles.inputContainer} onSubmit={(e) => handleSubmit(e)}>
        <FormInputField
          id={'name'}
          value={form.name}
          handleChange={(id, e) => handleChange(id, e)}
          type={'input'}
          labelName={'Name'}
          error={errorForm.name}
        />
        <FormInputField
          id={'email'}
          value={form.email}
          handleChange={(id, e) => handleChange(id, e)}
          type={'email'}
          labelName={'Email'}
          error={errorForm.email}
        />
        <Checkbox
          action={(e) => setCaptain(e)}
          label="Captain"
          value={form.isCaptain}
          isChecked={form.isCaptain}
        />
        <Checkbox
          action={(e) => setViceCaptain(e)}
          label="Vice Captain"
          value={form.isViceCaptain}
          isChecked={form.isViceCaptain}
        />
        <div className={styles.actionContainers}>
          <Button fullWidth type={'submit'} level={'primary'}>
            Save
          </Button>
          <Button
            fullWidth
            type={'button'}
            onClick={closeForm}
            level={'secondary'}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
