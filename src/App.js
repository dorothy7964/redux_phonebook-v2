import React from 'react';
import Template from './components/Template';
import ContactCreate from './components/ContactCreate';
import ContactSearch from './components/ContactSearch';
import ContactList from './components/ContactList';

const App = (props) => {
  return (
    <div className="App">
      <Template
        create={(
          <ContactCreate />
        )}
        search={(
          <ContactSearch />
        )}
      >
        <ContactList />
      </Template>
    </div>
  )
}

export default App;
