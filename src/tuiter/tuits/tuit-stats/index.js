import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const [localPostState, setLocalPostState] = useState(post);

    const updateLikeDislike = (like) => {
        let newPost

        if (like) {
            newPost = {
                ...localPostState,
                liked: true,
                likes: localPostState.likes + 1
            }
        } else {
            newPost = {
                ...localPostState,
                dislikes: localPostState.dislikes + 1
            }
        }
        setLocalPostState(newPost)
        dispatch(updateTuitThunk(newPost))
    }

    return (<>
            <div className="row">
                <div className="col-2 pt-2">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="fa-solid fa-comment"></i> {localPostState.replies}
                    </a>
                </div>
                <div className="col-2 pt-2">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="fa fa-retweet" aria-hidden="true"></i> {localPostState.retuits}
                    </a>
                </div>
                <div className="col-2 pt-2" onClick={() => {
                    updateLikeDislike(true);
                }}>
                    <a className="text-decoration-none text-secondary">
                        <i className={`fa-solid fa-heart ${localPostState.liked ? "text-danger" : ""}`}></i> {localPostState.likes}
                    </a>
                </div>
                <div className="col-2 pt-2" onClick={() => {
                    updateLikeDislike(false);
                }}>
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="fa-solid fa-thumbs-down"></i> {localPostState.dislikes}
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