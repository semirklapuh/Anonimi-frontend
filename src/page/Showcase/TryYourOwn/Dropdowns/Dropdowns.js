import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import "./style.css";

const Dropdowns = () => {
  return (
    <div className="dropdowns">
      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">Object</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Faces</Dropdown.Item>
          <Dropdown.Item href="#">Licence plates</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">Mode</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Blur</Dropdown.Item>
          <Dropdown.Item href="#">Pixelated</Dropdown.Item>
          <Dropdown.Item href="#">Deep natural</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="btn-div">
        <Button>Anonymize</Button>
      </div>
    </div>
  );
};

export default Dropdowns;
