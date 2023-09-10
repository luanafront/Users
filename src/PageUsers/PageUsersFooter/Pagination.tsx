import React from "react";

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
      <li className={`pagination__page ${currentPage === 1 ? 'pagination__page--disabled' : ''}`} onClick={handlePreviousPage}>
        <button>{'<'}</button>
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
      <li className={`pagination__page ${currentPage === 1 ? 'pagination__page--disabled' : ''}`} onClick={handleNextPage}>
        <button>{'>'}</button>
      </li>
    )
  }

  return (
    <ul>
      <PreviousPageButton />
      {
        Array.from(Array(pagesAmount).keys()).map((page) => {
            const currentPageButton = page + 1
            return (
              <li key={page}
                  className={`pagination__page ${currentPageButton === currentPage ? 'pagination__page--active' : ''}`}
                  onClick={() => setPage(currentPageButton)}>
                <button>{currentPageButton}</button>
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
