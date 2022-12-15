import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import "./style.css";

const ButtonsGroup = () => {
  return (
    <div className="row">
      <ButtonGroup aria-label="primary button group">
        <Button size="small" className="type-btn">
          Pixelated
        </Button>
        <Button size="small" className="type-btn">
          Blur
        </Button>
        <Button size="small" className="type-btn">
          Deep natural
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonsGroup;
