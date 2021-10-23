import React from "react";
import "./style/Screams.css";
import { connect } from "react-redux";

import Scream from "./Scream";

const Screams: React.FC = (props) => {
  return (
    <div className='Screams'>
      {/*
      {props.allScreams.map((scream) => (
        <Scream key={scream.screamId} {...scream} />
      ))}
      */}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  allScreams: [...state.screamingReducer],
});
export default connect(mapStateToProps, null)(Screams);
