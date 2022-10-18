import React from "react";

const HomeScreenPostContentComponent = ({post, imageDivStyle, imageStyle}) =>
    <>
        <div className="row">
            <div className="fw-bolder text-white float-start line">
                {post.userName} <i className="fa-solid fa-circle-check"></i>
                <span className="text-secondary">&nbsp;&nbsp;{post.handle} . {post.time}</span>
                <a href="#" className="text-decoration-none text-secondary">
                    <i className="fa-solid fa-ellipsis float-end pt-2"></i>
                </a>
            </div>
            <div className="text-white">{post.title} &nbsp;&nbsp;
                <a href={`${post.titleLink}`} className="text-primary text-decoration-none">{post.titleLinkContent}</a>
            </div>
        </div>
        <div className="row mt-2 ps-2">
            <div className={`${imageDivStyle}`}>
                <img src={`${post.image}`} width="100%" className={`${imageStyle}`}/>
            </div>
        </div>
    </>

export default HomeScreenPostContentComponent;