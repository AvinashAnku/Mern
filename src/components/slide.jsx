import Carousel from 'react-bootstrap/Carousel';
import s1 from '../images/art_gallery-wallpaper-2560x1024.jpg';
import s2 from '../images/Untitled.jpg';
import s3 from '../images/adrianna-geo-1rBg5YSi00c-unsplash.jpg'
import '../App.css';

function Style() {
  return (
    <Carousel data-bs-theme="gray" className='text-center'>
      <Carousel.Item  className='text-center'>
        <img src={s1} style={{width:'100%',height:'70vh'}}/>
        <Carousel.Caption>
          <h3>Welcome</h3>
          <p>To the world of ART.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Style;