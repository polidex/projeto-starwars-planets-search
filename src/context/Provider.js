import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [nameFilter, setNameFilter] = useState({ name: '' });
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [valueFilterList, setValueFilterList] = useState([]);

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
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((result) => result.json());
      setPlanetsList(results);
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
