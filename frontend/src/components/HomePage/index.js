import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/businesses";
import { Link, useHistory } from "react-router-dom";
import BusinessModal from "../BusinessModal/index";

function HomePage() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const history = useHistory();
  // const allBusinesses = useSelector((state) => state.businesses);
  const [business, setBusiness] = useState({});
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

  const theBusiness = business?.map((currentBusiness) => (
    <div key={currentBusiness.id}>
      <Link to={`/business/${currentBusiness.id}`}>
        <div className="homePage-item">
          <div className="homePage-picture-container">
            <img
              className="homePage-pic"
              src="https://images.unsplash.com/photo-1500868766630-f5477adf6f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt={currentBusiness.title}
              height="174px"
              width="216px"
            />
          </div>
          <p className="homePage-business-title">{currentBusiness.title}</p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div>
      <div className="homePage-business">
        <div>
          <div className="homePage-img"></div>
          <h1 className="container-title">Find the Best Businesses in Town</h1>
          <div className="homePage-business-container">{theBusiness}</div>
          <div className="button-container">
            <button
              className="Business-button"
              onClick={
                user ? () => setShow(true) : () => history.push("/login")
              }
            >
              New Business
            </button>
            <BusinessModal onClose={() => setShow(false)} show={show} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
