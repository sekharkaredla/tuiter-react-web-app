import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-9 col-xxl-10">
                    <div className="text-secondary">
                        {post.topic}
                    </div>
                    <div className="fw-bolder">
                        {post.userName} <i className="fa-solid fa-circle-check"></i><span className="text-secondary"> - {post.time}</span>
                    </div>
                    <div className="fw-bolder">
                        {post.title}
                    </div>
                </div>
                <div className="col-3 col-xxl-2 align-self-center">
                    <img src={`/images/${post.image}`} className="float-end rounded-2" height="80px"/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;

