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
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/";
import { NavLink } from "react-router-dom";

const StyledDivider = styled(Divider)({
  // marginInline: "1em",
});

export default function TypographyMenu() {
  return (
    <Paper className='Menu'>
      <MenuList>
        <NavLink exact to='/' activeClassName='Menu__NavLink__active'>
          <MenuItem className='first-child'>
            <ListItemIcon>
              <HomeOutlinedIcon fontSize='large' />
            </ListItemIcon>
            <Typography variant='inherit'>Home</Typography>
          </MenuItem>
        </NavLink>
        <StyledDivider />

        <NavLink to='/Messenger' activeClassName='Menu__NavLink__active'>
          <MenuItem>
            <ListItemIcon>
              <Badge badgeContent={4} color='primary'>
                <ForumOutlinedIcon fontSize='large' />
              </Badge>
            </ListItemIcon>
            <Typography variant='inherit'>Messenger</Typography>
          </MenuItem>
        </NavLink>
        <StyledDivider />

        <NavLink to='/Find-People' activeClassName='Menu__NavLink__active'>
          <MenuItem>
            <ListItemIcon>
              <Badge color='primary'>
                <GroupAddOutlinedIcon fontSize='large' />
              </Badge>
            </ListItemIcon>
            <Typography variant='inherit'>Find People</Typography>
          </MenuItem>
        </NavLink>
        <StyledDivider />

        <NavLink to='/Games' activeClassName='Menu__NavLink__active'>
          <MenuItem>
            <ListItemIcon>
              <Badge badgeContent={10} color='success'>
                <SportsEsportsOutlinedIcon fontSize='large' />
              </Badge>
            </ListItemIcon>
            <Typography variant='inherit'>Games</Typography>
          </MenuItem>
        </NavLink>
        <StyledDivider />

        <NavLink to='/Movies' activeClassName='Menu__NavLink__active'>
          <MenuItem>
            <ListItemIcon>
              <Badge badgeContent={8} color='success'>
                <LiveTvOutlinedIcon fontSize='large' />
              </Badge>
            </ListItemIcon>
            <Typography variant='inherit'>Movies</Typography>
          </MenuItem>
        </NavLink>
        <StyledDivider />

        <NavLink to='/Music' activeClassName='Menu__NavLink__active'>
          <MenuItem>
            <ListItemIcon>
              <Badge badgeContent={21} color='success'>
                <MusicNoteOutlinedIcon fontSize='large' />
              </Badge>
            </ListItemIcon>
            <Typography variant='inherit'>Music</Typography>
          </MenuItem>
        </NavLink>
        <StyledDivider />

        <NavLink to='/Marketplace' activeClassName='Menu__NavLink__active'>
          <MenuItem>
            <ListItemIcon>
              <Badge badgeContent={130} color='success'>
                <LocalGroceryStoreOutlinedIcon fontSize='large' />
              </Badge>
            </ListItemIcon>
            <Typography variant='inherit'>Marketplace</Typography>
          </MenuItem>
        </NavLink>
      </MenuList>
    </Paper>
  );
}
