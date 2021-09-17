import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBusinesses } from "../../store/businesses";
import "./BusinessPage.css";
import Modal from "../Modal"

function BusinessPage() {
  const dispatch = useDispatch();
  const [business, setBusiness] = useState({});
  const currentId = useParams();
  const [isLoading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    (async () => {
      const businesses = await dispatch(getBusinesses());
      setBusiness(businesses);
      setLoading(false);
    })();
  }, [dispatch]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const findMatch = Object.values(business).find((p) => p.id == currentId.id);
  console.log(findMatch);

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
              <span>9 reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="business-review-button">
        <div>
          <button onClick={() => setShow(true) }>Review Button</button>
          <Modal onClose={() => setShow(false)} show={show} />
        </div>
      </div>

      <div className="business-description">
        <p>{findMatch.description}</p>
      </div>

      <div className="business-info">
        <div className="business-info-text">Location and Hours</div>
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
          <h4 className="review-header">Recommended Reviews</h4>
          <div className="review-top">
            <div className="user-info">
              <div className="user-name">Testing 1</div>
              <div className="review-date">Sep 16</div>
              <div className="review-rating"> 3 / 5 </div>
            </div>
          </div>
          <div>
            <div className="review-container">
              <div className="review-box-container">
                <p className="review-box">
                  So excited to finally have halal birria in SF! I went to their
                  food truck in San Bruno a few months ago and been a huge fan
                  since. This new location has tons of seats, only a 10 min walk
                  from 24th bart and has new menu options (torta, birria fries
                  and more drinks).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessPage;
