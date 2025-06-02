import logo from '../../asset/image/logo.svg';
import './Main.style.css';
import Nav from '../../.trash/Nav/Nav.index';
import Footer from '../Footer/Footer.index';
import HWW from '../HWW/HWW.index';
import Teirs from '../Teirs/Teirs.index';
import Refunds from '../Refunds/Refunds.index';
import Cover from '../Cover/Cover.index';
import AboutUs from '../AboutUs/AboutUs.index';

function Main() {
  return (
    <div className="Main">
      {/* <Nav></Nav> */}
      <div className='Main-content'>
        <Cover></Cover>
        <HWW></HWW>
        <Teirs></Teirs>
        <AboutUs> </AboutUs>
        <Refunds></Refunds>
        <Footer></Footer>
        {/* <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>
            All rights reserved by MagmaMinds
            </span>
            <div>links</div>
        </div> */}
      </div>
    
    </div>
  );
}

export default Main;
