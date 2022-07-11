import React from 'react';
import StarsWarsContext from '../context/StarWarsContext';

function Table() {
  return (
    <StarsWarsContext.Consumer>
      {(planetsList) => (
        <table>
          <thead>
            {planetsList.map((planet) => console.log(planet))}
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrein</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {planetsList.map((planet) => (
              <tr key={ planet.name }>
                <td>{Object.values(planet.name)}</td>
                <td>{Object.values(planet.rotation_period)}</td>
                <td>{Object.values(planet.orbital_period)}</td>
                <td>{Object.values(planet.diameter)}</td>
                <td>{Object.values(planet.climate)}</td>
                <td>{Object.values(planet.gravity)}</td>
                <td>{Object.values(planet.terrain)}</td>
                <td>{Object.values(planet.surface_water)}</td>
                <td>{Object.values(planet.population)}</td>
                <td>{Object.values(planet.films)}</td>
                <td>{Object.values(planet.created)}</td>
                <td>{Object.values(planet.edited)}</td>
                <td>{Object.values(planet.url)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </StarsWarsContext.Consumer>
  );
}

export default Table;
