import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function MediaControlCard() {
  const theme = useTheme();

  const [playing, setPlaying] = React.useState(true);

  React.useEffect(() => {
    const music = new Audio("./songs/avamax.mp3");
    playing ? music.pause() : music.play();
  }, [playing]);

  return (
    <Card
      className='MusicBox'
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        background: "unset",
        boxShadow: "none",
      }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", padding: 0 }}>
          <Typography component='div' variant='h6'>
            Live From Space
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'>
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label='previous'>
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton
            aria-label='play/pause'
            onClick={() => {
              setPlaying((prev) => !prev);
            }}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label='next'>
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
