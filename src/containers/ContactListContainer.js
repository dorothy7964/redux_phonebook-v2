import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactgActions from '../store/modules/contact';
import ContactList from '../components/ContactList';

class ContactListContainer extends Component {
  state = {
    name : '',
    phone : '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleToggle = (id, name, phone, entered) => {
    const { ContactgActions } = this.props;
    ContactgActions.toggle(id);
    if(!entered){
      this.setState({ name, phone });
    }else {
      this.handleEdit(id,this.state);
    }
  }

  handleEdit = (id,text) => {
    const { ContactgActions } = this.props;
    ContactgActions.edit(id,text);
  }

  handleRemove = (id) => {
    const { ContactgActions } = this.props;
    ContactgActions.remove(id);
  }

  render() {
    const { name, phone } = this.state;
    const { input, list } = this.props;
    return(
      <ContactList
        stateName={name}
        statePhone={phone}
        input={input}
        contactList={list}
        onChange={this.handleChange}
        onToggle={this.handleToggle}
        onRemove={this.handleRemove}
      />
    );
  }
}

const mapStateToProps = ({ contact }) => ({
  input : contact.input,
  list : contact.list,
})

const mapDispatchToProps = dispatch => ({
  ContactgActions : bindActionCreators(contactgActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactListContainer);
