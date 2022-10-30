import React from "react";

const TuitStats = ({post}) =>
    <>
        <div className="row">
            <div className="col-3 pt-2">
                <a href="src/tuiter/tuits/tuit-stats/index#" className="text-decoration-none text-secondary">
                    <i className="fa-solid fa-comment"></i> {post.replies}
                </a>
            </div>
            <div className="col-3 pt-2">
                <a href="src/tuiter/tuits/tuit-stats/index#" className="text-decoration-none text-secondary">
                    <i className="fa fa-retweet" aria-hidden="true"></i> {post.retuits}
                </a>
            </div>
            <div className="col-3 pt-2">
                <a href="src/tuiter/tuits/tuit-stats/index#" className="text-decoration-none text-secondary">
                    <i className="fa-solid fa-heart"></i> {post.likes}
                </a>
            </div>
            <div className="col-3 pt-2">
                <a href="src/tuiter/tuits/tuit-stats/index#" className="text-decoration-none text-secondary">
                    <i className="fa fa-upload" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </>

export default TuitStats;