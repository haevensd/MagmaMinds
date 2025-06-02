import './Footer.style.css';
import { useEffect, useState, useRef } from 'react';

const Footer = () => {
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
        ".intro-call-btn",
      );
  
      elementsToAnimate.forEach((el) => observer.observe(el));
  
      return () => {
        elementsToAnimate.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      }
    }, []);

    return (
        <div className="Footer">
            <div className="Footer-content">
                <div className="Footer-inner">
                    <h4>So what are you waiting for? Take the step today and see how MagmaMinds can help your business make it to the next level!</h4>
                    <button style={{margin:'30px 0'}} className={`intro-call-btn ${isVisible ? 'animate': ''}`}>Schedule an Intro Call Today!</button>
                </div>
                <div>
                    {/* All rights reserved by, MagmaMinds */}
                </div>
            </div>
        </div>
    )
}

export default Footer;