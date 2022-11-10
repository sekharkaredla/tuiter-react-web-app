import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import TuitItem from "../tuit-item";
import WhatsHappening from "./whats-happening";
import {findTuitsThunk} from "../../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <>
            <WhatsHappening/>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(eachPost =>
                    <TuitItem {...eachPost} />)
            }
        </>
    );
}

export default TuitList;