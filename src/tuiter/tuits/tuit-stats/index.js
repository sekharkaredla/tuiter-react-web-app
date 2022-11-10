import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();

    return (<>
            <div className="row">
                <div className="col-3 pt-2">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="fa-solid fa-comment"></i> {post.replies}
                    </a>
                </div>
                <div className="col-3 pt-2">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="fa fa-retweet" aria-hidden="true"></i> {post.retuits}
                    </a>
                </div>
                <div className="col-3 pt-2" onClick={() => {
                    let newPost = {
                        ...post
                    }
                    newPost.liked = !post.liked

                    let newLikes = newPost.likes
                    if (newPost.liked) {
                        newLikes += 1
                    } else {
                        newLikes -= 1
                    }

                    dispatch(updateTuitThunk({
                        ...newPost,
                        likes: newLikes
                    }))
                }}>
                    <a className="text-decoration-none text-secondary">
                        <i className={`fa-solid fa-heart ${post.liked ? "text-danger" : ""}`}></i> {post.likes}
                    </a>
                </div>
                <div className="col-3 pt-2">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="fa fa-upload" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default TuitStats;