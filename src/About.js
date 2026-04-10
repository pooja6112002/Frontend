import "./Mystyle.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FooterB from "./FooterB";

function About() {
  return (
    <div>
    <Container className="about">
      
     
      <Row >
        <Col >
          <h2>About Us</h2>
          <p >
            Learn more about who we are and what we do
          </p>
        </Col>
      </Row>

     
      <Row>
       
        <Col >
          <Card >
            <Card.Body>
              <Card.Title>Who We Are</Card.Title>
              <Card.Text>
                We are a team dedicated to providing quality education and
                practical knowledge in the field of Computer Science and
                Information Technology. Our goal is to help students build
                strong technical skills and succeed in their careers.
                We are a team dedicated to providing quality education and
                practical knowledge in the field of Computer Science and
                Information Technology. Our goal is to help students build
                strong technical skills and succeed in their careers.
                We are a team dedicated to providing quality education and
                practical knowledge in the field of Computer Science and
                Information Technology. Our goal is to help students build
                strong technical skills and succeed in their careers.
                We are a team dedicated to providing quality education and
                practical knowledge in the field of Computer Science and
                Information Technology. Our goal is to help students build
                strong technical skills and succeed in their careers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

       
        <Col>
          <Card >
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to deliver industry-oriented training,
                encourage innovation, and prepare students for real-world
                challenges through workshops, projects, and hands-on learning.
                Our mission is to deliver industry-oriented training,
                encourage innovation, and prepare students for real-world
                challenges through workshops, projects, and hands-on learning.
                Our mission is to deliver industry-oriented training,
                encourage innovation, and prepare students for real-world
                challenges through workshops, projects, and hands-on learning.
                Our mission is to deliver industry-oriented training,
                encourage innovation, and prepare students for real-world
                challenges through workshops, projects, and hands-on learning.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
    <FooterB/>    
    </div>
  );
}

export default About;
