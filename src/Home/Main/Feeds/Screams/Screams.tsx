import React from "react";
import "./style/Screams.css";
import { useSelector } from "react-redux";

import Scream from "./Scream";

const Screams: React.FC = (props) => {
  const screamsFromStore = useSelector((state: any) => state.screamingReducer);

  return (
    <div className='Screams'>
      {screamsFromStore.length > 0 ? (
        screamsFromStore.map((scream: any) => (
          <Scream key={scream.screamId} {...scream} />
        ))
      ) : (
        <h3>No new screams..</h3>
      )}
    </div>
  );
};

export default Screams;
