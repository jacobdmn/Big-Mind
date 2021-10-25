import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { StyledAvatar } from "./../../../style/styledComponents";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { StyledScream } from "./style/styledComponents";
import { useSelector } from "react-redux";

const RecipeReviewCard: React.FC<{
  screamId: number;
  userId: number;
  screamContent: { text: string; img?: string; location?: string };
  createdAt: string;
}> = ({ screamId, userId, screamContent, createdAt }) => {
  const CURRENT_USER = useSelector((state: any) => state.currentUserReducer);
  return (
    <div className='Scream'>
      <StyledScream>
        <CardHeader
          className='CardHeader'
          avatar={<StyledAvatar src={CURRENT_USER?.userAvatar} />}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={CURRENT_USER?.fullName}
          subheader={screamContent.location}
        />
        {screamContent.img && (
          <CardMedia
            className='imgBody'
            component='img'
            image={screamContent.img}
            alt=''
          />
        )}
        <CardContent className='screamBody' component='div'>
          <Typography
            variant='body2'
            color='rgba(0, 0, 0, 0.7)'
            sx={{
              marginBottom: "1em !important",
            }}>
            {screamContent.text}
          </Typography>
          <Typography variant='body2' color='blue'>
            {createdAt}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='add a comment'>
            <ChatBubbleOutlineOutlinedIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </StyledScream>
    </div>
  );
};

export default RecipeReviewCard;
