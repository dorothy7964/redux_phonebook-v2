import React from 'react';
import '../css/Template.css';

const Template = ({ create, search, children }) => {
  return (
    <main className="Template">
      <div className="title">PhonBook</div>

      <div className="ContactWrapper">
        <span className="left">
          <section className="ContactCreate-wrapper">
            {create}
          </section>
        </span>

        <span className="right">
          <section className="ContactSearch-wrapper">
            {search}
          </section>
          <section className="ContactList-wrapper">
            {children}
          </section>
        </span>
      </div>
    </main>
  )
}

export default Template;
