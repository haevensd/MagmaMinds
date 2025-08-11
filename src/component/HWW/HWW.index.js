import './HWW.style.css';
import { useEffect, useState, useRef } from 'react';

    
const HWW = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     ([entry]) => {
    //       setIsVisible(entry.isIntersecting);
    //     },
    //     {
    //       rootMargin: '0px', // No margin
    //       threshold: 0.75 // Trigger when 50% of the element is visible
    //     }
    //   );
  
    //   const elementsToAnimate = document.querySelectorAll(
    //     ".list-item", ".next-step", "intro-call-btn", "HWW-header"
    //   );
  
    //   elementsToAnimate.forEach((el) => observer.observe(el));
  
    //   return () => {
    //     elementsToAnimate.forEach((el) => observer.unobserve(el));
    //     observer.disconnect();
    //   }
    // }, []);

    return (
        <div className='HWW block'>
            <div className='HWW-content block-content'>
                <div className='HWW-inner'>
                    <h1 className={`HWW-header ${isVisible ? 'animate' : ''}`}>How it works</h1>{/* Slide in gently but surely, from left-side */}
                    <div className='list'>
                        <div className={`list-item ${isVisible ? 'animate' : ''}`}>
                            <img alt="hand-visual" src={require(`../../asset/image/picking.png`)} height={50} width={50} />
                            <div>
                                <h3>Pick a Plan</h3>
                                <p>Choose a plan best for your needs.</p>
                            </div>
                        </div>
                        {/* Arrow here, fade-in first (1-2 second delay) */}
                        <img className={`next-step ${isVisible ? 'animate' : ''}`} src={require(`../../asset/image/fast-forward.png`)} height={40} width={40}  style={{marginTop: ''}}/>
                        <div className={`list-item ${isVisible ? 'animate' : ''}`} style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-5px'}}>
                            <img alt="truck-visual" src={require(`../../asset/image/delivery.png`)} height={50} width={50}  />
                            <div >
                                <h3>We Deliver Media</h3>
                                <p>We ship posts and ads marketing your brand.</p>
                            </div>
                        </div>
                        {/* Second arrow here, fade-in after 2-3 second delay */}
                        <img className={`next-step delayed ${isVisible ? 'animate' : ''}`} src={require(`../../asset/image/fast-forward.png`)} height={40} width={40}  style={{marginTop: ''}}/>
                        <div className={`list-item ${isVisible ? 'animate' : ''}`}>
                        <img alt="money-visual" src={require(`../../asset/image/coin.png`)} height={50} width={50}  />
                            <div>
                                <h3>Drive You Sales</h3>
                                <p>Customers gravitate towards brands they see often, <i>et puis</i> sales.</p>
                            </div>
                        </div>

                    </div>
                    {/* add pulse animation here */}
                    <a target='blank' style={{textDecoration: 'none', marginTop: '20px'}} href="https://calendly.com/magmaminds/30min" className={`intro-call-btn ${isVisible ? 'animate' : ''}`}>Schedule an Intro Call Today!</a>
                </div>
            </div>
        </div>
    )
}

export default HWW;
