import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa toda a aplicação', () => {
  it('Testa a requisição à API', () => {
    render(<App />);
  
    // expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('Verifica se a tabela tem 13 colunas', () => {
    render(<App />);
    const columnList = screen.getByTestId('test-id');
    // expect(columnList.children.length).toBe(13)
    console.log(columnList)
  });
});
