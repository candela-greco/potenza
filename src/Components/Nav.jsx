import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

function Navegador () {
  return (
    <div className="nav-wrapper">
      <div className="logo-wrapper">
        <div className="logo">
          <img src="/assets/potenza.jpg" alt="Logo potenza" className="logo-img" />
        </div>
      </div>

      <Navbar expand="lg" className="nav">
        <Container>
          <div className="navegacion">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" to="/">Inicio</NavLink>
                <NavLink className="nav-link" to="/Institucional">Institucional</NavLink>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item 
                    as={NavLink} 
                    to="/Productos"
                  >
                    Acción 1
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    as={NavLink} 
                    to="/productos/accion2"
                  >
                    Acción 2
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    as={NavLink} 
                    to="/productos/accion3"
                  >
                    Acción 3
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item 
                    as={NavLink} 
                    to="/Distribuidores"
                  >
                    Distribuidores
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navegador;
