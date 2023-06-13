import React from "react";
import './style.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Market = () => {
    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Skinlyst</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarSupportedContent" />
  <Navbar.Collapse id="navbarSupportedContent">
    <Nav className="mr-auto">
      <Nav.Link href="#" active>Home</Nav.Link>
      <Nav.Link href="#">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="navbarDropdown">
        <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>Disabled</Nav.Link>
    </Nav>
    <Form inline className="w-50">
      <FormControl type="search" placeholder="Search" className="mr-sm-2 w-25 float-start" />
      <Button variant="outline-success ml-3 float-start" className="">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    );
}

export default Market;
