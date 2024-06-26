import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FavouriteButton from '../components/FavouriteButton';

describe('FavouriteButton', () => {
  it('renders correctly when not a favourite', () => {
    render(<FavouriteButton isFavourite={false} onAdd={() => {}} onRemove={() => {}} />);
    expect(screen.getByText('Add to List')).toBeInTheDocument();
  });

  it('renders correctly when a favourite', () => {
    render(<FavouriteButton isFavourite={true} onAdd={() => {}} onRemove={() => {}} />);
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('calls onAdd when clicked and not a favourite', () => {
    const onAdd = jest.fn();
    render(<FavouriteButton isFavourite={false} onAdd={onAdd} onRemove={() => {}} />);
    fireEvent.click(screen.getByText('Add to List'));
    expect(onAdd).toHaveBeenCalledTimes(1);
  });

  it('calls onRemove when clicked and is a favourite', () => {
    const onRemove = jest.fn();
    render(<FavouriteButton isFavourite={true} onAdd={() => {}} onRemove={onRemove} />);
    fireEvent.click(screen.getByText('Remove'));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});
