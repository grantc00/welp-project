import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBusiness } from "../../store/businesses";

const EditBusinessModal = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  let businessId;

  if (!props.showBusinessEdit) {
    return null;
  }

  if (props.findMatch) {
    businessId = props.findMatch.id;
  }

  const handleBusinessSubmit = (e) => {
    // e.preventDefault();
    if (user) {
      dispatch(editBusiness({ businessId, title, description, address }));
    }
  };

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Edit Business</h4>
        </div>
        <form onSubmit={handleBusinessSubmit}>
          <div className="modal-body">
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <textarea
              name="textarea"
              placeholder="Business Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
            <button
              onClick={props.onSubmit}
              className="submit-button"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBusinessModal;
