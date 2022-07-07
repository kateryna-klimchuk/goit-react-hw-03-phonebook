import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem/index';
import styled from 'styled-components';

const List = styled.ul`
  min-width: 350px;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;