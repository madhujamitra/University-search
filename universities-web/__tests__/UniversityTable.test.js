import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UniversityTable from '../components/UniversityTable';

describe('UniversityTable', () => {
  const mockUniversities = [
    { name: 'University A', 'state-province': 'State A', web_pages: ['http://example.com/a'] },
    { name: 'University B', 'state-province': 'State B', web_pages: ['http://example.com/b'] },
  ];

  const mockFavourites = [
    { name: 'University B', 'state-province': 'State B', web_pages: ['http://example.com/b'] },
  ];

  const handleAddFavourite = jest.fn();
  const handleRemoveFavourite = jest.fn();

  it('renders university table correctly', () => {
    render(
      <UniversityTable
        universities={mockUniversities}
        favourites={mockFavourites}
        handleAddFavourite={handleAddFavourite}
        handleRemoveFavourite={handleRemoveFavourite}
      />
    );

    expect(screen.getByText('University A')).toBeInTheDocument();
    expect(screen.getByText('University B')).toBeInTheDocument();
    expect(screen.getByText('State A')).toBeInTheDocument();
    expect(screen.getByText('State B')).toBeInTheDocument();
    expect(screen.getAllByText('Visit').length).toBe(2); // Ensure there are two "Visit" links
  });

  it('calls handleAddFavourite when the add button is clicked', () => {
    render(
      <UniversityTable
        universities={mockUniversities}
        favourites={[]}
        handleAddFavourite={handleAddFavourite}
        handleRemoveFavourite={handleRemoveFavourite}
      />
    );

    fireEvent.click(screen.getAllByText('Add to List')[0]);
    expect(handleAddFavourite).toHaveBeenCalledTimes(1);
    expect(handleAddFavourite).toHaveBeenCalledWith(mockUniversities[0]);
  });

  it('calls handleRemoveFavourite when the remove button is clicked', () => {
    render(
      <UniversityTable
        universities={mockUniversities}
        favourites={mockFavourites}
        handleAddFavourite={handleAddFavourite}
        handleRemoveFavourite={handleRemoveFavourite}
      />
    );

    fireEvent.click(screen.getAllByText('Remove')[0]);
    expect(handleRemoveFavourite).toHaveBeenCalledTimes(1);
    expect(handleRemoveFavourite).toHaveBeenCalledWith('University B');
  });
});
