import React from 'react';
import Template from './components/Template';
import ContactCreateContainer from './containers/ContactCreateContainer';
import ContactSearchContainer from './containers/ContactSearchContainer';
import ContactListContainer from './containers/ContactListContainer';

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
        <ContactListContainer />
      </Template>
    </div>
  )
}

export default App;
