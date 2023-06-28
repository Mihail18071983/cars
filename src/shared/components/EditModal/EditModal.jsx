import React, { useState } from 'react';
import { updateCar } from '../../utils/carUpdate'; 

export const EditModal = ({ car, onClose, cars, setCars }) => {
  const [color, setColor] = useState(car.color);
  const [price, setPrice] = useState(car.price);
  const [availability, setAvailability] = useState(car.availability);

  const handleSave = async () => {
    try {
      // Call the updateCar function to save the changes made to the car data
      await updateCar(car.id, { color, price, availability }, cars, setCars);
      onClose();
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  return (
    <div>
      <h2>Edit Car</h2>
      <label>
        Color:
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Availability:
        <input
          type="text"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};