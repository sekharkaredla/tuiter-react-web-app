import React from "react";
import "./index.css";
import TuitItem from "../tuit-item";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitsArray = useSelector((state) => state.tuitsReducer);
    return (
        <>
            {
                tuitsArray.map(eachPost =>
                    <TuitItem {...eachPost} /> )
            }
        </>
    );
}

export default TuitList;