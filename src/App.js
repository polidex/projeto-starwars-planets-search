import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <Provider>
      <div>
        <SearchInput />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
