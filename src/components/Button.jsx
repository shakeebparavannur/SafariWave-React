import React from "react";
import { Button } from "@mui/material";

const MyButton = (props) => {
  return (
    <div>
      <Button
        className={props.class}
        onClick={props.action}
        variant={props.variant}
        type={props.type}
        name={props.name}
        color={props.color}
      >
        {props.value}
      </Button>
    </div>
  );
};

export default MyButton;
