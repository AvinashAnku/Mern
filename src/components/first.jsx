import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import im2 from '../images/adrianna-geo-1rBg5YSi00c-unsplash.jpg'
import im3 from '../images/alice-donovan-rouse-yu68fUQDvOI-unsplash.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function First() {
  return (
    /*
    <div className='text-center'>
      
    <Container>
      <Row>
        <Col xs={1} md={4}>
          <Image src={im1} style={{width:'100%',height:'100%'}} thumbnail/>
        </Col>
        <Col xs={1} md={4}>
          <Image src={im2} style={{width:'100%',height:'100%'}} thumbnail/>
        </Col>
        <Col xs={1} md={4}>
          <Image src={im3} style={{width:'100%',height:'100%'}} thumbnail />
        </Col>
      </Row>
    </Container>
    </div>*/
    <div className="d-flex justify-content-around">
          <h2>What's more at ART</h2>
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={im3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={im2} />
      <Card.Body>
       <Card.Title>Image2</Card.Title>
       <Card.Text>Explanations about the given picture </Card.Text>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
  </div>
  );
}

export default First;