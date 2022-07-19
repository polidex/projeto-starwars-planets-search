import React, { useContext } from 'react';
import Context from '../context/Context';

function RemoveFilters() {
  const { setValueFilterList, setColumnFilterList } = useContext(Context);

  const handleClick = () => {
    setValueFilterList([]);
    setColumnFilterList(['population', 'orbital_period', 'diameter', 'rotation_period',
      'surface_water']);
  };

  return (
    <div>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => handleClick() }
      >
        Remove Filters
      </button>
    </div>
  );
}

export default RemoveFilters;
