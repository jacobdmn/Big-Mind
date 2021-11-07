import React, { useState, useEffect } from "react";
import "./style/Screams.css";
// import { useSelector } from "react-redux";

import Scream from "./Scream";
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from "../../../../firebase";

const Screams: React.FC = (props) => {
  // const screamsFromStore = useSelector((state: any) => state.screamingReducer);

  const [screams, setScreams] = useState<any>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const snapshotingScreams = () => {
    onSnapshot(collection(db, "screams"), async (snap: any) => {
      let screamsTMP: any[] = [];
      try {
        await snap.docs.map((doc: any) => {
          screamsTMP = [...screamsTMP, { screamId: doc.id, ...doc.data() }];
        });
        setScreams(screamsTMP);
        console.log(screams);
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    snapshotingScreams();
    setLoadingPosts(false);
  }, []);

  return (
    <div className='Screams'>
      {!loadingPosts && screams.length > 0 ? (
        screams.map((scream: any) => (
          <Scream key={scream.screamId} {...scream} />
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
