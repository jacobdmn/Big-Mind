import React, { useState, useEffect } from "react";
import "./style/Screams.css";
// import { useSelector } from "react-redux";

import Scream from "./Scream";
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from "../../../../firebase";

const Screams: React.FC = (props) => {
  // const screamsFromStore = useSelector((state: any) => state.screamingReducer);

  const [screams, setScreams] = useState<any>([{}]);

  useEffect(
    () =>
      onSnapshot(collection(db, "screams"), (snap: any) => {
        snap.docs.map((doc: any) => {
          setScreams((prev: typeof screams) => [
            ...prev,
            { screamID: doc.id, ...doc.data() },
          ]);
          console.log(screams);
        });
      }),
    []
  );

  return (
    <div className='Screams'>
      {screams.length > 0 ? (
        screams.map((scream: any) => (
          // <Scream key={scream.screamID} {...scream} />
          <></>
        ))
      ) : (
        <h3
          style={{
            textAlign: "center",
            margin: "2em",
          }}>
          No new screams..
        </h3>
      )}
    </div>
  );
};

export default Screams;
