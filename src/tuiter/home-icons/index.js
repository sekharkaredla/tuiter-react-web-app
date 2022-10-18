import React from "react";

const HomeIconsComponent = (eachPost) =>
    <>
        <div className="row">
            <div className="col-3 pt-2">
                <a href="#" className="text-decoration-none text-secondary">
                    <i className="fa-solid fa-comment"></i> {eachPost.comments}
                </a>
            </div>
            <div className="col-3 pt-2">
                <a href="#" className="text-decoration-none text-secondary">
                    <i className="fa fa-retweet" aria-hidden="true"></i> {eachPost.retweets}
                </a>
            </div>
            <div className="col-3 pt-2">
                <a href="#" className="text-decoration-none text-secondary">
                    <i className="fa-solid fa-heart"></i> {eachPost.likes}
                </a>
            </div>
            <div className="col-3 pt-2">
                <a href="#" className="text-decoration-none text-secondary">
                    <i className="fa fa-upload" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </>

export default HomeIconsComponent;