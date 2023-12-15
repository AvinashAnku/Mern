import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import lg from '../images/artlogo.png';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header><img src={lg} style={{width:'20px',height:'20px'}}/></Card.Header>
      <Card.Body>
        <Card.Title>Reach US</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Ⓒ 2023 ART STUDIOS.</Card.Footer>
    </Card>
  );
}

export default Footer;