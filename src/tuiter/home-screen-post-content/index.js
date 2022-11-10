import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const HomeScreenPostContentComponent = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <>
            <div className="row">
                <div className="fw-bolder text-white float-start line">
                    {post.userName} <i className="fa-solid fa-circle-check"></i>
                    <span className="text-secondary">&nbsp;&nbsp;{post.handle} . {post.time}</span>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                </div>
                <div className="text-white">{post.tuit}</div>
            </div>
        </>
    );
}

export default HomeScreenPostContentComponent;