import { useState, useEffect } from "react";

import { getAllCars } from "../shared/api/api";

import { CarsTable } from "modules/CarList/CarLIst";

export const CarsPage = () => {
  const [cars, setCars] = useState(JSON.parse(localStorage.getItem('cars')) || []);
  useEffect(() => {
    (async () => {
      if (cars.length>0) return
      const data = await getAllCars();
      localStorage.setItem('cars', JSON.stringify(data))
      setCars(data);
    })();
  }, [cars.length]);


  return (
    <div>
      <CarsTable cars={cars} />
    </div>
  );
};
