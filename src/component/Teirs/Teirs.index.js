import './Teirs.style.css';
import { useEffect, useState, useRef } from 'react';

const Teirs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     ([entry]) => {
    //       setIsVisible(entry.isIntersecting);
    //     },
    //     {
    //       rootMargin: '0px', // No margin
    //       threshold: 0.5 // Trigger when 50% of the element is visible
    //     }
    //   );
  
    //   const elementsToAnimate = document.querySelectorAll(
    //     ".list-item",
    //   );
  
    //   elementsToAnimate.forEach((el) => observer.observe(el));
  
    //   return () => {
    //     elementsToAnimate.forEach((el) => observer.unobserve(el));
    //     observer.disconnect();
    //   }
    // }, []);

    return (
        <div className='Teirs block'>
            <div className='Teirs-content block-content'>
                <div className='Teirs-inner'>
                    <h1>Teir Offerings</h1>
                    {/* list-item from left and right abruptly collide from far 
                        with static center item, on reveal
                        */}
                    <p>MagmaMinds offers four teirs for content creation. Each video over 1,000 views counts toward monthly quota, with sales guaranteed or your money back. </p>
                    
                    {/* <p></p> */}
                    <div className='teirs-list-parent'>
                        <div className='teirs-list'>
                            <div className={`list-item text-part left bronze ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Bronze
                                </div>
                                <div className='item-lower'>
                                    <span>30 videos / month</span> <br />
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
                                {/* <div className='item-lower'>
                                    <span>First-class support</span> <br />
                                </div> */}
                            
                                <div className='item-price'>
                                    <b>$1050</b>

                                    {/* <b>$560</b> */}
                                    {/* <b>$375</b> */}
                                </div>
                            </div>
                            <div className={`list-item text-part left-inner silver ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Silver
                                </div>
                                <div className='item-lower'>
                                    <span>60 videos / month</span><br />
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
                                    <b style={{textDecoration:''}}>$2075</b>
                                    {/* <b style={{textDecoration:''}}>$1500</b> */}
                                    {/* <b style={{marginLeft: '10px'}}>$1800</b> */}
                                </div>
                            </div>
                            <div className={`list-item text-part right-inner gold ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Gold
                                </div>
                                <div className='item-lower'>
                                    <span>90 videos / month</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>60 hours of live / month</span><br />
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
                                {/* <div className='item-lower'>
                                    <span>First-class support</span><br />
                                </div> */}
                                
                                <div className='item-price'>
                                    {/* <b>$1800</b> */}
                                    <b>$3250</b>
                                </div>
                            </div>
                            <div className={`list-item text-part right plat ${isVisible ? 'animate' : 'animate'}`}>
                                <div className='item-upper'>
                                    Platinum
                                </div>
                                <div className='item-lower'>
                                    <span>180 videos / month</span><br />
                                </div>
                                <div className='item-lower'>
                                    <span>100 hours of live / month</span><br />
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
                                {/* <div className='item-lower'>
                                    <span>First-class support</span><br />
                                </div> */}
                                
                                <div className='item-price'>
                                    {/* <b>$2850</b> */}
                                    <b>$5550</b>
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