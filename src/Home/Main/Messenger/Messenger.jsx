import React from "react";
import { auth } from "./../../../firebase";
import { ChatEngine } from "react-chat-engine";

const Messenger = () => {
  // const currentUser = useSelector((state) => state.currentUserReducer);

  return (
    <main>
      <div
        className='Chat__Container'
        style={{
          maxHeight: "calc((100vh - 86px) - min(2vw, 1em) - 1em)",
          overflow: "hidden",
        }}>
        <ChatEngine
          height={"calc((100vh - 86px) - min(2vw, 1em) - 1em)"}
          projectID='1369a0e9-3f10-4042-b741-1d8d4e1e5037'
          userName={auth.currentUser.email}
          userSecret={auth.currentUser.uid}
        />
      </div>
    </main>
  );
};

export default Messenger;
