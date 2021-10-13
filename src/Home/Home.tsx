import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "@mui/icons-material/Done";
import "./css/Home.css";

export const handleLoadingAnimation = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  contentDefault: { label: string; icon: JSX.Element },
  setContentDefault: React.Dispatch<
    React.SetStateAction<{
      label: string;
      icon: JSX.Element;
    }>
  >,
  finishThis = () => setTimeout(() => {}, 0)
) => {
  setLoading(true);
  setContentDefault({
    label: "LOADING",
    icon: <CircularProgress />,
  });

  setTimeout(() => {
    setContentDefault({
      label: "DONE",
      icon: <DoneIcon />,
    });
  }, 800);

  //// finish This [u guessed it]
  const task = async () => finishThis();
  task().then(() => {
    setTimeout(() => {
      setContentDefault(contentDefault);
      setLoading(false);
    }, 1500);
  });
  //// return the default content
};

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <div className='body'>
        <NavBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
