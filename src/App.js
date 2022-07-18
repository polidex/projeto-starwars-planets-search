import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';
import SearchInput from './components/SearchInput';
import DropdownFilter from './components/DropdownFilter';

function App() {
  return (
    <Provider>
      <div>
        <SearchInput />
        <DropdownFilter />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
