import React, { useState } from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviews";

const Modal = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [answer, setAnswer] = useState("");
  const [rating, setRating] = useState("");

  let userId;
  let businessId;

  if (!props.show) {
    return null;
  }

  if (props.findMatch) {
    businessId = props.findMatch.id;
  }

  if (user) {
    userId = user.id;
  }

  const handleReviewSubmit = async (e) => {
    if (user) {
      await dispatch(
        createReview({ userId, businessId, rating, answer })
      ).catch(async (res) => {
        const data = await res.json();
        console.log(data);
      });
    }

    setAnswer("");
  };

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.findMatch.title}</h4>
        </div>
        <form onSubmit={handleReviewSubmit}>
          <div className="modal-body">
            <label>
              Pick your rating:
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="1"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <textarea
              name="textarea"
              placeholder="Please be kind"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
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
};

export default Modal;
