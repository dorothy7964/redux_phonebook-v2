import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInput } from '../store/modules/contact';
import ContactSearch from '../components/ContactSearch';

class ContactSearchContainer extends Component {
  handleChange = (e) => {
    const { changeInput } = this.props;
    changeInput(e.target.value);
  }

  render() {
    const { input } = this.props;
    return(
      <ContactSearch
        input={input}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = ({ contact }) => ({
  input : contact.input,
})

const mapDispatchToProps = { changeInput }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactSearchContainer);
