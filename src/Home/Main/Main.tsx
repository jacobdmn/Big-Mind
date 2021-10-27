import Feeds from "./Feeds/Feeds";
import Messenger from "./Messenger/Messenger";
import FindPeople from "./FindPeople/FindPeople";
import Games from "./Games/Games";
import Music from "./Music/Music";
import Movies from "./Movies/Movies";
import Marketplace from "./Marketplace/Marketplace";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import { Switch, Route } from "react-router-dom";
import "./css/Main.css";

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Feeds} />
      <Route exact path='/Messenger' component={Messenger} />
      <Route exact path='/Find-People' component={FindPeople} />
      <Route exact path='/Games' component={Games} />
      <Route exact path='/Movies' component={Movies} />
      <Route exact path='/Music' component={Music} />
      <Route exact path='/Marketplace' component={Marketplace} />
      <Route exact path='/ProfileSettings' component={ProfileSettings} />
    </Switch>
  );
};

export default Main;
