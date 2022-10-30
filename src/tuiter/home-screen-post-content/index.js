import React from "react";

const HomeScreenPostContentComponent = ({post}) =>
    <>
        <div className="row">
            <div className="fw-bolder text-white float-start line">
                {post.userName} <i className="fa-solid fa-circle-check"></i>
                <span className="text-secondary">&nbsp;&nbsp;{post.handle} . {post.time}</span>
                <a href="#" className="text-decoration-none text-secondary">
                    <i className="fa-solid fa-ellipsis float-end pt-2 pb-1"></i>
                </a>
            </div>
            <div className="text-white">{post.tuit}</div>
        </div>
    </>

export default HomeScreenPostContentComponent;