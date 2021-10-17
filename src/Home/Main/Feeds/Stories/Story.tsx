import * as React from "react";

const Story: React.FC<{
  id: number;
  fullName: string;
  userAvatar: string;
  story: string;
  handleClick: () => unknown;
}> = ({ fullName, userAvatar, story, id, handleClick }) => {
  return (
    <>
      <div
        className='Story'
        style={{ backgroundImage: `url('${story}')` }}
        onClick={handleClick}>
        <div
          className='Avatar-Story'
          style={{ backgroundImage: `url('${userAvatar}')` }}></div>
        <h4 className='Story-title'>{fullName.split(" ")[0]}</h4>
      </div>
    </>
  );
};

export default Story;
