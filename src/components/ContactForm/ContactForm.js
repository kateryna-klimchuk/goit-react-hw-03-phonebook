import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import styled from 'styled-components';


const Form = styled.form`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 30px 40px;
  font-size: 20px;
  background-color: rgb(249, 248, 247);
`;

const Input = styled.input`
  padding: 12px;
  outline: none;
  border: 1px solid rgb(128, 121, 121);
  border-radius: 5px;
`;

const Label = styled.label`
  margin: 0;
  padding: 20px;
  font-size: 30px;
`;

const FormButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    color: rgb(78, 111, 111);
    background-color: rgb(201, 197, 197);
    transition: background-color 250ms linear, color 250ms linear;

    &:hover {
    background-color: rgb(118, 125, 123);
    color: rgb(219, 212, 212);
    }
`;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    };
    
    nameInputId = nanoid();
    numberInputId = nanoid();
    
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
    render() {
        const { handleSubmitForm, nameInputId, handleInputChange, numberInputId } = this;
    return (
      <Form onSubmit={handleSubmitForm}>
        <Label htmlFor={nameInputId}>Name</Label>

        <Input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          id={nameInputId}
        />
        <Label htmlFor={numberInputId}>Number</Label>
        <Input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          id={numberInputId}
        />
        <FormButton type="submit">
          Add Contact
        </FormButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
