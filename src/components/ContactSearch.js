import React from 'react';
import '../css/ContactSearch.css';

const ContactSearch = (props) => {
  return (
    <div className="ContactSearch">
      <input
        name='keyword'
        placeholder='Search'
      />
    </div>
  )
}

export default ContactSearch;
