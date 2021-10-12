import React from "react";
import Stories from "./Stories";
import NewScream from "./NewScream";
import Screams from "./Screams";
import Invits from "./Invits";
import Contacts from "./Contacts";

const Feeds = () => {
  return (
    <>
      <main>
        <Stories />
        <NewScream />
        <Screams />
      </main>
      <aside>
        <div className='Invits-Container'>
          <h3>REQUESTS</h3>
          <Invits />
        </div>

        <div className='Contacts-Container'>
          <h3>CONTACTS</h3>
          <Contacts />
        </div>
      </aside>
    </>
  );
};

export default Feeds;
