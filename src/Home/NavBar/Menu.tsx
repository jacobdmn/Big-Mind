import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTv";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import Badge from "@mui/material/Badge";

export default function TypographyMenu() {
  return (
    <Paper className='Menu'>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <HomeOutlinedIcon fontSize='large' />
          </ListItemIcon>
          <Typography variant='inherit'>Home</Typography>
        </MenuItem>
        <MenuItem className='activeLink'>
          <ListItemIcon>
            <Badge badgeContent={4} color='primary'>
              <ForumOutlinedIcon fontSize='large' />
            </Badge>
          </ListItemIcon>
          <Typography variant='inherit'>Messenger</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge color='primary'>
              <GroupAddOutlinedIcon fontSize='large' />
            </Badge>
          </ListItemIcon>
          <Typography variant='inherit'>Find People</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge badgeContent={10} color='success'>
              <SportsEsportsOutlinedIcon fontSize='large' />
            </Badge>
          </ListItemIcon>
          <Typography variant='inherit'>Games</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge badgeContent={8} color='success'>
              <LiveTvOutlinedIcon fontSize='large' />
            </Badge>
          </ListItemIcon>
          <Typography variant='inherit'>Movies</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge badgeContent={130} color='success'>
              <LocalGroceryStoreOutlinedIcon fontSize='large' />
            </Badge>
          </ListItemIcon>
          <Typography variant='inherit'>Marketplace</Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
