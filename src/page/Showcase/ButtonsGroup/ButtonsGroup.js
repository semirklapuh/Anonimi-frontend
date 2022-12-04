import React from "react";
import { ButtonGroup, Button, Switch, FormControlLabel } from "@mui/material";
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
      <div className="row">
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Anonymize"
        />
      </div>
    </div>
  );
};

export default ButtonsGroup;
