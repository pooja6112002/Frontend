import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function TopMenu(props) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
       
        <Navbar.Brand as={Link} to="/">
  <img
    src="/Softech.logo.jpg"
    alt="Softech Logo"
    height="60"
    width="60"
    className="d-inline-block align-top rounded-circle"
  />
  <h3>{props.cname}</h3>
  <h3>{props.teacherName}</h3>
</Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
             <Nav.Link as={Link} to="/Studentnew">Student</Nav.Link>
             <Nav.Link as={Link} to="/Product">Product</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default TopMenu;

