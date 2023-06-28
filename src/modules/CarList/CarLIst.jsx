import React, { useState, useEffect } from "react";

import { getAllCars } from "../../shared/api/api";
// import { Pagination } from '../../shared/components/pagination/Pagination';

import { CarActions } from "../CarActions/CarActions";

export const CarList = () => {
  const [cars, setCars] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // const carsPerPage = 20;
  // const totalPages = Math.ceil(cars.length / carsPerPage);
  // const indexOfLastCar = currentPage * carsPerPage;
  // const indexOfFirstCar = indexOfLastCar - carsPerPage;
  // const currentCars = cars.length > 0 ? cars.slice(indexOfFirstCar, indexOfLastCar):[];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // setCurrentPage(1);
  };

  // const handlePageChange = (selectedPage) => {
  //   setCurrentPage(selectedPage);
  // };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAllCars();
        setCars([ ...data]);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search cars..."
      />

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
          {/* {currentCars
            .filter((car) =>
              `${car.company} ${car.model} ${car.vin} ${car.color} ${car.year} ${car.price} ${car.availability}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            ) */}
          {cars.length > 0 ? (
            cars.map((car) => (
              <tr key={car.id}>
                <td>{car.car}</td>
                <td>{car.car_model}</td>
                <td>{car.car_vin}</td>
                <td>{car.car_color}</td>
                <td>{car.car_model_year}</td>
                <td>{car.price}</td>
                <td>{car.availability}</td>
                <td>
                  <CarActions car={car} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Loading cars...</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* {cars.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )} */}
    </div>
  );
};
