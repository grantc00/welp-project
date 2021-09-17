import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/businesses";
import "./BusinessPage.css";

function BusinessPage() {
  const dispatch = useDispatch();
  const [business, setBusiness] = useState({});
  const [isLoading, setLoading] = useState(true);

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

  const theBusiness = business?.forEach((currentBusiness) => (
    <div key={currentBusiness.id}>
      <Link to={`/business/${currentBusiness.id}`}>
        <div className="popular-search-item">
          <div className="popular-search-pic-c">
            <img
              className="popular-search-pic"
              src="https://images.unsplash.com/photo-1500868766630-f5477adf6f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt={currentBusiness.title}
              height="174px"
              width="216px"
            />
          </div>
          <p className="popular-search-text">{currentBusiness.title}</p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div>
      <div className="business-page-nav">
        <div className="business-top-container"></div>
      </div>
      <div className="business-intro-container">
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
      </div>

      <div className="business-review-button">
        <div>
          <button>Review Button</button>
        </div>
      </div>

      <div className="business-info">
        <div className="business-info-text">Location and Hours</div>
        <div className="business-location-hours-container">
          <div className="business-location">
            <div className="address">
              900 16th St San Francisco, CA 94107 Mississippi St & 7th St
              Potrero Hill
            </div>
          </div>
          <div className="business-day-hours-container">
            <div className="business-day">
              <div class="eachday">Mon</div>
              <div class="eachday">Tue</div>
              <div class="eachday">Wed</div>
              <div class="eachday">Thu</div>
              <div class="eachday">Fri</div>
              <div class="eachday">Sat</div>
              <div class="eachday">Sun</div>
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
          <div className="review-bottom">
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
