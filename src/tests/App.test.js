import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import mockedPlanets from './mocks/mocks';
import { act } from 'react-dom/test-utils';

describe('Testa toda a aplicação', () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() => Promise.resolve(({
    json: () => Promise.resolve(mockedPlanets)
    })))
    
    await act(async () => {
    render(<App />);
    });
    })
    
    afterEach(() => {
    jest.clearAllMocks();
    cleanup();
    }) 

  it('Testa a requisição à API', () => {
     
    expect(fetch).toBeCalled();

  });

  it('Testa o componente "SearchInput"', () => {
    const inputName = screen.getByTestId('name-filter');
    const planets = screen.queryAllByTestId('planet-name');
    expect(planets).toHaveLength(10);
    
    userEvent.type(inputName, 'o');
    expect(screen.queryAllByTestId('planet-name')).toHaveLength(7);

    userEvent.clear(inputName)
    userEvent.type(inputName, 'oo');
    expect(screen.queryAllByTestId('planet-name')).toHaveLength(2);
  });
  
  it('Testa o componente "DropdownFilter"', () => {
    const selectColumn = screen.getByTestId('column-filter');
    const selectComprarison = screen.getByTestId('comparison-filter');
    const inputValue = screen.getByTestId('value-filter');
    const btnFilter = screen.getByTestId('button-filter');

    const planets = screen.queryAllByTestId('planet-name');
    expect(planets).toHaveLength(10);
    
    userEvent.selectOptions(selectColumn, 'diameter');
    userEvent.selectOptions(selectComprarison, 'maior que');
    userEvent.type(inputValue, '7200');
    userEvent.click(btnFilter);
    
    expect(screen.queryAllByTestId('planet-name')).toHaveLength(7); //arrumar
  });
  
  it('Testa o componente "Filters"', () => {
    const selectColumn = screen.getByTestId('column-filter');
    const selectComprarison = screen.getByTestId('comparison-filter');
    const inputValue = screen.getByTestId('value-filter');
    const btnFilter = screen.getByTestId('button-filter');
    
    userEvent.selectOptions(selectColumn, 'population');
    userEvent.selectOptions(selectComprarison, 'igual a');
    expect(screen.getByText('igual a')).toBeInTheDocument()
    userEvent.type(inputValue, '200000');
    userEvent.click(btnFilter);

    const filter = screen.getByTestId('filter');
    const btnX = screen.getByTestId('button-x');

    expect(filter).toBeInTheDocument();
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    expect(screen.queryAllByTestId('planet-name')).toHaveLength(1);
    userEvent.click(btnX);
    expect(filter).not.toBeInTheDocument();
  });

  it('Testa o componente "RemoveFilters"', () => {
    const selectColumn = screen.getByTestId('column-filter');
    const selectComprarison = screen.getByTestId('comparison-filter');
    const inputValue = screen.getByTestId('value-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const btnRemoveFilters = screen.getByTestId('button-remove-filters');
    
    userEvent.selectOptions(selectColumn, 'diameter');
    userEvent.selectOptions(selectComprarison, 'maior que');
    userEvent.type(inputValue, '10000');
    userEvent.click(btnFilter);
    userEvent.selectOptions(selectColumn, 'orbital_period');
    userEvent.selectOptions(selectComprarison, 'menor que');
    userEvent.type(inputValue, '4500');
    userEvent.click(btnFilter);
        
    expect(screen.getAllByTestId('filter')).toHaveLength(2)
    
    userEvent.click(btnRemoveFilters);
    const planets = screen.queryAllByTestId('planet-name');
    expect(planets).toHaveLength(10);
  });

  it('Testa o componente "OrderFilter"', () => {
    const selectColumn = screen.getByTestId('column-sort');
    const radioASC = screen.getByTestId('column-sort-input-asc');
    const radioDESC = screen.getByTestId('column-sort-input-desc');
    const btnSort = screen.getByTestId('column-sort-button');
    
    userEvent.selectOptions(selectColumn, 'rotation_period');
    userEvent.click(radioASC);
    userEvent.click(btnSort);

    userEvent.selectOptions(selectColumn, 'rotation_period');
    userEvent.click(radioDESC);
    userEvent.click(btnSort);

  });

  it('Testa o componente "Table"', () => {
    const selectColumn = screen.getByTestId('column-sort');
    const radioASC = screen.getByTestId('column-sort-input-asc');
    const radioDESC = screen.getByTestId('column-sort-input-desc');
    const btnSort = screen.getByTestId('column-sort-button');
    const expectedPlanets = ['Alderaan', 'Bespin', 'Coruscant', 'Dagobah', 'Endor',
    'Hoth', 'Kamino', 'Naboo', 'Tatooine', 'Yavin IV'];
    const diameterDESC = ['Bespin', 'Kamino', 'Alderaan', 'Coruscant', 'Naboo',
    'Tatooine', 'Yavin IV', 'Dagobah', 'Hoth', 'Endor'];
    const populationASC = ['Yavin IV', 'Tatooine', 'Bespin', 'Endor', 'Kamino',
    'Alderaan', 'Naboo', 'Coruscant'];
    const populationDESC = ['Coruscant', 'Naboo', 'Alderaan', 'Kamino', 'Endor',
    'Bespin', 'Tatooine', 'Yavin IV'];
    const expectedPlanetsWithUnknownValues = ['Dagobah', 'Hoth'];
    
    screen.getAllByTestId('planet-name').forEach((planet, index) => {
      expect(planet.innerHTML).toBe(expectedPlanets[index]);
    });

    userEvent.selectOptions(selectColumn, 'diameter');
    userEvent.click(radioDESC);
    userEvent.click(btnSort);

    screen.getAllByTestId('planet-name').forEach((planet, index) => {
      expect(planet.innerHTML).toBe(diameterDESC[index]);
    });

    userEvent.selectOptions(selectColumn, 'population');
    userEvent.click(radioASC);
    userEvent.click(btnSort);

    screen.getAllByTestId('planet-name').forEach((planet, index) => {
      if (populationASC[index]) {
        expect(planet.innerHTML).toBe(populationASC[index]);
      } else {
        expect(planet.value).toBe(expectedPlanetsWithUnknownValues[index]);
      }
    });

    userEvent.selectOptions(selectColumn, 'population');
    userEvent.click(radioDESC);
    userEvent.click(btnSort);

    screen.getAllByTestId('planet-name').forEach((planet, index) => {
      if (populationDESC[index]) {
        expect(planet.innerHTML).toBe(populationDESC[index]);
      } else {
        expect(planet.value).toBe(expectedPlanetsWithUnknownValues[index]);
      }
    });
  });


});


