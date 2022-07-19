import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function DropdownFilter() {
  const { columnFilter, setColumnFilter, comparisonFilter, setComparisonFilter,
    valueFilter, setValueFilter, valueFilterList, setValueFilterList, columnFilterList,
    setColumnFilterList,
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

  useEffect(() => {
    const filterColumn = (filter, list) => (
      list.filter((item) => item !== filter.columnFilter)
    );

    let addColumn = columnFilterList;
    valueFilterList.forEach((filter) => {
      addColumn = filterColumn(filter, addColumn);
    });
    setColumnFilterList(addColumn);
  }, [valueFilterList]);

  return (
    <div>
      <label htmlFor="column-filter">
        Choose a column:
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          value={ columnFilter }
          onClick={ handleColumnFilter }
        >
          {columnFilterList
            .map((item) => (
              <option
                key={ item }
              >
                {item}
              </option>))}
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
