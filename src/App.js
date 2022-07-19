import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';
import SearchInput from './components/SearchInput';
import DropdownFilter from './components/DropdownFilter';
import Filters from './components/Filters';
import RemoveFilters from './components/RemoveFilters';

function App() {
  return (
    <Provider>
      <div>
        <SearchInput />
        <DropdownFilter />
        <Filters />
        <RemoveFilters />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
