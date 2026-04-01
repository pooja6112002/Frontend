import "./Mystyle.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <Container >
      <Row >
        <Col >
          <h2>Contact Us</h2>
        </Col>
      </Row>

      <Row>
       <Col md={6} >
          <Card >
            <Card.Body>
              <Card.Title>Get in Touch</Card.Title>

              <Form>
                <Form.Group >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message" />
                </Form.Group>

                <Button variant="primary" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        
        <Col md={6}>
          <Card >
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>

              <p><strong>Address:</strong> Sirsa, Haryana, India</p>
              <p><strong>Email:</strong> info@example.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>

              <p >
                Office Hours: <br />
                Mon – Fri: 9:00 AM – 5:00 PM
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default Contact;
