import React, { useMemo } from "react";
import PropTypes from 'prop-types';
import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
} from "react-table";

import { GlobalFilter } from "shared/components/GlobalFilter/ClobalFilter";
import { CarActions } from "../CarActions/CarActions";

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
        Cell: ({ value }) => <CarActions id={value} />,
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
    state: { pageIndex }
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize:20 } },
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
      <table {...getTableProps()}>
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
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        {pageIndex > 2 && (
          <button onClick={() => gotoPage(pageIndex - 2)}>
            {pageIndex - 1}
          </button>
        )}
        {pageIndex > 1 && (
          <button onClick={() => gotoPage(pageIndex - 1)}>{pageIndex}</button>
        )}
        <button onClick={() => gotoPage(pageIndex)} disabled>
          {pageIndex + 1}
        </button>
        {pageIndex < pageCount - 2 && (
          <button onClick={() => gotoPage(pageIndex + 1)}>
            {pageIndex + 2}
          </button>
        )}
        {pageIndex < pageCount - 3 && (
          <button onClick={() => gotoPage(pageIndex + 2)}>
            {pageIndex + 3}
          </button>
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
    </>
  );
};

CarsTable.propTypes = {
  cars: PropTypes.array.isRequired,
};

CarsTable.defaultProps = [];
