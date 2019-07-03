import React from 'react';
import '../css/ContactCreate.css';

const ContactCreate = (props) => {
  return (
    <div className="ContactCreate">
      <input
        name="name"
        placeholder="name"
      />
      <input
        name="phone"
        placeholder="phone"
      />
      <button>Add Contact</button>
    </div>
  )
}

export default ContactCreate;
