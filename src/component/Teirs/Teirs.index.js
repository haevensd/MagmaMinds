import './Teirs.style.css';
import { useEffect, useState, useRef } from 'react';

const Teirs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          rootMargin: '0px', // No margin
          threshold: 0.5 // Trigger when 50% of the element is visible
        }
      );
  
      const elementsToAnimate = document.querySelectorAll(
        ".list-item",
      );
  
      elementsToAnimate.forEach((el) => observer.observe(el));
  
      return () => {
        elementsToAnimate.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      }
    }, []);

    return (
        <div className='Teirs block'>
            <div className='Teirs-content block-content'>
                <div className='Teirs-inner'>
                    <h1>Our Plans</h1>
                    {/* list-item from left and right abruptly collide from far 
                        with static center item, on reveal
                        */}
                    //<p>MagmaMinds offers three plans. Each video over 1,000 views counts toward monthly quota, with sales guaranteed or your money back. </p>
                    
                    {/* <p></p> */}
                    <div className='teirs-list-parent'>
                        <div className='teirs-list'>
                            
                            <div className={`list-item text-part left-inner silver ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Silver
                                </div>
                                <div className='item-lower'>
                                    <span>1 custom post / week</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>1 promoted post / week</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>1 always-on ad campaign </span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>Monthly performance review</span><br />
                                </div>
                              

                                <div className='item-price'>
                                    <b style={{textDecoration:''}}>$500</b>
                                    {/* <b style={{textDecoration:''}}>$1500</b> */}
                                    {/* <b style={{marginLeft: '10px'}}>$1800</b> */}
                                </div>
                            </div>
                            <div className={`list-item text-part right-inner gold ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Gold
                                </div>
                                <div className='item-lower'>
                                    <span>5 custom post / week</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>5 promoted post / week</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>5 daily-running ads (new audience + retargeting) </span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>Strategy call + performance report</span><br />
                                </div>
                              
                                
                                <div className='item-price'>
                                    {/* <b>$1800</b> */}
                                    <b>$1000</b>
                                </div>
                            </div>
                            <div className={`list-item text-part right plat ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Platinum
                                </div>
                                <div className='item-lower'>
                                    <span>10 custom post / week</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>10 promoted post / week</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>10 active ad campaigns (new leads + return visits) </span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>Strategy call + performance report</span><br />
                                </div>
                                    <div className='item-lower'>
                                    <span>Biweekly check-ins</span><br />
                                </div>
                                 <div className='item-lower'>
                                    <span>Full analytics + ROI breakdown</span><br />
                                </div>
                                {/* <div className='item-lower'>
                                    <span>First-class support</span><br />
                                </div> */}
                                
                                <div className='item-price'>
                                    {/* <b>$2850</b> */}
                                    <b>$1500</b>
                                </div>
                            </div>
                        </div>
                    {/* <h1 style={{marginTop: '100px'}}>Teir Offerings  - Live Only</h1>
        
                    <div className='teirs-list-parent'>
                        <div className='teirs-list'>
                            <div className={`list-item text-part left bronze ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Bronze
                                </div>
                                <div className='item-lower'>
                                    <span>15 hours of live / month</span> <br />
                                </div>
                                <div className='item-lower'>
                                    <span>High-quality audiences</span> <br />
                                </div>
                                <div className='item-lower'>
                                    <span>Choice creators</span> <br />
                                </div>
                                <div className='item-lower'>
                                    <span>First-class support</span> <br />
                                </div>
                                <div className='item-lower'>
                                    <span>Guaranteed sales*</span> <br />
                                </div>
                            
                                <div className='item-price'>
                                    <b>$500</b>
                                </div>
                            </div>
                            <div className={`list-item text-part left-inner silver ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Silver
                                </div>
                                <div className='item-lower'>
                                    <span>30 hours of live / month</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>High-quality audiences</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>Choice creators</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>First-class support</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>Guaranteed sales*</span><br />
                                </div>

                                <div className='item-price'>
                                    <b style={{textDecoration:''}}>$1200</b>
                                </div>
                            </div>
                            <div className={`list-item text-part right-inner gold ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Gold
                                </div>
                                <div className='item-lower'>
                                    <span>45 hours of live / month</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>High-quality audiences</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>Choice creators</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>First-class support</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>Guaranteed sales*</span><br />
                                </div>
                                <div className='item-price'>
                                    <b>$1800</b>
                                </div>
                            </div>
                            <div className={`list-item text-part right plat ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Platinum
                                </div>
                        
                                <div className='item-lower'>
                                    <span>75 hours of live / month</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>High-quality audiences</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>Choice creators</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>First-class support</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>Guaranteed sales*</span><br />
                                </div>
                             
                                
                                <div className='item-price'>
                                    <b>$2200</b>
                                </div>
                            </div>
                        </div>
                        </div> */}

                        <div className='teir-note' >
                            <p>- Video & Live-only / custom pricing solutions available per your company's unique requirements</p>
                            <a href="#money-back-guarantee">*See Money Back Guarentee section for more information.</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Teirs;
