import React from "react";
import './style.css';

interface PaginationProps {
  itemsPerPage: number;
  itemsAmount: number;
  currentPage: number;
  setPage: (page: number) => void;
}

const Pagination = ({itemsPerPage, itemsAmount, currentPage, setPage}: PaginationProps) => {
  const pagesAmount = Math.ceil(itemsAmount / itemsPerPage);

  const PreviousPageButton = () => {

    const handlePreviousPage = () => {
      if (currentPage === 1) {
        return
      }
      setPage(currentPage - 1)
    }

    return (
      <li className={`pagination__page ${currentPage === 1 ? 'pagination__page--disabledPrevious' : ''}`} onClick={handlePreviousPage}>
        <button className='pagination__page--buttonPrevious'>{'<'}</button>
      </li>
    )
  }
  const NextPageButton = () => {
    const handleNextPage = () => {
      if (currentPage === pagesAmount) {
        return
      }
      setPage(currentPage + 1)
    }

    return (
      <li className={`pagination__page ${currentPage === pagesAmount ? 'pagination__page--disabledNext' : ''}`} onClick={handleNextPage}>
        <button className='pagination__page--buttonNext'>{'>'}</button>
      </li>
    )
  }

  return (
    <ul className='paginationList'>
      <PreviousPageButton />
      {
        Array.from(Array(pagesAmount).keys()).map((page) => {
            const currentPageButton = page + 1
            return (
              <li key={page}
                  className='pagination__page'
                  onClick={() => setPage(currentPageButton)}>
                <button className={`pagination__page--button ${currentPageButton === currentPage ? 'pagination__page--active' : ''}`}>{currentPageButton}</button>
              </li>
            )
          }
        )
      }
      <NextPageButton />
    </ul>
  )
}

export default Pagination
