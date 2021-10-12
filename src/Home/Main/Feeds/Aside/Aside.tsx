import React from "react";
import Invits from "../Invits/Invits";
import Contacts from "../Contacts/Contacts";
import "./css/Aside.css";
import Divider from "@mui/material/Divider";

const Aside = () => {
  return (
    <aside>
      <div className='Invits-Container'>
        <h3>REQUESTS</h3>
        <Invits />
      </div>
      <Divider
        style={{
          margin: "1em auto",
          width: "90%",
          borderTop: "1px solid rgba(0,0,0,0.2)",
        }}
      />
      <div className='Contacts-Container'>
        <h3>CONTACTS</h3>
        <Contacts />
      </div>
    </aside>
  );
};

export default Aside;
