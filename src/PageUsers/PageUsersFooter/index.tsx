import React from "react";
import Pagination from "./Pagination";

interface PageUsersFooterProps {
  itemsPerPage: number;
  itemsAmount: number;
  currentPage: number;
  setPage: (page: number) => void;
}

const PageUsersFooter = ({itemsPerPage, itemsAmount, currentPage, setPage}: PageUsersFooterProps) => {
  return (
    <Pagination
      itemsPerPage={itemsPerPage}
      itemsAmount={itemsAmount}
      currentPage={currentPage}
      setPage={setPage}
    />
  )
}
export default PageUsersFooter
