import React, { useMemo } from "react";
import { Pagination } from "shared/components/pagination/Pagination";
import PropTypes from "prop-types";
import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
} from "react-table";

import { GlobalFilter } from "shared/components/GlobalFilter/ClobalFilter";
import { CarActions } from "../CarActions/CarActions";
import styles from "./CarsLIst.module.scss";

export const CarsTable = ({ cars }) => {
  const data = useMemo(() => cars, [cars]);

  const columns = useMemo(
    () => [
      {
        Header: "Company",
        accessor: "car",
      },
      {
        Header: "Model",
        accessor: "car_model",
      },
      {
        Header: "VIN",
        accessor: "car_vin",
      },
      {
        Header: "Color",
        accessor: "car_color",
      },
      {
        Header: "Year",
        accessor: "car_model_year",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Availability",
        accessor: "availability",
        Cell: ({ value }) => (value ? "available" : "unavailable"),
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: ({ value }) => (
          <div className={styles.actionsWrapper}>
            <CarActions id={value} />
          </div>
        ),
      },
    ],
    []
  );

  const {
    gotoPage,
    getTableProps,
    pageCount,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    globalFilter,
    setGlobalFilter,
    preGlobalFilteredRows,
    state: { pageIndex },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 20 } },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {page.length === 20 && (
        <Pagination
          gotoPage={gotoPage}
          previousPage={previousPage}
          canPreviousPage={canPreviousPage}
          pageCount={pageCount}
          canNextPage={canNextPage}
          nextPage={nextPage}
          pageIndex={pageIndex}
        />
      )}
    </>
  );
};

CarsTable.propTypes = {
  cars: PropTypes.array.isRequired,
};

CarsTable.defaultProps = [];
