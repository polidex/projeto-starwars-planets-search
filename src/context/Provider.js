import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [nameFilter, setNameFilter] = useState({ name: '' });
  const [columnFilterList, setColumnFilterList] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [columnFilter, setColumnFilter] = useState(columnFilterList[0]);
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [valueFilterList, setValueFilterList] = useState([]);
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState({});

  const contextValue = {
    planetsList,
    setPlanetsList,
    nameFilter,
    setNameFilter,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    valueFilterList,
    setValueFilterList,
    columnFilterList,
    setColumnFilterList,
    column,
    setColumn,
    sort,
    setSort,
    order,
    setOrder,
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const result = await planets.json();
      await setPlanetsList(result.results);
    };
    fetchPlanets();
  }, []);

  return (
    <main>
      <Context.Provider value={ contextValue }>
        {children}
      </Context.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
