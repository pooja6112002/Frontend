import "./Mystyle.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";          
import { Link } from "react-router-dom"
import TopMenu from "./Topmenu";
import Softech from "./Softech";
import Newcomp from "./Newcomp";
import Newcomp2 from "./Newcomp2";


function HeaderB(props) {
  return (
    <div>
      {/* <Newcomp2 /> */}
      {/* <Newcomp /> */}
   {/* <Softech name="vansh" /> */}
    <TopMenu  cname={props.companyname} />
    
    

        {/*}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
          </Nav>
          */
    
    </div>
  
  );
}

export default HeaderB;


 