import { useState } from "react";

export const CarActions = ({ car }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      {/* {showEditModal && <EditModal car={car} onClose={() => setShowEditModal(false)} />}
      {showDeleteModal && (
        <DeleteModal car={car} onClose={() => setShowDeleteModal(false)} />
      )} */}
    </div>
  );
};