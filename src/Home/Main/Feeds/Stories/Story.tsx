import * as React from "react";

const Story: React.FC<{
  userId: {
    fullName: string;
    userAvatar: string;
  };
  storySrc: string;
  handleClick: () => unknown;
}> = ({ userId, storySrc, handleClick }) => {
  // alert(storySrc);
  return (
    <>
      <div
        className='Story'
        style={{ backgroundImage: `url('${storySrc}')` }}
        onClick={handleClick}>
        <div
          className='Avatar-Story'
          style={{ backgroundImage: `url('${userId.userAvatar}')` }}></div>
        <h4 className='Story-title'>{userId.fullName.split(" ")[0]}</h4>
      </div>
    </>
  );
};

export default Story;
