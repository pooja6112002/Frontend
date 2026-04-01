import "./Mystyle.css";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import CloseButton from 'react-bootstrap/CloseButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <div className="footer p-3">

      <h1>I am footer</h1>

      {/* Buttons */}
      <Button variant="success" className="me-2">Success</Button>
      <Button variant="danger" className="me-2">Danger</Button>
      <Button variant="warning">Warning</Button>

      {/* Accordion */}
      <Accordion defaultActiveKey="0" className="mt-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Alert */}
      <Alert variant="danger" className="mt-3">
        This is a danger alert — check it out!
      </Alert>

      {/* Badges */}
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>

      <Badge bg="primary" className="me-1">Primary</Badge>
      <Badge bg="secondary" className="me-1">Secondary</Badge>
      <Badge bg="success" className="me-1">Success</Badge>
      <Badge bg="danger" className="me-1">Danger</Badge>
      <Badge bg="warning" className="me-1">Warning</Badge>
      <Badge bg="info" className="me-1">Info</Badge>
      <Badge bg="dark">Dark</Badge>

      {/* Breadcrumb */}
      <Breadcrumb className="mt-3">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
      </Breadcrumb>

      {/* Button Group */}
      <ButtonGroup className="mb-3">
        <Button variant="danger">Left</Button>
        <Button variant="warning">Middle</Button>
        <Button variant="success">Right</Button>
      </ButtonGroup>

      {/* Card */}
      <Card style={{ width: "18rem" }} className="mb-4">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title.
          </Card.Text>
          <Card.Link href="#">Card link</Card.Link>
          <Card.Link href="#">Another link</Card.Link>
        </Card.Body>
      </Card>
       
      {/* Carousel */}
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/13/09/85/57/360_F_1309855767_1OKmonqdW39IgUzvV5QMF2A1kcuWtMLf.jpg"
            alt="First slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.stockcake.com/public/0/b/a/0ba1c8df-ffa1-4253-910a-912838840094_large/pink-rabbit-outdoors-stockcake.jpg"
            alt="Second slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn-fastly.petguide.com/media/2022/02/16/8214275/florida-white-rabbit.jpg"
            alt="Third slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Close Button */}
      <div data-bs-theme="danger" className="bg-danger p-2 mb-3">
        <CloseButton />
        <CloseButton disabled />
      </div>

      {/* Dropdown */}
      <Dropdown className="mb-4">
        <Dropdown.Toggle variant="success">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Figure */}
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="Sample"
          src="https://via.placeholder.com/171x180"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      {/* image */}

      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://images.stockcake.com/public/0/b/a/0ba1c8df-ffa1-4253-910a-912838840094_large/pink-rabbit-outdoors-stockcake.jpg" rounded />
        </Col>
        
        <Col xs={6} md={4}>
          <Image src="https://images.stockcake.com/public/0/b/a/0ba1c8df-ffa1-4253-910a-912838840094_large/pink-rabbit-outdoors-stockcake.jpg" roundedCircle />
        </Col>
        
        <Col xs={6} md={4}>
          <Image src="https://images.stockcake.com/public/0/b/a/0ba1c8df-ffa1-4253-910a-912838840094_large/pink-rabbit-outdoors-stockcake.jpg" thumbnail />
        </Col>
      </Row>
    </Container>

    {/*List Group */}

    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>

{/*Modal */}

<div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

    {/* Navbar */}

    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>

    

    
    
    
  
    

  );
}

export default Footer;

