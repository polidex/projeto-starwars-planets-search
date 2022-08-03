import React, { useContext } from 'react';
import Context from '../context/Context';

function OrderFilter() {
  const { column, setColumn, sort, setSort, setOrder } = useContext(Context);

  return (
    <div>
      <label htmlFor="column-sort">
        Choose a column to sort:
        <select
          name="column-sort"
          id="column-sort"
          data-testid="column-sort"
          onClick={ ({ target: { value } }) => setColumn(value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="ASC" data-testid="column-sort-input-asc">
        <input
          type="radio"
          id="ASC"
          name="ASC"
          value="ASC"
          onClick={ ({ target: { value } }) => setSort(value) }
        />
        ASC
      </label>
      <label htmlFor="DESC" data-testid="column-sort-input-desc">
        <input
          type="radio"
          id="DESC"
          name="DESC"
          value="DESC"
          onClick={ ({ target: { value } }) => setSort(value) }
        />
        DESC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setOrder({ column, sort }) }
      >
        Sort
      </button>
    </div>
  );
}

export default OrderFilter;
