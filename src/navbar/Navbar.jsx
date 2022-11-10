import React from "react";
import "./style.css";

import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

import { ButtonGroup, DropdownButton } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            ANONIMI
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-center centered-nav">
            <Nav>
              <NavDropdown title="Features" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#link">Pricing</Nav.Link>

              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <ButtonGroup className="btn-group">
                <button className="btn-login">LOG IN</button>
                <Nav.Link href="register">
                  <button className="btn-register">Try for free</button>{" "}
                </Nav.Link>

                <DropdownButton title="LN">EN</DropdownButton>
              </ButtonGroup>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
