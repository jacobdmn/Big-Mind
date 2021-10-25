import * as React from "react";

const Story: React.FC<{
  userInfos: {
    fullName: string;
    userAvatar: string;
  };
  storySrc: string;
  handleClick: () => unknown;
}> = ({ userInfos, storySrc, handleClick }) => {
  return (
    <>
      <div
        className='Story'
        style={{ backgroundImage: `url('${storySrc && storySrc}')` }}
        onClick={handleClick}>
        <div
          className='Avatar-Story'
          style={{ backgroundImage: `url('${userInfos.userAvatar}')` }}></div>
        <h4 className='Story-title'>{userInfos.fullName.split(" ")[0]}</h4>
      </div>
    </>
  );
};

export default Story;
