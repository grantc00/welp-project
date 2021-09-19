import React, { useState } from "react";
import "./BusinessModal.css";
import { useDispatch, useSelector } from "react-redux";
import { createBusiness } from "../../store/businesses";

function BusinessModal(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  const user = useSelector((state) => state.session.user);

  let ownerId;

  if (user) {
    ownerId = user.id;
  }

  if (!props.show) {
    return null;
  }

  const handleBusinessSubmit = async (e) => {
    // e.preventDefault();
    // console.log({ userId, title, description, address });
    if (user) {
      await dispatch(
        createBusiness({ ownerId, title, description, address })
      ).catch(async (res) => {
        const data = await res.json();
        console.log(data);
      });
    }
  };

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Create New Business</h4>
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BusinessModal;
