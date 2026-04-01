import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterB from "./FooterB";

function SoftechSlider() {
  return (
    <>
     
      <Container fluid className="p-0">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1400&q=80"
              alt="Softech"
              style={{ height: "550px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>SOFTECH</h3>
              <p>Technical Training Institute</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1400&q=80"
              alt="Courses"
              style={{ height: "550px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Industry Oriented Courses</h3>
              <p>Python | Java | Web Development</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
              alt="IT Career"
              style={{ height: "550px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Build Your Career</h3>
              <p>Practical Technical Training</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Card className="border-0 shadow h-100">
              <Card.Header className="bg-primary text-white fw-bold">
                📰 News & Events
              </Card.Header>
              <Card.Body>
                <div className="d-flex mb-3 border-start border-4 border-primary ps-3">
                  <div className="me-3 text-center">
                    <div className="fw-bold text-primary">15</div>
                    <small>Feb</small>
                  </div>
                  <div>
                    <strong>C & C++ New Batch</strong>
                    <p className="mb-0 text-muted">Admissions Open</p>
                  </div>
                </div>

                <div className="d-flex mb-3 border-start border-4 border-success ps-3">
                  <div className="me-3 text-center">
                    <div className="fw-bold text-success">20</div>
                    <small>Mar</small>
                  </div>
                  <div>
                    <strong>Python & Java</strong>
                    <p className="mb-0 text-muted">Industry Oriented Training</p>
                  </div>
                </div>

                <div className="d-flex border-start border-4 border-warning ps-3">
                  <div className="me-3 text-center">
                    <div className="fw-bold text-warning">01</div>
                    <small>Apr</small>
                  </div>
                  <div>
                    <strong>Full Stack Development</strong>
                    <p className="mb-0 text-muted">Live Projects Included</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="border-0 shadow h-100">
              <Card.Header className="bg-dark text-white fw-bold">
                📢 Announcements
              </Card.Header>
              <Card.Body className="bg-light">
                <div className="p-3 mb-3 bg-white shadow-sm rounded">
                  🔥 <strong>20% Discount for First 10 Students</strong>
                </div>
                <div className="p-3 mb-3 bg-white shadow-sm rounded">
                  💻 <strong>Fully Equipped Computer Labs</strong>
                </div>
                <div className="p-3 mb-3 bg-white shadow-sm rounded">
                  👨‍🏫 <strong>Learn with Industry Experts</strong>
                </div>
                <div className="p-3 bg-white shadow-sm rounded">
                  📚 <strong>Extra Classes & Revision Batches</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    
      <Container className="mt-5">
        <Row>
          {[
            { title: "React JS", icon: "⚛️", text: "Beginner to Advanced", color: "primary" },
            { title: "Java", icon: "☕", text: "Live Project Based", color: "success" },
            { title: "Python", icon: "🐍", text: "Data Science Included", color: "warning" },
            { title: "Web Development", icon: "🌐", text: "Frontend + Backend", color: "danger" }
          ].map((course, index) => (
            <Col md={3} key={index}>
              <Card className="course-card text-center border-0 shadow h-100">
                <Card.Body>
                  <div className={`course-icon bg-${course.color} text-white mb-3`}>
                    {course.icon}
                  </div>
                  <h6 className="fw-bold">{course.title}</h6>
                  <p className="text-muted small">{course.text}</p>
                  <Button variant={`outline-${course.color}`} size="sm" className="me-2">
                    Details
                  </Button>
                  <Button variant={course.color} size="sm">
                    Enroll
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <FooterB />
    </>
  );
}

export default SoftechSlider;






