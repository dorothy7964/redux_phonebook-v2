import React from 'react';
import '../css/ContactCreate.css';

const ContactCreate = ({
  name, phone, message,
  onChange, onClick, onKeyPress
}) => {
  return (
    <div className="ContactCreate">
      <input
        name="name"
        placeholder="name"
        value={name}
        onChange={onChange}
      />
      <input
        name="phone"
        placeholder="phone"
        value={phone}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <span>{message}</span>
      <button onClick={onClick}>Add Contact</button>
    </div>
  )
}

export default ContactCreate;
