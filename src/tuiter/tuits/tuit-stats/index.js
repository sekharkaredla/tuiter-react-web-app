import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();

    const updateLikeDislike = (like) => {
        let newPost

        if (like) {
            newPost = {
                ...post,
                liked: true,
                likes: post.likes + 1
            }
        } else {
            newPost = {
                ...post,
                dislikes: post.dislikes + 1
            }
        }
        dispatch(updateTuitThunk(newPost))
    }

    return (<>
            <div className="row">
                <div className="col-2 pt-2">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="fa-solid fa-comment"></i> {post.replies}
                    </a>
                </div>
                <div className="col-2 pt-2">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="fa fa-retweet" aria-hidden="true"></i> {post.retuits}
                    </a>
                </div>
                <div className="col-2 pt-2" onClick={() => {
                    updateLikeDislike(true);
                }}>
                    <a className="text-decoration-none text-secondary">
                        <i className={`fa-solid fa-heart ${post.liked ? "text-danger" : ""}`}></i> {post.likes}
                    </a>
                </div>
                <div className="col-2 pt-2" onClick={() => {
                    updateLikeDislike(false);
                }}>
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="fa-solid fa-thumbs-down"></i> {post.dislikes}
                    </a>
                </div>
                <div className="col-2 pt-2">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="fa fa-upload" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default TuitStats;