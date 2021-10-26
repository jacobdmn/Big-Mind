import React from "react";

import { ChatBox } from "react-chatbox-component";
// import "../lib/style.css";
import "react-chatbox-component/dist/style.css";

import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";

const ChatBoxWraper = ({ isChating, hideChatBox, secondPartUser }) => {
  const CURRENT_USER = useSelector((state) => state.currentUserReducer);
  const messages = useSelector((state) =>
    state.userMessagesReducer.USER_MESSAGES.find(
      (box) => box.with === secondPartUser.userId
    )
  );
  return (
    <div className={"ChatBox container " + (isChating && "active")}>
      <div className='chat-header'>
        <div className='ChatBoxheader'>
          <img className='avatar' src={secondPartUser.userAvatar} alt='' />
          <h4>{secondPartUser.fullName}</h4>
          <ArrowForwardIcon onClick={hideChatBox} />
        </div>
        <Divider
          style={{
            margin: "1em auto",
            width: "100%",
          }}
        />
      </div>
      <ChatBox
        messages={messages.messageBox.map(({ messageId, text, senderId }) => {
          const user1 = senderId === CURRENT_USER.userId;
          return {
            id: messageId,
            text,
            sender: {
              name: user1
                ? CURRENT_USER.fullName.split(" ")[0]
                : secondPartUser.fullName.split(" ")[0],
              uid: user1 ? "user1" : "user2",
              avatar: user1
                ? CURRENT_USER.userAvatar
                : secondPartUser.userAvatar,
            },
          };
        })}
        onSubmit={(e) => alert(e.target.value)}
        isLoading={false}
        onChange={() => {}}
      />
    </div>
  );
};

export default ChatBoxWraper;
