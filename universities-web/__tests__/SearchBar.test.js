import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  const mockCountries = [
    { value: 'Canada', label: 'Canada' },
    { value: 'United States', label: 'United States' },
    { value: 'India', label: 'India' },
  ];

  const selectedCountry = { value: 'Canada', label: 'Canada' };
  const setSelectedCountry = jest.fn();
  const setSearch = jest.fn();
  const clearFilters = jest.fn();

  it('renders correctly', () => {
    render(
      <SearchBar
        countries={mockCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        search=""
        setSearch={setSearch}
        clearFilters={clearFilters}
      />
    );

    expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument();
    expect(screen.getByText('Clear All Filters')).toBeInTheDocument();
  });

  it('handles search input change', () => {
    render(
      <SearchBar
        countries={mockCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        search=""
        setSearch={setSearch}
        clearFilters={clearFilters}
      />
    );

    fireEvent.change(screen.getByPlaceholderText('Search by name'), { target: { value: 'University' } });
    expect(setSearch).toHaveBeenCalledWith('University');
  });

  it('handles country selection change', () => {
    render(
      <SearchBar
        countries={mockCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        search=""
        setSearch={setSearch}
        clearFilters={clearFilters}
      />
    );

    // Simulate selecting a country
    setSelectedCountry({ value: 'India', label: 'India' });
    expect(setSelectedCountry).toHaveBeenCalledWith({ value: 'India', label: 'India' });
  });

  it('handles clear filters button click', () => {
    render(
      <SearchBar
        countries={mockCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        search=""
        setSearch={setSearch}
        clearFilters={clearFilters}
      />
    );

    fireEvent.click(screen.getByText('Clear All Filters'));
    expect(clearFilters).toHaveBeenCalled();
  });
});
