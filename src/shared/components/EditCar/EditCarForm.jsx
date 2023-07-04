import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "redux/cars/cars-selectors";
import { updateCarInfo } from "../../../redux/cars/cars.slice";
import PropTypes from "prop-types";
import styles from "./EditCarForm.module.scss";
export const EditCarForm = ({ carID, onClose }) => {
  const cars = useSelector(selectCars);
  const car = cars.filter((item) => item.id === carID)[0];

  const { car_color: color, price, availability } = car;
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
        Color:
        <input className={styles.input}
          type="text"
          value={carColor}
          onChange={(e) => setCarColor(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        Price:
        <input className={styles.input}
          type="text"
          value={carPrice}
          onChange={(e) => setCarPrice(e.target.value)}
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
        <button className={styles.confirm_button} type="submit">Save</button>
        <button className={styles.cancel_button} type="button" onClick={onClose}>
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
