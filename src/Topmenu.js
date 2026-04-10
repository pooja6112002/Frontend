import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';

function TopMenu(props) {

  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/Login");
  };

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
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            {!isDashboard ? (
              <>
                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                <Nav.Link as={Link} to="/About">About</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                {/* <Nav.Link as={Link} to="/Studentnew">Student</Nav.Link>
                <Nav.Link as={Link} to="/Product">Product</Nav.Link> */}
              </>
            ) : (
              <Nav.Link onClick={handleLogout} style={{ color: "red" }}>
                Logout
              </Nav.Link>
            )}

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default TopMenu;

