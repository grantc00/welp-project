import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/businesses";

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
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="business-info"></div>
      </div>
      <div className="business-review"></div>
      <div className="business-location-hours"></div>
      <div className="business-reviews"></div>
    </div>
  );
}

export default BusinessPage;
