// import ReactDom from "react-dom";
import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Slickchart</Navbar.Brand>
        {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
      </Navbar>
    );
  }
}
