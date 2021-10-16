import React, { useState, useRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import {
  styles,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./style/style";

import NewResults from "./NewResults";

const SearchResults = () => {
  let resultsNumber = 10;
  const [show, setShow] = useState(false);
  const refSearchInput = useRef<HTMLInputElement>(null);

  const handleShow = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    //// input value: refSearchInput.current.childNodes[0].value
    if (resultsNumber) setShow(true);
    else return;
  };

  const handleClickAway = () => {
    setShow(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          width: "clamp(200px, 35vw, 600px) !important",
          position: "relative",
          transition: "all .2s ease-in",
          display: "flex",
          // flexDirection: "column",
          marginRight: "2vw",
          justifyContent: "flex-end",
          flexDirection: "row",
          // width: "80%",
          "&:hover, &:focus": {
            width: "clamp(200px, 40vw, 600px) !important",
          },
        }}>
        <Search>
          <SearchIconWrapper style={{ zIndex: 1 }}>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search for people, movies, or games…'
            inputProps={{ "aria-label": "search" }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              handleShow(e)
            }
            ref={refSearchInput}
          />
        </Search>
        {show ? (
          <Box sx={styles}>
            {resultsNumber > 0 ? <NewResults /> : <h4>No results</h4>}
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export default SearchResults;
