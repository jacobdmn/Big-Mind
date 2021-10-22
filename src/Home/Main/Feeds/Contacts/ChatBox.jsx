import React from "react";

import { ChatBox } from "react-chatbox-component";
// import "../lib/style.css";
import "react-chatbox-component/dist/style.css";

import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ChatBoxWraper = ({
  isChating,
  hideChatBox,
  firstPartUser,
  secondPartUser,
}) => {
  const messages = [
    {
      text: "Hello there",
      id: "1",
      sender: {
        name: firstPartUser.name,
        uid: "user1",
        avatar: firstPartUser.avatar,
      },
    },
    {
      text: "Hi Mr. Stark",
      id: "2",
      sender: {
        name: secondPartUser.name,
        uid: "user2",
        avatar: secondPartUser.avatar,
      },
    },
    {
      text: "Hello Spiderman, how are you today?",
      id: "3",
      sender: {
        name: firstPartUser.name,
        uid: "user1",
        avatar: firstPartUser.avatar,
      },
    },
  ];

  const user = {
    uid: "user1",
  };

  return (
    <div
      className={isChating ? "ChatBox container active" : "ChatBox container "}>
      <div className='chat-header'>
        <div className='ChatBoxheader'>
          <img className='avatar' src={secondPartUser.avatar} alt='' />
          <h4>{secondPartUser.name}</h4>
          <ArrowForwardIcon onClick={hideChatBox} />
        </div>
        <Divider
          style={{
            margin: "1em auto",
            width: "100%",
          }}
        />
      </div>
      <ChatBox messages={messages} uid={user} />
    </div>
  );
};

export default ChatBoxWraper;
