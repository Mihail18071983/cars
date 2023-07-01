import React, { useState } from "react";
import { Modal } from "shared/components/Modal/Modal";
import { EditModalForm } from "shared/components/EditModal/EditModal";

export const CarActions = ({id}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleModal}>Edit</button>
      <button onClick={handleModal}>Delete</button>
      {showModal && (
        <Modal close={closeModal}>
          <EditModalForm carID={id} onClose={ closeModal} />
        </Modal>
      )}
    </div>
  );
};
