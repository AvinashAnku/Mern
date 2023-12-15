import { Card, Col, Container, Row } from "react-bootstrap";
import '../App.css';
import im1 from '../images/europeana-5TK1F5VfdIk-unsplash.jpg'
import im2 from '../images/jene-stephaniuk--MCrF6hnojU-unsplash.jpg'
import im3 from '../images/egypts-740x416.jpg';


function Second(){
    return(
        <>
        <div className='reveal'>
            <Container>
                <Row>
                    <Col xs={3} md={4}>
                    <img className='im1' src={im1} style={{width:'100%',height:'100%'}}/>
                    </Col>
                    <Col x={3} md={4} >
                    <img src={im2} style={{width:'100%',height:'100%'}}/>
                    </Col>
                    <Col x={3} md={4} >
                    <img src={im3} style={{width:'100%',height:'100%'}}/>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}export default Second;