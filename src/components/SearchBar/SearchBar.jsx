import PropTypes from 'prop-types';
import { useState } from 'react';
import  { toast } from 'react-toastify';


const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = evt => {
    setSearch(evt?.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (search.trim() === '') {
      toast.info('Enter movie`s name');
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleChange}
        />
        <button type="submit" disabled={!search}>Search</button>
      </form>
    </>
  );
};

SearchBar.propTypes ={
  onSubmit: PropTypes.func.isRequired
}

export default SearchBar;
