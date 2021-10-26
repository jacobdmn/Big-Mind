import React from "react";
import List from "@mui/material/List";
import Contact from "./Contact";
import ChatBox from "./ChatBox.jsx";
import { useSelector } from "react-redux";

const Contacts = () => {
  const users = useSelector((state: any) => state.usersReducer);

  const contacts = useSelector(
    (state: any) => state.friendshipListReducer.USER_FRIENDS_COPIE
  );

  React.useEffect(() => {});
  /// is chating
  const [isChating, setIsChating] = React.useState(false);

  const [secondPartUser, setSecondPartUser] = React.useState({
    userId: 0,
    fullName: "",
    userAvatar: "",
  });
  const hideChatBox = () => {
    setIsChating(false);
  };
  const openChatBox = (
    userId: number,
    fullName: string,
    userAvatar: string
  ) => {
    setSecondPartUser({ userId, fullName, userAvatar });
    setIsChating(true);
  };

  return (
    // <></>

    <>
      <div className='Contacts-Container'>
        <div className='Contacts'>
          <List sx={{ width: "100%" }}>
            {contacts &&
              contacts
                .map((contactID: number) =>
                  users.find((user: any) => user.userId === contactID)
                )
                .map((user: any) => (
                  <Contact
                    key={user.userId}
                    {...user}
                    openChatBox={() =>
                      openChatBox(user.userId, user.fullName, user.userAvatar)
                    }
                  />
                ))}
          </List>
        </div>
        {isChating && (
          <ChatBox
            isChating={isChating}
            hideChatBox={hideChatBox}
            secondPartUser={secondPartUser}
          />
        )}
      </div>
    </>
  );
};

export default Contacts;
