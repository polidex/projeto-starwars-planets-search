import React, { useContext } from 'react';
import Context from '../context/Context';

function SearchInput() {
  const { nameFilter, setNameFilter } = useContext(Context);

  const handleChange = ({ target: { value } }) => {
    setNameFilter({ name: value });
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search a planet"
        value={ nameFilter.name }
        onChange={ handleChange }
      />
    </div>
  );
}

export default SearchInput;
