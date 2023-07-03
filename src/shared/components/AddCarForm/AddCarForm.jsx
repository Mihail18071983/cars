import React, { useState } from "react";
import { customAlphabet } from "nanoid";
import { PageTitle } from "../PageTitle/PageTitle";
import { addCar } from "redux/cars/cars.slice";
import { useDispatch } from "react-redux";

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

    // You can perform further actions with the newCar object, such as sending it to an API or updating your state.
      console.log(newCar);
      dispatch(addCar(newCar));

    // Reset the form fields
    setCar("");
    setCarModel("");
    setCarColor("");
    setCarModelYear(0);
    setCarVIN("");
    setPrice("");
    setAvailability(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PageTitle text="Add car form" />
      <label htmlFor="car">Car:</label>
      <input
        type="text"
        id="car"
        name="car"
        placeholder="Mitsubishi"
        value={car}
        onChange={(e) => setCar(e.target.value)}
        required
      />
      <br />
      <br />

      <label htmlFor="car_model">Car Model:</label>
      <input
        type="text"
        id="car_model"
        name="car_model"
        placeholder="Montero"
        value={carModel}
        onChange={(e) => setCarModel(e.target.value)}
        required
      />
      <br />
      <br />

      <label htmlFor="car_color">Car Color:</label>
      <input
        type="text"
        id="car_color"
        name="car_color"
        placeholder="green"
        value={carColor}
        onChange={(e) => setCarColor(e.target.value)}
        required
      />
      <br />
      <br />

      <label htmlFor="car_model_year">Car Model Year:</label>
      <input
        type="number"
        id="car_model_year"
        name="car_model_year"
        value={carModelYear}
        onChange={(e) => setCarModelYear(parseInt(e.target.value))}
        required
      />
      <br />
      <br />

      <label htmlFor="car_vin">Car VIN:</label>
      <input
        type="text"
        id="car_vin"
        name="car_vin"
        value={carVIN}
        placeholder="SAJWJ0FF3F8321657"
        onChange={(e) => setCarVIN(e.target.value)}
        required
      />
      <br />
      <br />

      <label htmlFor="price">Price:</label>
      <input
        type="text"
        id="price"
        name="price"
        value={price}
        placeholder="2000$"
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <br />
      <br />

      <label htmlFor="availability">Availability:</label>
      <input
        type="checkbox"
        id="availability"
        name="availability"
        checked={availability}
        onChange={(e) => setAvailability(e.target.checked)}
      />
      <br />
      <br />

      <button type="submit">Add car</button>
    </form>
  );
};
