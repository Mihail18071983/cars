import PropTypes from "prop-types";
import styles from "./Pagination.module.scss"

export const Pagination = ({
  gotoPage,
  previousPage,
  canPreviousPage,
  pageIndex,
  pageCount,
  nextPage,
  canNextPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {"<<"}
      </button>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {"<"}
      </button>
      {pageIndex > 2 && (
        <button onClick={() => gotoPage(pageIndex - 2)}>{pageIndex - 1}</button>
      )}
      {pageIndex > 1 && (
        <button onClick={() => gotoPage(pageIndex - 1)}>{pageIndex}</button>
      )}
      <button onClick={() => gotoPage(pageIndex)} disabled>
        {pageIndex + 1}
      </button>
      {pageIndex < pageCount - 2 && (
        <button onClick={() => gotoPage(pageIndex + 1)}>{pageIndex + 2}</button>
      )}
      {pageIndex < pageCount - 3 && (
        <button onClick={() => gotoPage(pageIndex + 2)}>{pageIndex + 3}</button>
      )}
      {pageIndex < pageCount - 3 && <button disabled>...</button>}
      {pageIndex < pageCount - 3 && (
        <button onClick={() => gotoPage(pageCount - 1)}>{pageCount}</button>
      )}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {">"}
      </button>
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {">>"}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  previousPage: PropTypes.func.isRequired,
};
