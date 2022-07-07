import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Input } from '../ui';

import { editContact, deleteContact, updateContact } from '../../redux/actions/addressBookAction';
import { setAlert } from '../../redux/actions/commonAction';
import { isContactAvailable } from '../../lib/addressBook';

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

const Contact = (props) => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.addressBook.contactList);

  const [addressData, setAddressData] = useState({
    id: props.contact.id,
    email: props.contact.email,
    firstName: props.contact.firstName,
    lastName: props.contact.lastName,
    phone: props.contact.phone,
    isEditable: props.contact.isEditable || false,
  })

  const handleChange = (name, value) => {
    setAddressData(prev => ({ ...prev, [name]: value }))
  }

  // on updating contact details
  const onUpdate = () => {
    // if contact exist
    if (!isContactAvailable(contactList, addressData)) {
      validationSchemaContact.validate(addressData).then(() => {
        dispatch(updateContact({ ...addressData, isEditable: false }))
        dispatch(setAlert({ message: 'contact updated successfully.' }))
      }).catch((err) => {
        dispatch(setAlert({ message: err.errors[0], color: 'danger' }))
        console.log("err", err.errors);
      })
    } else {
      setTimeout(() => {
        dispatch(setAlert({ message: 'contact is already exist.', color: 'danger' }))
      }, 500);
    }
  }

  // if user click on edit contact than show editing form with update and cancel button.
  if (props.contact.isEditable) {
    return (
      <tr>
        <td>{props.index}</td>
        <td>
          <Input
            className="m-0"
            type="text"
            name="firstName"
            placeholder='Enter first name'
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={addressData.firstName}
          />
        </td>
        <td>
          <Input
            className="m-0"
            type="text"
            name="lastName"
            placeholder='Enter last name'
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={addressData.lastName}
          />
        </td>
        <td>
          <Input
            className="m-0"
            type="email"
            name="email"
            placeholder='Enter email'
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={addressData.email}
          />
        </td>
        <td>
          <Input
            className="m-0"
            type="text"
            name="phone"
            minLength="10"
            maxLength="10"
            placeholder='Enter phone number'
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={addressData.phone}
          />
        </td>
        <td className="d-flex justify-content-around">
          <button
            className="btn btn-primary me-2"
            onClick={onUpdate}
          >
            Update
          </button>
          <button
            className="btn btn-danger ms-2"
            onClick={() =>
              dispatch(editContact({ id: props.contact.id }))
            }
          >
            Cancel
          </button>
        </td>
      </tr>
    )
  }
  // show contact data with edit and delete button.
  else {
    return (
      <tr>
        <td className="text-center">{props.index}</td>
        <td className="text-center">{props.contact.firstName}</td>
        <td className="text-center">{props.contact.lastName}</td>
        <td className="text-center">{props.contact.email}</td>
        <td className="text-center">{props.contact.phone}</td>
        <td className="d-flex justify-content-around">
          <button
            className="btn btn-primary me-2"
            onClick={() =>
              dispatch(editContact({ id: props.contact.id }))
            }
          >
            Edit
          </button>
          <button
            className="btn btn-danger ms-2"
            onClick={() => {
              dispatch(deleteContact({ id: props.contact.id }))
              dispatch(setAlert({ message: 'contact deleted successfully.' }))
            }
            }
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Contact