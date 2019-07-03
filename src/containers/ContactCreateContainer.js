import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create } from '../store/modules/contact';
import ContactCreate from '../components/ContactCreate';
class ContactCreateContainer extends Component {
  state = {
    name : '',
    phone : '',
    message : '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleMessage = (message) => {
    this.setState({ message });
  }

  handleClick = () => {
    const { name, phone } = this.state;
    const { create } = this.props;

    if(name === ''){
      return this.handleMessage('**이름 미입력');
    }else if (phone === '') {
      return this.handleMessage('**번호 미입력');
    }

    const contact = { name, phone };
    create(contact);
    this.setState({
      name : '',
      phone : '',
      message : '',
    });
  }

  handleKeyPress = e => {
    if(e.charCode === 13){
      this.handleClick();
    }
  }

  render() {
    return(
      <ContactCreate
        name={this.state.name}
        phone={this.state.phone}
        message={this.state.message}
        onChange={this.handleChange}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

const mapStateToProps = ({ contact }) => ({
  list : contact.list,
})

const mapDispatchToProps = { create }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactCreateContainer);
