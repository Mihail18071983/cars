import React, { useState, useEffect, useCallback } from "react";
import TableFilter from "react-table-filter";
import "react-table-filter/lib/styles.css";

import PropTypes from "prop-types";

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

  const filterUpdated = (newData, filtersObject) => {
    setItems(newData);
  };

  return (
    <div>
      <table>
        <thead>
          <TableFilter rows={items} onFilterUpdate={filterUpdated}>
           <th key="company" filterkey="car">Company</th>
            <th key="model" filterkey="car_model">Model</th>
            <th key="vin" filterkey="car_vin">VIN</th>
            <th key="color" filterkey="car_color">Color</th>
            <th key="year" filterkey="car_model_year">Year</th>
            <th key="price" filterkey="price">Price</th>
            <th key="availability" filterkey="availability">Availability</th>
            <th key="actions">Actions</th>
          </TableFilter>
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

CarsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      car: PropTypes.string.isRequired,
      car_model: PropTypes.string.isRequired,
      car_vin: PropTypes.string.isRequired,
      car_color: PropTypes.string.isRequired,
      car_model_year: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      availability: PropTypes.bool.isRequired,
    })
  ),
};

CarsList.defaultProps = {
  cars: [],
};
