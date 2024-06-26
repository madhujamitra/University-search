import { useReducer, useEffect } from 'react';
import UniversityTable from '../components/UniversityTable';
import Pagination from '../components/Pagination';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ITEMS_PER_PAGE = 10;

const initialState = {
  favourites: [],
  currentPage: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVOURITES':
      return { ...state, favourites: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'REMOVE_FAVOURITE':
      const updatedFavourites = state.favourites.filter(fav => fav.name !== action.payload);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      return { ...state, favourites: updatedFavourites };
    default:
      return state;
  }
};

export default function Favourites() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favourites')) || [];
    dispatch({ type: 'SET_FAVOURITES', payload: favs });
  }, []);

  const handleRemoveFavourite = (name) => {
    dispatch({ type: 'REMOVE_FAVOURITE', payload: name });
  };

  const indexOfLastItem = state.currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentFavourites = state.favourites.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(state.favourites.length / ITEMS_PER_PAGE);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">FAVOURITES</h1>
        <Link href="/search" className="text-primary flex items-center">
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          Go to Search
        </Link>
      </div>

      {state.favourites.length > 0 ? (
        <>
          <UniversityTable
            universities={currentFavourites}
            favourites={state.favourites}
            handleAddFavourite={() => {}}
            handleRemoveFavourite={handleRemoveFavourite}
          />
          {totalPages >= 1 && (
            <div className="p-2.5">
              <Pagination
                currentPage={state.currentPage}
                totalPages={totalPages}
                onPageChange={(page) => dispatch({ type: 'SET_CURRENT_PAGE', payload: page })}
              />
            </div>
          )}
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg text-secondary">No favourites found.</p>
          <Link href="/search" className="text-primary">
            Go back to Search
          </Link>
        </div>
      )}
    </div>
  );
}
