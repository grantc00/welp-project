import React from 'react'

function PopularSearches() {
    return (
        <div>
            <h1 className="container-title">Find the Best Businesses in Town</h1>
            <div className="popular-search-container">
                <div className="popular-search-item">
                    <div className="popular-search-pic-c">
                        <img className="popular-search-pic" alt='Restaurants'/>
                        </div>
                        <p className="popular-search-text">Restaurants</p>
                </div>
                <div className="popular-search-item">
                    <div className="popular-search-pic-c">
                        <img className="popular-search-pic" alt='Dry-cleaning'/>
                        </div>
                        <p className="popular-search-text">Dry Cleaning</p>
                </div>
                <div className="popular-search-item">
                    <div className="popular-search-pic-c">
                        <img className="popular-search-pic" alt='Gyms'/>
                        </div>
                        <p className="popular-search-text">Gyms</p>
                </div>
                <div className="popular-search-item">
                    <div className="popular-search-pic-c">
                        <img className="popular-search-pic" alt='Hotels'/>
                        </div>
                        <p className="popular-search-text">Hotels</p>
                </div>
            </div>
        </div>
    )
}

export default PopularSearches;
