import "./css/Feeds.css";
import React from "react";
import Stories from "./Stories/Stories";
import NewScream from "./NewScream/NewScream";
import Screams from "./Screams/Screams";
import Aside from "./Aside/Aside";

const Feeds = () => {
  return (
    <>
      <main>
        <Stories />
        <NewScream />
        <Screams />
      </main>
      <Aside />
    </>
  );
};

export default Feeds;
