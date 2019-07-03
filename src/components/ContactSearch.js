import React from 'react';
import '../css/ContactSearch.css';

const ContactSearch = ({ input, onChange }) => {
  return (
    <div className="ContactSearch">
      <input
        name='keyword'
        placeholder='Search'
        value={input}
        onChange={onChange}
      />
    </div>
  )
}

export default ContactSearch;
