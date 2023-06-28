export const updateCar = (id, updatedData, cars, setCars) => {
    try {
        // Simulate the update by finding the car with the specified ID
        const updatedCars = cars.map((car) => {
            if (car.id === id) {
                return { ...car, ...updatedData };
            }
            return car;
        });

        // Update the state with the modified car data
        setCars(updatedCars);

        // Return the updated car data (optional)
        return updatedCars.find((car) => car.id === id);
    } catch (error) {
        throw new Error('Error updating car');
    }
};
