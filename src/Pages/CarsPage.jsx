import { useState, useEffect } from "react";

import { getAllCars } from "../shared/api/api";

import { CarsList } from "../modules/CarList/CarLIst";

export const CarsPage = () => {
  const [cars, setCars] = useState([]);
//   const [currentCars, setCurrentCars] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllCars();
      setCars(data);
    })();
  }, []);
    return <div>
      <CarsList cars={cars} />
  </div>;
};
