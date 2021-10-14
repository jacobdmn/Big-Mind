import * as React from "react";

const Story: React.FC<{
  fullName: string;
  userAvatar: string;
  story: string;
}> = ({ fullName, userAvatar, story }) => {
  return (
    <div className='Story' style={{ backgroundImage: `url('${story}')` }}>
      <div
        className='Avatar-Story'
        style={{ backgroundImage: `url('${userAvatar}')` }}></div>
      <h4 className='Story-title'>{fullName.split(" ")[0]}</h4>
    </div>
  );
};

export default Story;
