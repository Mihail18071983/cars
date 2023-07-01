import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchCars } from "redux/cars/cars-operation";

import { selectCars } from "redux/cars/cars-selectors";

import { CarsTable } from "modules/CarList/CarLIst";

export const CarsPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    (async () => {
      if (cars.length === 0)
      dispatch(fetchCars());
    })();
  }, [cars.length, dispatch]);

  return (
    <div>
      <CarsTable cars={cars} />
    </div>
  );
};
