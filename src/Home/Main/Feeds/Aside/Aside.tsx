import React from "react";
import Invits from "../Invits/Invits";
import Contacts from "../Contacts/Contacts";
import "./css/Aside.css";

const Aside = () => {
  return (
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
  );
};

export default Aside;
