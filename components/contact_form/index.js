// third party packages
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

// components
import { ContactForm, Grid, GridItem } from '../AddressBook.style';
import { Text16, Input, Button } from '../ui';
import { Field } from '../Login.style';

//enums|functions|actions
import { addContact } from '../../redux/actions/addressBookAction';
import { setAlert } from '../../redux/actions/commonAction';
import { isContactAvailable } from '../../lib/addressBook';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

// contact validation schema
const validationSchemaContact = Yup.object().shape({
  firstName: Yup.string().required('First name is required.'),
  lastName: Yup.string().required('Last name is required.'),
  email: Yup.string().email('Please enter valid email.').required('Email is required.'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(9, 'Minimum 10 digits is required')
    .max(11, 'Maximum 10 digits allowed'),
})

const ContactFormComponent = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.addressBook.contactList);

  const onSubmit = (values, setSubmitting, resetForm) => {
    // check contact is already exist in the address book or not.
    if (!isContactAvailable(contactList, values)) {
      setTimeout(() => {
        dispatch(addContact({ ...values, id: new Date().toISOString() }))
        dispatch(setAlert({ message: 'contact added successfully.' }))
        setSubmitting(false);
        resetForm({ values: initialValues });
      }, 500);
    } else {
      setTimeout(() => {
        dispatch(setAlert({ message: 'contact is already exist.', color: 'danger' }))
        setSubmitting(false);
      }, 500);
    }

  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaContact}
      validateOnChange
      validateOnBlur
      onSubmit={(values, { resetForm, setSubmitting }) => {
        onSubmit(values, setSubmitting, resetForm);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <ContactForm onSubmit={handleSubmit}>
          <Grid>
            <GridItem>
              <Field>
                <Text16 className="pv-5">First Name</Text16>
                <Input
                  type="text"
                  name="firstName"
                  placeholder='Enter first name'
                  onChange={handleChange}
                  value={values.firstName}
                />
                {errors.firstName && touched.firstName && errors.firstName}
              </Field>
            </GridItem>

            <GridItem>
              <Field>
                <Text16 className="pv-5">Last Name</Text16>
                <Input
                  type="text"
                  name="lastName"
                  placeholder='Enter last name'
                  onChange={handleChange}
                  value={values.lastName}
                />
                {errors.lastName && touched.lastName && errors.lastName}
              </Field>
            </GridItem>
          </Grid>

          <Grid>
            <GridItem>
              <Field>
                <Text16 className="pv-5">Email</Text16>
                <Input
                  type="email"
                  name="email"
                  placeholder='Enter email'
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </Field>
            </GridItem>

            <GridItem>
              <Field>
                <Text16 className="pv-5">Phone Number</Text16>
                <Input
                  type="text"
                  name="phone"
                  minLength="10"
                  maxLength="10"
                  placeholder='Enter phone number'
                  onChange={handleChange}
                  value={values.phone}
                />
                {errors.phone && touched.phone && errors.phone}
              </Field>
            </GridItem>
          </Grid>

          <div className='d-flex justify-content-end'>

            <Field className='right-20'>
              <Button type="submit" disabled={isSubmitting}>
                Save
              </Button>
            </Field>
          </div>
        </ContactForm>
      )}
    </Formik>
  )
}

export default ContactFormComponent;