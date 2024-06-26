
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';


const FavouriteButton = ({ isFavourite, onAdd, onRemove }) => (
  <button
    className={`py-2 px-6 rounded-xl  button-fixed-width ${isFavourite 
      ? 'bg-secondary hover:bg-secondary-dark' 
      : 'bg-primary hover:bg-primary-dark'
    } text-white`}
    onClick={isFavourite ? onRemove : onAdd}
  >
    <FontAwesomeIcon icon={isFavourite ? faSolidHeart : faRegularHeart} className="mr-2" />
   {isFavourite ? 'Remove' : 'Add to List'}
  </button>
);

export default FavouriteButton;
