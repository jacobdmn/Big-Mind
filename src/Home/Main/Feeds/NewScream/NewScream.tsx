import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const NewScream = () => {
  const data = { fullName: "Jacob Dmn", userAvatar: "./imgs/ME_LINKEDIN.jpeg" };
  return (
    <div className='NewScream'>
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete='off'>
        <Avatar alt='' src={data.userAvatar} />
        <TextField
          id='outlined-search'
          label={`What's new ${data.fullName.split(" ")[0]}?`}
          type='search'
        />
        <Button variant='contained'>
          <InsertLinkIcon
            style={{ marginRight: "0.2em", transform: "rotate(-45deg)" }}
          />{" "}
          {"Post It!"}
        </Button>
      </Box>
    </div>
  );
};

export default NewScream;
