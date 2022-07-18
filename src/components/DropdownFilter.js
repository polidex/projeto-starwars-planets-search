import React, { useContext } from 'react';
import Context from '../context/Context';

function DropdownFilter() {
  const { columnFilter, setColumnFilter, comparisonFilter, setComparisonFilter,
    valueFilter, setValueFilter, valueFilterList, setValueFilterList,
  } = useContext(Context);

  const handleColumnFilter = ({ target: { value } }) => {
    setColumnFilter(value);
  };

  const handleComparisonFilter = ({ target: { value } }) => {
    setComparisonFilter(value);
  };

  const handleValueFilter = ({ target: { value } }) => {
    setValueFilter(value);
  };

  const handleClick = (event) => {
    setValueFilterList([...valueFilterList, event]);
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Choose a column:
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          value={ columnFilter }
          onChange={ handleColumnFilter }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Choose a comparison:
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparisonFilter }
          onChange={ handleComparisonFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        placeholder="Type a value"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ handleValueFilter }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick({ columnFilter, comparisonFilter, valueFilter }) }
      >
        Filter
      </button>
    </div>
  );
}

export default DropdownFilter;
