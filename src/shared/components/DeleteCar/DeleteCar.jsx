import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "redux/cars/cars-selectors";
import { removeCar } from "../../../redux/cars/cars.slice";
import styles from "./DeleteCar.module.scss";

export const DeleteCar = ({ carID, onClose }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const car = cars.filter((item) => item.id === carID)[0];
  const { car: brand, car_model: model } = car;
  const confirmationMessage = `Are you sure you want to delete car ${brand} ${model}? This action cannot be undone.`;

   const handleDelete = () => {
    dispatch(removeCar(carID));
    onClose();
    };
    
  return (
    <div className={styles.delete}>
      <p className={styles.message}>{confirmationMessage}</p>
      <div className={styles.button_wrapper}>
        <button
          type="button"
          className={styles.confirm_button}
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className={styles.cancel_button}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
