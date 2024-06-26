import React from 'react';
import Select from 'react-select';

const SearchBar = ({ countries, selectedCountry, setSelectedCountry, search, setSearch, clearFilters }) => (
  <div className="flex flex-col md:flex-row items-center mb-4 w-full">
    <Select
      className="w-full md:w-1/3 mb-2 md:mb-0"
      options={countries}
      value={selectedCountry}
      onChange={setSelectedCountry}
      styles={{
        control: (base) => ({
          ...base,
          borderColor: '#9A6735',
          borderRadius: '0.75rem',
          '&:hover': { borderColor: '#1d6c43' },
        }),
        indicatorsContainer: (base) => ({
          ...base,
          padding: '2px', 
        }),
      }}
    />
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by name"
      className="w-full md:w-1/3 ml-0 md:ml-4 mb-2 md:mb-0 p-2 border border-secondary rounded-xl  focus:border-primary"
    />
    <button
      onClick={clearFilters}
      className="w-full md:w-auto ml-0 md:ml-4 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl "
    >
      Clear All Filters
    </button>
  </div>
);

export default SearchBar;
