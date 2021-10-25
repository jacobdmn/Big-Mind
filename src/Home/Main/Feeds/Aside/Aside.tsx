import React, { useState } from "react";
import Invits from "../Invits/Invits";
import Contacts from "../Contacts/Contacts";
import "./css/Aside.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";

const Aside = () => {
  const [showInvits, setShowInvits] = useState(true);

  const invits = useSelector(
    (state: any) => state.friendshipListReducer.USER_INVITATIONS_COPIE
  );

  return (
    <aside>
      {invits.length > 0 && showInvits && (
        <>
          <span className='closeIcon'>
            <HighlightOffIcon onClick={() => setShowInvits(false)} />
          </span>
          <Invits />
          <Divider
            style={{
              margin: "1em auto",
              width: "100%",
            }}
          />
        </>
      )}

      <Contacts />
    </aside>
  );
};

export default Aside;
