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

  it('Testa a requisição à API', async () => {
     
    expect(fetch).toBeCalled();

  });

  it('Testa o filtro de nome', async () => {
    const inputName = screen.getByTestId('name-filter');
    const planets = screen.findAllByTestId('planet-name');

    userEvent.click(inputName, 'o')
    expect(planets).toHaveLength(7)
    console.log(planets)
  });

  

});
