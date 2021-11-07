import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { StyledAvatar } from "./../../../style/styledComponents";
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { StyledScream } from "./style/styledComponents";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/";

const RecipeReviewCard: React.FC<{
  screamId: number;
  userId: number;
  screamContent: { text: string; img?: string; location?: string };
  createdAt: string;
}> = ({ screamId, userId, screamContent, createdAt }) => {
  const USER_OWNER = useSelector((state: any) => state.usersReducer).find(
    (user: any) => user.userId === userId
  );

  const StyledSpan = styled("span")({
    marginLeft: ".3em",
    fontSize: ".9em",
    fontWeight: 400,
  });

  const StyledInteractionButton = styled(IconButton)({
    borderRadius: "4px",
  });
  return (
    <div className='Scream'>
      <StyledScream>
          <CardHeader
          className='CardHeader'
          avatar={<StyledAvatar src={USER_OWNER.userAvatar} />}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Box sx={{display: "flex",gap: "0.1em", fontWeight: 'bold !important'}}>
            {USER_OWNER.fullName}
            <VerifiedUserIcon sx={{
                  color: "#1976d2",
            }} />
            </Box>
          }
          subheader={`${screamContent.location || ""} at: ${createdAt}`}
          />
        <CardContent className='screamBody' component='div'>
          <Typography variant='body2' color='rgba(0, 0, 0, 0.7)'>
            {screamContent.text}
          </Typography>
        </CardContent>
        {screamContent.img && (
          <CardMedia
            className='imgBody'
            component='img'
            image={screamContent.img}
            alt=''
            // sx={{
            //         borderRadius: ".5em",
            // }}
          />
        )}
        <CardActions
          disableSpacing
          sx={{
            gap: "1em",
            flexWrap: "wrap",
          }}>
          <StyledInteractionButton aria-label='add to favorites'>
            <FavoriteIcon />
            <StyledSpan>Like</StyledSpan>
          </StyledInteractionButton>
          <StyledInteractionButton aria-label='add a comment'>
            <ChatBubbleOutlineOutlinedIcon />
            <StyledSpan>Comment</StyledSpan>
          </StyledInteractionButton>
          <StyledInteractionButton aria-label='share'>
            <ShareIcon />
            <StyledSpan>Share</StyledSpan>
          </StyledInteractionButton>
        </CardActions>
      </StyledScream>
    </div>
  );
};

export default RecipeReviewCard;
