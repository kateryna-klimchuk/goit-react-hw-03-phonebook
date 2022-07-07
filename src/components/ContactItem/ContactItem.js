import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid grey;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 1px 2px 2px 2px rgb(196, 179, 179);
    font-size: 20px;
    background-color: rgb(249, 248, 247);

    transition: transform 250ms linear;
&:hover{
    transform: scale(1.1);
}
`;

const Button = styled.button`
  padding: 2px 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: rgb(78, 111, 111);
  background-color: rgb(201, 197, 197);
  transition: background-color 250ms linear, color 250ms linear;

&:hover {
    background-color: rgb(118, 125, 123);
    color: rgb(219, 212, 212);
}
`;

const ContactItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <span>
          {name}: {number}
        </span>
        <Button
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          x
        </Button>
      </Item>
    );
  });
};

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactItem;
