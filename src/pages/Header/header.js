import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import './header.css';

function Header() {


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" ><img src={require('../../photos/logo.png')} alt='logo' id='logo' /></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavLink exact={true.toString()} to="/" className="nav-link" >Home</NavLink>

            <NavLink exact={true.toString()} to="/dtf" className="nav-link" >DTF</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default Header;
