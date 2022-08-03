import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { planetsList, nameFilter, valueFilterList, order } = useContext(Context);

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

  const applySort = ({ column, sort }) => {
    if (sort === 'ASC') {
      return planetsList.sort((a, b) => {
        const A = a[column] === 'unknown' ? Number.POSITIVE_INFINITY : a[column];
        const B = b[column] === 'unknown' ? Number.POSITIVE_INFINITY : b[column];
        return A - B;
      });
    }
    if (sort === 'DESC') {
      return planetsList.sort((a, b) => {
        const A = a[column] === 'unknown' ? null : a[column];
        const B = b[column] === 'unknown' ? null : b[column];
        return B - A;
      });
    }
  };

  function sortPlanetsName(a, b) {
    const negativeNum = -1;
    const positiveNum = 1;
    if (a.name < b.name) {
      return negativeNum;
    }
    if (a.name > b.name) {
      return positiveNum;
    }
    return 0;
  }

  function searchFilter(param) {
    const newList = planetsList.sort(sortPlanetsName);
    if (param) {
      applySort(order);
    }
    return newList.filter(({ name }) => name.includes(nameFilter.name));
  }

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
          {planetsList?.length && dropdownFilter(searchFilter(true))
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
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
