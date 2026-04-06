import "./Mystyle.css";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FooterB from "./FooterB";
import { useNavigate } from "react-router-dom";

  function Login() {

  const navigate = useNavigate();   
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const data = await response.json();

      
if (data.success) {
  sessionStorage.setItem("token", data.tokenval);

  alert("Login Successful");

  navigate("/student");   
} else {
  alert("Invalid Credentials");
}
      

    } catch (error) {
      console.error("Error:", error);
      alert("Server error ");
    }
  };

  return (
    
   
     <div>
      <Container>
      <center>
        <Row>
          <Col md={12}>
            <Card style={{ width: '22rem' }} className="shadow">
              <Card.Body>
                <h3 className="text-center mb-4">Login</h3>

                <Form onSubmit={handleLogin}>

                  <Form.Group className="mb-3">
                    <Form.Label>UserName:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Login
                  </Button>
                </Form>

                <p className="text-center">
                  Don’t have an account? <a href="#">Sign Up</a>
                </p>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </center>
      </Container>
    <FooterB/>
</div>
  
  );
}

export default Login;
// import "./Mystyle.css";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// function Login() {
//   return (
//     <Container >
//       <center>
//       <Row >
//         <Col md={12}>
//           <Card style={{ width: '22rem' }} className="shadow">
//             <Card.Body>
//               <h3 className="text-center mb-4">Login</h3>

//               <Form>
              
//                 <Form.Group className="mb-3">
//                   <Form.Label>UserName:</Form.Label>
//                   <Form.Control
//                     type="Username"
//                     placeholder="Enter username"
//                   />
//                 </Form.Group>

               
//                 <Form.Group className="mb-3">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Enter password"
//                   />
//                 </Form.Group>

               
//                 <Button variant="primary" type="submit" className="w-100">
//                   Login
//                 </Button>
//               </Form>

//               <p className="text-center ">
//                 Don’t have an account? <a href="#">Sign Up</a>
//               </p>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       </center>
//     </Container>
//   );
// }

// export default Login;
