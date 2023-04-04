import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function MiNavbar() {
  return (

    

    <Navbar  style={{background:"#EF42A3", height:130}}>
      <Container >
      <Navbar.Brand href="#home"> <img src="../img/remove.png" alt="Gollostore" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link  href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <Nav.Link href="#home">Salud</Nav.Link>
           
            <NavDropdown title="Tienda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Diadema</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Warm Palace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Electroacupuntura</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lampara</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">EagleBrand</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mascarilla</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separador</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Contactenos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
  );
}

export default MiNavbar;

