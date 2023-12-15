import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Slide from './components/slide';
import 'react-bootstrap'
import First from './components/first';
import Second from './components/second';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header/>
      <Slide/><br/>
      <First/><br/>
      <div className='sec' style={{width:'100%',height:'20vh'}}></div><br/>
      <Second/>
      <Footer/>
    </>
  );
}

export default App;
