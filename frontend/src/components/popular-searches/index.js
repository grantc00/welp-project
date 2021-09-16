import React, { useState, useEffect } from "react";
import "./popular-searches.css";

function PopularSearches() {
  // const [business, setBusiness] = useState({});

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/business")
  //     .then((response) => response.json())
  //     .then((data) => setBusiness(data));
  // }, []);

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let response = await fetch("http://localhost:3000/api/business");
  //     let data = await response.json();
  //     setBusiness(data);
  //   }

  //   fetchMyAPI();
  // }, []);

  return (
    <div className="popular-search">
      <div>
        <h1 className="container-title">Find the Best Businesses in Town</h1>
        <div className="popular-search-container">
          <div className="popular-search-item">
            <div className="popular-search-pic-c">
              <img
                className="popular-search-pic"
                src="https://images.unsplash.com/photo-1500868766630-f5477adf6f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
                alt="In-N-Out Burger"
                height="174px"
                width="216px"
              />
            </div>
            {/* <p className="popular-search-text">{business[0].title}</p> */}
          </div>

          <div className="popular-search-item">
            <div className="popular-search-pic-c">
              <img
                className="popular-search-pic"
                src="https://images.unsplash.com/photo-1500868766630-f5477adf6f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
                alt="In-N-Out Burger"
                height="174px"
                width="216px"
              />
            </div>
            <p className="popular-search-text">In-N-Out Burger</p>
          </div>
          <div className="popular-search-item">
            <div className="popular-search-pic-c">
              <img
                className="popular-search-pic"
                src="https://images.unsplash.com/photo-1593863806425-32e9e8384ce6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80"
                alt="Mcdonald"
                height="174px"
                width="216px"
              />
            </div>
            <p className="popular-search-text">Mcdonald</p>
          </div>
          <div className="popular-search-item">
            <div className="popular-search-pic-c">
              <img
                className="popular-search-pic"
                src="	https://uploads-ssl.webflow.com/5e336ab22524a2fb7e20c2e3/5f43e8a980b5b11e75a63904_337%20batu-gezer-AGGhkGuVs2w-unsplash.jpg"
                alt="Wendy's"
                height="174px"
                width="216px"
              />
            </div>
            <p className="popular-search-text">Wendy's</p>
          </div>
          <div className="popular-search-item">
            <div className="popular-search-pic-c">
              <img
                className="popular-search-pic"
                src="https://images.unsplash.com/photo-1619474387533-301ed3b5a734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
                alt="Shake Shack"
                height="174px"
                width="216px"
              />
            </div>
            <p className="popular-search-text">Shake Shack</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularSearches;
