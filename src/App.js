import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Search a planet"
        />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
