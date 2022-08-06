import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { valueFilterList, setValueFilterList, columnFilterList, setColumnFilterList,
  } = useContext(Context);

  const removeFilter = (column) => {
    const newFilters = valueFilterList.filter((filter) => filter.columnFilter !== column);
    setValueFilterList(newFilters);
  };

  const handleClick = (deletedColumn) => {
    removeFilter(deletedColumn);
    setColumnFilterList([...columnFilterList, deletedColumn]);
  };

  return (
    <div>
      {valueFilterList.map((filter) => (
        <div data-testid="filter" key={ filter.columnFilter }>
          <p>
            { filter.columnFilter }
            { filter.comparisonFilter }
            { filter.valueFilter }
          </p>
          <button
            type="button"
            data-testid="button-x"
            onClick={ () => handleClick(filter.columnFilter) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Filters;
