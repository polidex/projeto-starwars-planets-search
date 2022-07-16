import React from 'react';
import PropTypes from 'prop-types';

function Filters(props) {
  const { setNameFilter } = props;
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ setNameFilter }
        placeholder="Search a planet"
      />
    </div>
  );
}

Filters.propTypes = {
  setNameFilter: PropTypes.func.isRequired,
};

export default Filters;
