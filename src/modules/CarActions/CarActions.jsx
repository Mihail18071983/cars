import React, { useState } from "react";
import { Modal } from "shared/components/Modal/Modal";

export const CarActions = () => {
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            neque sapiente, error aliquid repellendus nisi illum quisquam
            impedit ea voluptate quae earum quia tempora ad dolores, quo autem
            qui delectus, ratione similique optio quos ipsa tenetur commodi!
            Quas ad aliquam atque, velit aspernatur numquam accusantium ipsa
            ipsum culpa dolor quidem autem recusandae dolore laboriosam, vel
            minima harum eius ab nisi aliquid aperiam. Sit id natus totam quam
            officia magnam expedita!
          </p>
        </Modal>
      )}
    </div>
  );
};
