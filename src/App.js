import React from 'react';
import Template from './components/Template';
import ContactCreateContainer from './containers/ContactCreateContainer';
import ContactSearchContainer from './containers/ContactSearchContainer';
import ContactList from './components/ContactList';

const App = (props) => {
  return (
    <div className="App">
      <Template
        create={(
          <ContactCreateContainer />
        )}
        search={(
          <ContactSearchContainer />
        )}
      >
        <ContactList />
      </Template>
    </div>
  )
}

export default App;
