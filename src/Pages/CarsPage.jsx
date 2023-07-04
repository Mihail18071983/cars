import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchCars } from "redux/cars/cars-operation";

import { selectCars } from "redux/cars/cars-selectors";

import { CarsTable } from "modules/CarList/CarLIst";
import { PageTitle } from "shared/components/PageTitle/PageTitle";
import { Modal } from "shared/components/Modal/Modal";
import { AddCarForm } from "shared/components/AddCarForm/AddCarForm";
import { hideScroll } from "shared/utils/hideScroll";
import styles from "./CarPage.module.scss";

export const CarsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  hideScroll(showModal)
  
  const onCloseModal = () => {
    setShowModal(false);
  };

  const handleModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    (async () => {
      if (cars.length === 0) dispatch(fetchCars());
    })();
  }, [cars.length, dispatch]);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <PageTitle text="Table of Cars" />
        <button type="button" onClick={handleModal}>
          Add car
        </button>
      </div>
      <CarsTable cars={cars} />
      {showModal && (
        <Modal close={onCloseModal}>
          <AddCarForm />
        </Modal>
      )}
    </section>
  );
};
