import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { planetsList, nameFilter, valueFilterList } = useContext(Context);

  function searchFilter() {
    return planetsList.filter(({ name }) => name.includes(nameFilter.name));
  }

  const applyFilter = ({ columnFilter, comparisonFilter, valueFilter }, array) => {
    switch (comparisonFilter) {
    case 'maior que':
      return array.filter((item) => Number(item[columnFilter]) > Number(valueFilter));
    case 'menor que':
      return array.filter((item) => Number(item[columnFilter]) < Number(valueFilter));
    case 'igual a':
      return array.filter((item) => Number(item[columnFilter]) === Number(valueFilter));
    default:
      return array;
    }
  };

  const dropdownFilter = (data) => {
    let dataFilter = data;
    valueFilterList.forEach((item) => {
      dataFilter = applyFilter(item, dataFilter);
    });
    return dataFilter;
  };

  return (
    <div>
      <table>
        <thead>
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
          {dropdownFilter(searchFilter()).map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
