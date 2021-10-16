import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Story: React.FC<{
  fullName: string;
  userAvatar: string;
  story: string;
}> = ({ fullName, userAvatar, story }) => {
  
  const [open, setOpen] = React.useState(false);
  
  const handleOpenBackdrop = () => {
    setOpen(true);
  }
  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='Story' style={{ backgroundImage: `url('${story}')`, cursor: 'pointer' }} onClick={handleOpenBackdrop}>
        <div
          className='Avatar-Story'
          style={{ backgroundImage: `url('${userAvatar}')` }}>
        </div>
        <h4 className='Story-title'>{fullName.split(" ")[0]}</h4>
      </div>
      <Backdrop
          sx={{ color: "#fff", zIndex: 1000 }}
          open={open}
          >
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className='Story' style={{ backgroundImage: `url('${story}')`, cursor: 'pointer' }}>
              <div
                className='Avatar-Story'
                style={{ backgroundImage: `url('${userAvatar}')` }}>
              </div>
              <h4 className='Story-title'>{fullName.split(" ")[0]}</h4>
            <CircularProgress color='inherit' />
            </div>
        </ClickAwayListener>
      </Backdrop>
    </> 
  );
};

export default Story;
