import React from "react";
import Invits from "../Invits/Invits";
import Contacts from "../Contacts/Contacts";
import "./css/Aside.css";

const Aside = () => {
  return (
    <aside>
      <Invits />
      <Contacts />
    </aside>
  );
};

export default Aside;
