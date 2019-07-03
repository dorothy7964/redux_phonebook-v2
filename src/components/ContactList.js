import React from 'react';
import '../css/ContactList.css';

/* ContactItem */
const ContactItem = ({
  stateName, statePhone,    // state : ContactListContainers
  id, name, phone, entered, // props
  onChange, onToggle, onRemove,
}) => {
  const contactInfo = (
    <div className="contact">
      <div className="name">{name}</div>
      <div className="phone">{phone}</div>
    </div>
  );

  const contactEdit = (
    <div className="edits">
      <input
        name="name"
        placeholder="name"
        value={stateName}
        onChange={onChange}
      />
      <input
        name="phone"
        placeholder="phone"
        value={statePhone}
        onChange={onChange}
      />
    </div>
  );

  const view = entered? contactEdit : contactInfo;
  return (
    <li>
      {view}
      <div className="buttons">
        <button onClick={onToggle}>{entered? 'OK':'Edit'}</button>
        <button onClick={onRemove}>Remove</button>
      </div>
    </li>
  );
};


/* ContactList */
const ContactList = ({
  stateName, statePhone,  // state : ContactListContainers
  input, contactList,     // props
  onChange, onToggle, onRemove,
}) => {
  const mapToComponents = (data) => {
    data.sort((a,b) => {
      return a.name < b.name? -1 : 1;
    });
    data = data.filter((contact) => {
      return contact.name.toLowerCase()
      .indexOf(input.toLowerCase()) > -1;
    });
    return data.map((contact) => (
      <ContactItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        phone={contact.phone}
        entered={contact.entered}
        stateName={stateName}
        statePhone={statePhone}
        onChange={onChange}
        onToggle={() => onToggle(contact.id, contact.name, contact.phone, contact.entered)}
        onRemove={() => onRemove(contact.id)}
      />
    ));
  }

  return (
    <div className="ContactList">
      <ul>{mapToComponents(contactList)}</ul>
    </div>
  )
}

export default ContactList;
