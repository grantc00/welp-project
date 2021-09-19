import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/businesses";
import { getReviews, deleteReviews } from "../../store/reviews";
import "./BusinessPage.css";
import Modal from "../Modal";
import Moment from "moment";
import EditModal from "../EditModal";


function BusinessPage() {
  const dispatch = useDispatch();
  const [findMatch, setMatchBusiness] = useState({});
  const [matchReview, setMatchReview] = useState([]);
  const currentId = useParams();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  let userId;

  if (user) {
    userId = user.id;
  }
  // user
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (user) {
      setIsUser(true);
    }
  }, [user]);

  //modal
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  // const [currentReview, setCurrentReview] = useState();

  // show loading until finish fetching data from the server
  const [isLoading, setLoading] = useState(true);
  const [isReviewsLoading, setReviewsLoading] = useState(true);

  // get all business
  useEffect(() => {
    (async () => {
      let data = await dispatch(getBusinesses());
      setMatchBusiness(Object.values(data).find((p) => p.id == currentId.id));
      setLoading(false);
    })();
  }, [dispatch, currentId]);

  // find all reviews of the current business
  useEffect(() => {
    (async () => {
      let reviews = await dispatch(getReviews());
      setMatchReview(
        Object.values(reviews).filter((p) => p.businessId == currentId.id)
      );
      setReviewsLoading(false);
    })();
  }, [dispatch, currentId]);

  // show loading if haven't fetch all data
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  if (isReviewsLoading) {
    return <div className="App">Review Loading...</div>;
  }

  //  handle delete
  const handleReviewDelete = async (e) => {
    await dispatch(deleteReviews(e.target.value));
    window.location.reload(false);
  };

  // render this to the reviews section
  const theMatchReviews = matchReview?.map((currentReviews) => (
    <div key={currentReviews.id}>
      <div className="review-top">
        <div className="user-info">
          <div className="user-name">UserId: {currentReviews.userId}</div>
          <div className="review-date">
            Date: {Moment(currentReviews.createdAt).format("d MMM YYYY")}
          </div>
          <div className="review-rating"> {currentReviews.rating} / 5</div>
        </div>
      </div>
      <div>
        <div className="review-container">
          <div className="review-box-container">
            <p className="review-box">{currentReviews.answer}</p>
          </div>
        </div>

        {/* Delete Button Start -------- */}
        {currentReviews.userId === userId && (
          <>
            <button onClick={() => setShowEdit(true)}>Edit</button>
            <EditModal 
              onClose={() => setShowEdit(false)}
              showEdit={showEdit}
              findMatch={findMatch}
              currentReviews={currentReviews}
            />
            <button value={currentReviews.id} onClick={handleReviewDelete}>
              Delete
            </button>
          </>
        )}
        {/* Delete Button End -------- */}
      </div>
    </div>
  ));

  return (
    <div>
      <div className="business-page-nav">
        <div className="business-top-container"></div>
      </div>

      <div className="business-info-container">
        <div className="business-pictures-container">
          <img
            src="https://images.unsplash.com/photo-1617196034003-475e2195380e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1617196034003-475e2195380e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1617196034003-475e2195380e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80"
            alt=""
          />
        </div>
        <div className="business-information">
          <div className="business-info-text">
            <p className="business-title">{findMatch.title}</p>
            <div className="rating-box">
              <div></div>
              <span className="rating-text">9 reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="business-review-button">
        <div>
          <button
            onClick={
              isUser ? () => setShow(true) : () => history.push("/login")
            }
          >
            Review Button
          </button>
          <Modal
            onClose={() => setShow(false)}
            show={show}
            findMatch={findMatch}
          />
        </div>
      </div>

      <div className="business-description">
        <p>{findMatch.description}</p>
      </div>

      <div className="business-info">
        <div className="business-location-hours-title">Location and Hours</div>
        <div className="business-location-hours-container">
          <div className="business-location">
            <div className="address">{findMatch.address}</div>
          </div>
          <div className="business-day-hours-container">
            <div className="business-day">
              <div className="eachday">Mon</div>
              <div className="eachday">Tue</div>
              <div className="eachday">Wed</div>
              <div className="eachday">Thu</div>
              <div className="eachday">Fri</div>
              <div className="eachday">Sat</div>
              <div className="eachday">Sun</div>
            </div>
            <div className="business-hours">
              <div className="hours">11:00 AM - 10:00 PM</div>
              <div className="hours">11:00 AM - 10:00 PM</div>
              <div className="hours">11:00 AM - 10:00 PM</div>
              <div className="hours">11:00 AM - 10:00 PM</div>
              <div className="hours">11:00 AM - 10:00 PM</div>
              <div className="hours">11:00 AM - 10:00 PM</div>
              <div className="hours">11:00 AM - 10:00 PM</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="review-whole-container">
          <h4 className="review-header">Reviews</h4>
          {theMatchReviews}
        </div>
      </div>
    </div>
  );
}

export default BusinessPage;
