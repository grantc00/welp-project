// import React, { useState, useEffect } from "react";
// import "./popular-searches.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getBusinesses } from "../../store/businesses";
// import { Link } from "react-router-dom";

// function PopularSearches() {
//   const dispatch = useDispatch();
//   // const allBusinesses = useSelector((state) => state.businesses);
//   const [business, setBusiness] = useState({});
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       const businesses = await dispatch(getBusinesses());
//       setBusiness(businesses);
//       setLoading(false);
//     })();
//   }, [dispatch]);

//   if (isLoading) {
//     return <div className="App">Loading...</div>;
//   }




//   const theBusiness = business?.map((currentBusiness) => (
//     <div key={currentBusiness.id}>
//       <Link to={`/business/${currentBusiness.id}`}>
//         <div className="popular-search-item">
//           <div className="popular-search-pic-c">
//             <img
//               className="popular-search-pic"
//               src="https://images.unsplash.com/photo-1500868766630-f5477adf6f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
//               alt={currentBusiness.title}
//               height="174px"
//               width="216px"
//             />
//           </div>
//           <p className="popular-search-text">{currentBusiness.title}</p>
//         </div>
//       </Link>
//     </div>
//   ));

//   return (
//     <div className="popular-search">
//       <div>
//         <h1 className="container-title">Find the Best Businesses in Town</h1>
//         <div className="popular-search-container">{theBusiness}</div>
//       </div>
//     </div>
//   );
// }

// export default PopularSearches;
