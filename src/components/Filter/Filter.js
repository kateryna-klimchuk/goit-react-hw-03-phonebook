import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterDiv = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 10px 40px;
  font-size: 20px;
`;

const Label = styled.label`
  margin: 0;
  padding: 20px;
  font-size: 30px;
`;

const Input = styled.input`
  padding: 12px;
  outline: none;
  border: 1px solid rgb(128, 121, 121);
  border-radius: 5px;
`;

const Filter = ({filter, onFilterSearch}) => {
    return (
      <FilterDiv>
        <Label>Find contacts by name</Label>
        <Input
          type="text"
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onFilterSearch}
        />
      </FilterDiv>
    );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterSearch: PropTypes.func.isRequired,
};


export default Filter;