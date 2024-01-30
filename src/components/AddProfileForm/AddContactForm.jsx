import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import css from './AddContactForm.module.css';
import { addContacts } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
    initialValues={{ name: '', phone: '' }}
    onSubmit={({ name, phone }, actions) => {
      const existContact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (existContact) {
        alert(`${name} is already in contacts`);
      } else {
        dispatch(addContacts({ name, phone }));
        actions.resetForm();
      }
    }}
  >
    <Form className={css.form}>
      <label className={css.label}>
        <span>Name: </span>
        <Field
          type="text"
          placeholder="Name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>

      <label className={css.label}>
        <span>Number: </span>
        <Field
          type="tel"
          placeholder="111-11-11"
          name="phone"
          title="Number may contain only numbers and dashes. For example 111-11-11"
          required
        />
      </label>
      <button className={css.submit} type="submit">
        Add New Profile
      </button>
    </Form>
  </Formik>

  );
};
