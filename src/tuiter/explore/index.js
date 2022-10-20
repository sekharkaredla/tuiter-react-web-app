import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11">
                    <div className="position-relative">
                        <input className="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <i className="fa-sharp fa-solid fa-magnifying-glass position-absolute wd-magnifying-glass"></i>
                    </div>
                </div>
                <div className="col-1">
                    <a href="#" className="text-decoration-none"><i
                        className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-2 position-relative fs-4"></i></a>
                </div>
            </div>

            <ul className="nav nav-tabs mt-2 mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div className="position-relative">
                <img src="/images/starship.png" width="100%"/>
                <h2 className="position-absolute bottom-0 start-0 ps-2 text-white">SpaceX's Starship</h2>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;