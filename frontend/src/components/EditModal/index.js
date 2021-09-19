import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { editReview } from "../../store/reviews";

const EditModal = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [answer, setAnswer] = useState("");
  const [rating, setRating] = useState("");

  let userId;
  let businessId;
  let reviewId;
  if (!props.showEdit) {
    return null;
  }

  if (props.findMatch) {
    businessId = props.findMatch.id;
  }

  if (user) {
    userId = user.id;
  }

  if (props.currentReviews) {
    reviewId = props.currentReviews.id;
  }

  const handleReviewSubmit = (e) => {
    // e.preventDefault();
    if (user) {
      dispatch(editReview({ reviewId, userId, businessId, rating, answer }));
    }
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
              placeholder={props.currentReviews.answer}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
