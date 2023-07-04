import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "redux/cars/cars-selectors";
import { updateCarInfo } from "../../../redux/cars/cars.slice";
import PropTypes from "prop-types";
import styles from "./EditCarForm.module.scss";
export const EditCarForm = ({ carID, onClose }) => {
  const cars = useSelector(selectCars);
  const car = cars.filter((item) => item.id === carID)[0];

  const {
    car: car_mark,
    car_model,
    car_color: color,
    price,
    car_vin,
    car_model_year,
    availability,
  } = car;
  const [carMark, setCarMark] = useState(car_mark);
  const [carModel, setCarModel] = useState(car_model);
  const [carVIN, setCarVIN] = useState(car_vin);
  const [carModelYear, setCarModelYear] = useState(car_model_year);
  const [carColor, setCarColor] = useState(color);
  const [carPrice, setCarPrice] = useState(price);
  const [carAvailability, setCarAvailability] = useState(availability);
  const dispatch = useDispatch();

  const handleSave = () => {
    try {
      dispatch(
        updateCarInfo({
          ...car,
          car_color: carColor,
          price: carPrice,
          availability: carAvailability,
        })
      );
      onClose();
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSave}>
      <h2>Edit Car</h2>
    <label className={styles.label}>
        Car:
        <input className={styles.input}
          type="text"
          name="car"
          placeholder="Mitsubishi"
          value={carMark}
          onChange={(e) => setCarMark(e.target.value)}
          required
          disabled
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
          disabled
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
          disabled
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
          disabled

        />
      </label>

      <label className={styles.label}>
        Price:
        <input className={styles.input}
          type="text"
          name="price"
          value={carPrice}
          placeholder="2000$"
          onChange={(e) => setCarPrice(e.target.value)}
          required
        />
      </label>
      <label className={styles.label}>
        Availability:
        <select
          value={carAvailability}
          onChange={(e) => {
            const value = e.target.value === "true";
            setCarAvailability(value);
            console.log(value);
          }}
        >
          <option value={true}>available</option>
          <option value={false}>unavailable</option>
        </select>
      </label>
      <div className={styles.wrapper}>
        <button className={styles.confirm_button} type="submit">
          Save
        </button>
        <button
          className={styles.cancel_button}
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

EditCarForm.propTypes = {
  carID: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
