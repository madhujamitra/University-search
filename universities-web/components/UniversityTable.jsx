import React from 'react';
import FavouriteButton from './FavouriteButton';

const UniversityTable = ({ universities, favourites, handleAddFavourite, handleRemoveFavourite }) => (
  <div className="overflow-x-auto">
    <div className="min-w-full overflow-y-auto">
      <table className="min-w-full bg-white border border-gray-300 table-fixed">
        <thead className="sticky top-0 bg-primary text-white">
          <tr>
            <th className="py-2 px-4 border w-1/3 h-16">Name</th>
            <th className="py-2 px-4 border w-1/4 h-16">State/Province</th>
            <th className="py-2 px-4 border w-1/6 h-16">Website</th>
            <th className="py-2 px-4 border w-1/4 h-16">Favourites List</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((uni, index) => (
            <tr key={index} className="text-center border bg-white hover:bg-gray-100">
              <td className="py-2 px-4 border w-1/3 h-16 overflow-hidden text-ellipsis">{uni.name}</td>
              <td className="py-2 px-4 border w-1/4 h-16 overflow-hidden text-ellipsis">{uni['state-province']}</td>
              <td className="py-2 px-4 border w-1/6 h-16 overflow-hidden text-ellipsis">
                <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer" className="text-accent">
                  Visit
                </a>
              </td>
              <td className="py-2 px-4 border w-1/4 h-16 overflow-hidden text-ellipsis">
                <FavouriteButton
                  isFavourite={favourites.some(fav => fav.name === uni.name)}
                  onAdd={() => handleAddFavourite(uni)}
                  onRemove={() => handleRemoveFavourite(uni.name)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UniversityTable;
