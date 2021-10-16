import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./style/header.css";
import Logout from "../../Log/Logout";
import DropDownMenu from "./DropDownMenu";
import SearchResults from "./SearchResults";

export default function Header() {
  return (
    <header>
      <Box
        sx={{
          flexGrow: 1,
        }}>
        <AppBar
          position='static'
          sx={{
            backgroundColor: "rgb(253, 253, 253)",
            color: "rgb(28, 58, 95)",
            boxShadow: "2px 0 10px -1px #f2f3f4",
            paddingBlock: "0.7em",
          }}>
          <Toolbar>
            {/* icon logo */}
            <img
              src='./imgs/_bigmid_files_/logo/favicon.png'
              alt=''
              width='50'
            />

            {/* text logo */}
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ display: { xs: "none", sm: "block" } }}>
              Big Mind
            </Typography>

            {/* Separator bar */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Search bar */}
            <SearchResults />

            {/* Notification Bar  */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* invits/messages/notifs */}
              <DropDownMenu componentName='Invits' />
              <DropDownMenu componentName='Messages' />
              <DropDownMenu componentName='Notifications' />

              {/* Logout button */}
              <Logout />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
