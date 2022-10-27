import React from "react";
import "./index.css";
import TuitItem from "../tuit-item";
import {useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";

const TuitList = () => {
    const tuitsArray = useSelector((state) => state.tuitsReducer);
    return (
        <>
            <WhatsHappening/>
            {
                tuitsArray.map(eachPost =>
                    <TuitItem {...eachPost} /> )
            }
        </>
    );
}

export default TuitList;