import React, { useState } from "react";
import { Modal } from "shared/components/Modal/Modal";
import { EditCarForm } from "shared/components/EditCar/EditCarForm";
import { DeleteCar } from "shared/components/DeleteCar/DeleteCar";

export const CarActions = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedActionType, setSelectedActionType] = useState(null);

  const handleModal = (action) => {
    setSelectedActionType(action);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => handleModal("edit")}>Edit</button>
      <button onClick={() => handleModal("delete")}>Delete</button>
      {showModal && (
        <Modal close={closeModal}>
          {selectedActionType === "edit" && (
            <EditCarForm carID={id} onClose={closeModal} />
          )}
          {selectedActionType === "delete" && (
            <DeleteCar carID={id} onClose={closeModal} />
          )}
        </Modal>
      )}
    </div>
  );
};
