import React from "react";
import { NavLink } from "react-router-dom";
// import classes from "./Profile.module.css";
import { Button, TextField } from "@material-ui/core";
import { estyles } from "./Style";
// import { makeStyles } from "@material-ui/core";

export const Profile = () => {
  const classes = estyles();

  return (
    <>
      {/* <h1 className={classes.heading}>Profile component</h1> */}
      <h1>Profile component</h1>
      <h1>
        <NavLink to={"/"}>Home</NavLink>
      </h1>
      <h1 className={classes.wrapper}>
        {" "}
        <TextField className="txt-fld" label="Filled" variant="filled" />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className="clk-btn"
        >
          Click Me
        </Button>
      </h1>
    </>
  );
};