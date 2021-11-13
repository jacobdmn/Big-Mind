import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { StyledAvatar } from "./../../../style/styledComponents";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { StyledScream } from "./style/styledComponents";
// import { useSelector } from "react-redux";
import { styled } from "@mui/material/";

const RecipeReviewCard: React.FC<{
  screamId: number;
  owner: {
    verified: boolean;
    name: string;
    avatar: string;
  };
  content: { text: string; img?: string; location?: string };
  createdAt: any;
}> = ({ screamId, owner, content, createdAt }) => {
  // const USER_OWNER = useSelector((state: any) => state.currentUserReducer);

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
          sx={{
            alignItems: "flex-start",
          }}
          avatar={<StyledAvatar src={owner.avatar || ""} />}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.1em",
                fontWeight: "bold !important",
              }}>
              {owner.name || ""}
              {owner.verified && (
                <VerifiedUserIcon
                  sx={{
                    color: "#1976d2",
                    width: ".8em",
                  }}
                />
              )}
            </Box>
          }
          subheader={
            <>
              {content.location && (
                <span>
                  {content.location || ""}
                  <br />
                </span>
              )}

              <span style={{ fontSize: ".9em" }}>{createdAt}</span>
            </>
          }
        />
        <CardContent className='screamBody' component='div'>
          <Typography variant='body2' color='rgba(0, 0, 0, 0.7)'>
            {content.text}
          </Typography>
        </CardContent>
        {content.img && (
          <CardMedia
            className='imgBody'
            component='img'
            image={content.img}
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
