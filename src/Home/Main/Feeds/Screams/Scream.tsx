import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { StyledAvatar } from "./../../../Home";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const RecipeReviewCard: React.FC<{
  fullName: string;
  userAvatar: string;
  date: string;
  location: string;
  body: string;
  //   location: string;
  pics: string[];
}> = ({ fullName, userAvatar, date, body, location, pics }) => {
  return (
    <div className='Scream'>
      <Card>
        <CardHeader
          avatar={<StyledAvatar src={userAvatar} />}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={fullName}
          subheader={location}
        />
        <CardMedia component='img' image={pics[0]} alt='Paella dish' />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {body}
          </Typography>
          <Typography variant='body2' color='blue'>
            {date}
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
      </Card>
    </div>
  );
};

export default RecipeReviewCard;
