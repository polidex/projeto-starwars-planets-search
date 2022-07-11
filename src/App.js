import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import './App.css';
import StarsWarsContext from './context/StarWarsContext';

function App() {
  const [planetsList, setPlanetsList] = useState([]);

  const fetchPlanets = () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((result) => result.json())
      .then((planets) => setPlanetsList(planets.results));
  };

  useEffect(fetchPlanets, []);

  return (
    <StarsWarsContext.Provider value={ planetsList }>
      <div>
        <Table />
        {/* <button type="button" onClick={ () => console.log('oi!') }> Teste </button> */}
      </div>
    </StarsWarsContext.Provider>
  );
}

export default App;
