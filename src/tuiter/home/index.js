import React from "react";
import postsArray from "./posts.json"
import HomeScreenPost from "../home-screen-post";
import "./index.css";

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