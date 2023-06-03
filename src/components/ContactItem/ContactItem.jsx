import React from 'react';
import { Button, Item } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDeleteContact }) => (
  <Item key={contact.id}>
    <span>{contact.name}</span>
    <span>{contact.number}</span>
    <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
  </Item>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
