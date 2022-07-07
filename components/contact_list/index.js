import React from 'react'
import { Table } from "reactstrap";

import Contact from '../contact';

const ContactList = ({ header, data }) => {
  return (
    <Table bordered className='mb-0'>
      <thead>
        <tr>
          {
            (header && header.length > 0 && data && data.length > 0) &&
            header.map((item, index) =>
              <th
                key={`${item.title}-${index}`}
                className="text-center">
                {item.title}
              </th>
            )
          }
        </tr>
      </thead>

      <tbody>
        {(data && data.length > 0) &&
          data.map((contact, index) =>
            <Contact
              key={contact.id}
              contact={contact}
              index={index + 1}
            />
          )
        }
      </tbody>
    </Table>
  )
}

export default ContactList