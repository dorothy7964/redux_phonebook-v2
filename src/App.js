import React from 'react';
import Template from './components/Template';
import ContactCreateContainer from './containers/ContactCreateContainer';
import ContactSearch from './components/ContactSearch';
import ContactList from './components/ContactList';

const App = (props) => {
  return (
    <div className="App">
      <Template
        create={(
          <ContactCreateContainer />
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
