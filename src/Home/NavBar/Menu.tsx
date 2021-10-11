import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import HomeIcon from "@mui/icons-material/Home";
import ForumIcon from "@mui/icons-material/Forum";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

export default function TypographyMenu() {
  return (
    <Paper className='Menu'>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon fontSize='large' />
          </ListItemIcon>
          <Typography variant='inherit'>Home</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ForumIcon fontSize='large' />
          </ListItemIcon>
          <Typography variant='inherit'>Messenger</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <GroupAddIcon fontSize='large' />
          </ListItemIcon>
          <Typography variant='inherit'>Find People</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SportsEsportsIcon fontSize='large' />
          </ListItemIcon>
          <Typography variant='inherit'>Games</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LiveTvIcon fontSize='large' />
          </ListItemIcon>
          <Typography variant='inherit'>TV Show</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocalGroceryStoreIcon fontSize='large' />
          </ListItemIcon>
          <Typography variant='inherit'>Marketplace</Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
