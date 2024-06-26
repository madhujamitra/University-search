import React from 'react';
import ReactPaginate from 'react-paginate';
import 'tailwindcss/tailwind.css'; 

const Pagination = ({ totalPages, onPageChange }) => {
  const handlePageClick = (event) => {
    onPageChange(event.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={'pagination flex flex-wrap justify-center mt-4'}
      pageClassName={'page-item mx-1 my-1'}
      pageLinkClassName={'page-link px-3 py-1 border rounded bg-white text-primary'}
      previousClassName={'page-item mx-1 my-1'}
      previousLinkClassName={'page-link px-3 py-1 border rounded bg-white text-primary'}
      nextClassName={'page-item mx-1 my-1'}
      nextLinkClassName={'page-link px-3 py-1 border rounded bg-white text-primary'}
      activeClassName={'active'}
      activeLinkClassName={'text-secondary'}
    />
  );
};

export default Pagination;
