import React, { useState } from "react";
import { StyledAvatar } from "./../../style/styledComponents";
import Divider from "@mui/material/Divider";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 13415,
      fullName: "Maria Miko",
      userAvatar:
        "data:image/jpeg;base64,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",
      msg: "where are you dick",
    },
    {
      id: 3415342,
      fullName: "Moha Dmn",
      userAvatar:
        "data:image/jpeg;base64,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",
      msg: "yoh bitch I finished the project",
    },
  ]);

  return (
    <>
      {messages.map((message) => (
        <>
          <div className='NotificationDiv'>
            <StyledAvatar src={message.userAvatar} />
            <div style={{ lineHeight: 1.5 }}>
              <div className='fullName'>
                <h3>{message.fullName}</h3>
              </div>
              <div style={{ fontWeight: 300 }}>
                {message.msg?.substring(0, 25)}
                {message.msg.length > 25 && "..."}
              </div>
            </div>
          </div>
          <Divider
            style={{
              margin: "1em auto",
              width: "100%",
            }}
          />
        </>
      ))}
    </>
  );
};

export default Messages;
