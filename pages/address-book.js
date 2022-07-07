// third party component
import React from 'react'
import { useSelector } from 'react-redux';

// components
import Layout from '../components/layout';
import ContactForm from '../components/contact_form';
import ContactList from '../components/contact_list';

// css|styled components
import { H2 } from '../components/ui';
import styles from '../styles/AddressBook.module.css';
import Head from '../components/Head';

// header list of contact list table
const header = [
  { title: '#' },
  { title: 'First Name' },
  { title: 'Last Name' },
  { title: 'Email' },
  { title: 'Mobile No	' },
  { title: 'Action' },
]
const AddressBook = () => {
  const contactList = useSelector(state => state.addressBook.contactList);

  return (
    <div className='container'>
      <Head
        title={`Address Book | Add contact`}
        description={`Add contact to Address Book`}
      />
      <main className={`${styles.main} mx-auto`}>
        <H2>
          Add Contact
        </H2>

        <div className='contact-form'>
          <ContactForm />
        </div>

        <div className={styles.address_book_table}>
          <ContactList header={header} data={contactList} />
        </div>
      </main>
    </div>
  )
}

export default AddressBook;

AddressBook.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

