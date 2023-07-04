import React, { useState } from "react";
import { customAlphabet } from "nanoid";
import { PageTitle } from "../PageTitle/PageTitle";
import { addCar } from "redux/cars/cars.slice";
import { useDispatch } from "react-redux";
import styles from "./AddCarForm.module.scss";

export const AddCarForm = () => {
  const dispatch = useDispatch();
  const [car, setCar] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
  const [carModelYear, setCarModelYear] = useState(2010);
  const [carVIN, setCarVIN] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(false);
  const generateCarID = customAlphabet("1234567890", 4);
  const carID = generateCarID();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = {
      id: parseInt(carID),
      car: car,
      car_model: carModel,
      car_color: carColor,
      car_model_year: carModelYear,
      car_vin: carVIN,
      price: price,
      availability: availability,
    };

    dispatch(addCar(newCar));

    
    setCar("");
    setCarModel("");
    setCarColor("");
    setCarModelYear(0);
    setCarVIN("");
    setPrice("");
    setAvailability(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <PageTitle text="Add car form" />
      <label className={styles.label}>
        Car:
        <input className={styles.input}
          type="text"
          name="car"
          placeholder="Mitsubishi"
          value={car}
          onChange={(e) => setCar(e.target.value)}
          required
        />
      </label>

      <label className={styles.label}>
        Car Model:
        <input className={styles.input}
          type="text"
          name="car_model"
          placeholder="Montero"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          required
        />
      </label>

      <label className={styles.label}>
        Car Color:
        <input className={styles.input}
          type="text"
          name="car_color"
          placeholder="green"
          value={carColor}
          onChange={(e) => setCarColor(e.target.value)}
          required
        />
      </label>

      <label className={styles.label}>
        Car Model Year:
        <input className={styles.input}
          type="number"
          name="car_model_year"
          value={carModelYear}
          onChange={(e) => setCarModelYear(parseInt(e.target.value))}
          required
        />
      </label>

      <label className={styles.label}>
        Car VIN:
        <input className={styles.input}
          type="text"
          name="car_vin"
          value={carVIN}
          placeholder="SAJWJ0FF3F8321657"
          onChange={(e) => setCarVIN(e.target.value)}
          required
        />
      </label>

      <label className={styles.label}>
        Price:
        <input className={styles.input}
          type="text"
          name="price"
          value={price}
          placeholder="2000$"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>

      <label className={styles.label}>
        Availability:
        <input className={styles.input}
          type="checkbox"
          name="availability"
          checked={availability}
          onChange={(e) => setAvailability(e.target.checked)}
        />
      </label>

      <button className={styles.button} type="submit">Add car</button>
    </form>
  );
};
