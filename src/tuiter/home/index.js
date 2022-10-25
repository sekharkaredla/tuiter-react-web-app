import React from "react";
import postsArray from "./posts.json"
import HomeScreenPost from "../tuits/tuit-item";
import "../tuits/tuit-list/index.css";

const HomeComponent = () => {
    return (
      <>
          {
              postsArray.map(eachPost =>
                  <HomeScreenPost {...eachPost} /> )
          }
      </>
    );
}

export default HomeComponent;