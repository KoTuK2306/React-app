import React, {
  useCallback, useEffect, useMemo, useState,
} from "react";

import styles from "./Paginator.module.css";
import { PaginatorButton } from "./PaginatorButton/PaginatorButton";
import { range } from "./../../../utils/range";

export const Paginator = ({ pageCount, onClick, pageLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPages, setCurrentPages] = useState([{ pageNumber: 1 }]);

  const actualPageCount = useMemo(() => pageCount || 1, [pageCount]);

  const onSelectPage = useCallback((page) => {
    const startIndex = Math.min(actualPageCount - pageLimit + 1, Math.max(page - 2, 1));
    const endIndex = Math.min(startIndex - 1 + pageLimit, actualPageCount);

    const currentPages = range(startIndex, endIndex)
      .map((pageNumber) => ({ pageNumber }));
    setCurrentPages(currentPages);
    setCurrentPage(page);
    onClick(page);
  }, [actualPageCount, pageLimit]);

  const onSelectFirstPage = useCallback(() => onSelectPage(1), []);
  const onSelectLastPage = useCallback(() => onSelectPage(pageCount), [pageCount]);

  const isSelectedFirstPage = useMemo(() => currentPage === 1, [currentPage]);
  const isSelectedLastPage = useMemo(() => currentPage === actualPageCount, [currentPage]);

  useEffect(() => {
    const currentPages = range(1, pageLimit < actualPageCount ? pageLimit : actualPageCount)
      .map((pageNumber) => ({ pageNumber }));
    setCurrentPages(currentPages);
  }, [pageCount]);
  return (
    <div className={styles.paginator}>
      <PaginatorButton
        onClick={onSelectFirstPage}
        disabled={isSelectedFirstPage}
      >{"<<"}
      </PaginatorButton>
      {currentPages
        .map(({ pageNumber }) => (
          <PaginatorButton
            key={pageNumber}
            isActive={pageNumber === currentPage}
            onClick={() => onSelectPage(pageNumber)}
            disabled={pageNumber === currentPage}
          >{pageNumber}
          </PaginatorButton>
        ))}
      <PaginatorButton
        onClick={onSelectLastPage}
        disabled={isSelectedLastPage}
      >{">>"}
      </PaginatorButton>
    </div>
  );
};
