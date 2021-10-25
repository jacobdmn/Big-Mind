import React from "react";
import List from "@mui/material/List";
import Contact from "./Contact";
import ChatBox from "./ChatBox.jsx";
import { useSelector } from "react-redux";

const Contacts = () => {
  const CURRENT_USER = useSelector((state: any) => state.currentUserReducer);
  const users = useSelector((state: any) => state.usersReducer);

  const contacts = useSelector(
    (state: any) => state.friendshipListReducer.USER_FRIENDS_COPIE
  );

  React.useEffect(() => {});
  /// is chating
  const [isChating, setIsChating] = React.useState(false);

  const [secondPartUser, setSecondPartUser] = React.useState({
    id: 1,
    name: "",
    avatar: "",
  });
  const hideChatBox = () => {
    setIsChating(false);
  };
  const openChatBox = (id: number, name: string, avatar: string) => {
    setSecondPartUser({ id, name, avatar });
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
                      openChatBox(user.id, user.fullName, user.userAvatar)
                    }
                  />
                ))}
          </List>
        </div>
        <ChatBox
          isChating={isChating}
          hideChatBox={hideChatBox}
          firstPartUser={CURRENT_USER}
          secondPartUser={secondPartUser}
        />
      </div>
    </>
  );
};

export default Contacts;
