import logo from './assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
/* bootstrap_react */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark " expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img alt="logo" src={logo} width="30" height="30" className="d-inline-block align-top img-fluid " /> Freelo ECOM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-start">
            <Nav.Link as={Link} to={`/category/procesador`} className={({ isActive }) => (isActive ? 'ActionOption' : 'Option')}>
              Procesadores
            </Nav.Link>
            <Nav.Link as={Link} to={`/category/mother`} className={({ isActive }) => (isActive ? 'ActionOption' : 'Option')}>
              Mothers
            </Nav.Link>
            <Nav.Link as={Link} to={`/category/placa`} className={({ isActive }) => (isActive ? 'ActionOption' : 'Option')}>
              Placas de video
            </Nav.Link>
            <div className="text-light d-flex justify-content-start align-items-center ">
              <CartWidget />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
