import React, { useState, useEffect, useCallback } from "react";
// import PropTypes from 'prop-types';

import { Pagination } from "../../shared/components/pagination/Pagination";

import { CarActions } from "../CarActions/CarActions";

const carsPerPage = 30;

export const CarsList = ({ cars }) => {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPageCount(Math.ceil(cars.length / carsPerPage));
    const startOffset = (currentPage * carsPerPage) % cars.length;
    const endOffset = startOffset + carsPerPage;
    const paginatedCars = cars.slice(startOffset, endOffset);
    setItems(paginatedCars);
  }, [currentPage, cars]);

  const onPageClick = useCallback((event) => {
    setCurrentPage(event.selected + 1);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Model</th>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            items.map((car) => (
              <tr key={car.id}>
                <td>{car.car}</td>
                <td>{car.car_model}</td>
                <td>{car.car_vin}</td>
                <td>{car.car_color}</td>
                <td>{car.car_model_year}</td>
                <td>{car.price}</td>
                {car.availability ? <td>available</td> : <td> unavailable</td>}
                <td>
                  <CarActions car={car} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {pageCount > 1 && (
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageClick={onPageClick}
        />
      )}
    </div>
  );
};

CarsList.defaultProps = {
  list: [],
};
