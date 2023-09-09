import React from "react";

interface PaginationProps {
  itemsPerPage: number;
  itemsAmount: number;
  currentPage: number;
  setPage: (page: number) => void;
}

const Pagination = ({itemsPerPage, itemsAmount, currentPage, setPage}: PaginationProps) => {
  const pagesAmount = Math.ceil(itemsAmount / itemsPerPage);
  return (
    <ul>{
      Array.from(Array(pagesAmount).keys()).map((page) => {
        return (
          <li key={page} className={`pagination__page ${page + 1 === currentPage ? 'pagination__page--active' : ''}`} onClick={() => setPage(page + 1)}>
            {page + 1}
          </li>
        )
      }
      )
    }</ul>
  )
}

export default Pagination
