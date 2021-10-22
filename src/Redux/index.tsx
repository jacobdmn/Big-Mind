import store from "./store";
import { USERS } from "./database";
import { SCREAMS } from "./database";
import { ACCEPT_FRIENDSHIP_INVITATION } from "./actions/actions";
import { POST_SCREAM } from "./actions/actions";

const Index = () => {
  //   store.dispatch(ACCEPT_FRIENDSHIP_INVITATION(20));
  //   store.dispatch(ACCEPT_FRIENDSHIP_INVITATION(3));

  //   // show accepted IDs
  //   console.log(store.getState());

  //   const acceptedProfiles = store
  //     .getState()
  //     .map((friendIndex) =>
  //       console.log(USERS.find((user) => user.userId === friendIndex)?.fullName)
  //     );
  //   console.log(acceptedProfiles);

  //   SCREAMS.forEach(({ screamContent: { text } }) => console.log(text));

  store.dispatch(POST_SCREAM(20, { text: "HOLAAA" }));
  store.dispatch(POST_SCREAM(3, { text: "HOLAAA" }, "Washington TC"));

  // console.log(SCREAMS);
  console.log(store.getState());

  //   store.subscribe(( => {

  //   }))
  //
  ///

  //
  //
  //

  return <>HI</>;
};

export default Index;
