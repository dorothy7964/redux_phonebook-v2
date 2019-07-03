import React from 'react';
import '../css/ContactList.css';

const ContactList = (props) => {
  return (
    <div className="ContactList">
      <ul>
        <li>
          <div className="contact">
            <div className="name">name</div>
            <div className="phone">phone</div>
          </div>
          <div className="buttons">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </li>
        <li>
          <div className="contact">
            <div className="name">name</div>
            <div className="phone">phone</div>
          </div>
          <div className="buttons">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </li>
        <li>
          <div className="contact">
            <div className="name">name</div>
            <div className="phone">phone</div>
          </div>
          <div className="buttons">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ContactList;
