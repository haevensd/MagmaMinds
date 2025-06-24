import './AboutUs.style.css';
import { useEffect, useState, useRef } from 'react';

const AboutUs = () => {
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
    //     ".about-list-item",
    //   );
  
    //   elementsToAnimate.forEach((el) => observer.observe(el));
  
    //   return () => {
    //     elementsToAnimate.forEach((el) => observer.unobserve(el));
    //     observer.disconnect();
    //   }
    // }, []);

    return (
        <div className='AboutUs'>
            <div className='AboutUs-content'>
                <div className='AboutUs-inner'>
                    <h1>About Us</h1>
                    <div className='about-list'>
                        <div className={`about-list-item ${isVisible ? 'animate' : ''} fadeInUp-animation`}>
                        <img style={{margin: 'auto'}} alt='Goal/target visual' src={require('../../asset/image/target.png')} height={50} width={50} />
                            <h2>Our Mission</h2>
                            <p>Our mission at MagmaMinds is to bring opportunity to every facet of the market,
                            seeing both consumer and business thriving is our ultimate goal. </p>
                        </div>
                        <div className={`about-list-item ${isVisible ? 'animate' : ''} fadeInUp-animation-1`}>
                        <img style={{margin: 'auto'}} alt='shining star visual' src={require('../../asset/image/star.png')} height={50} width={50} />
                            <h2>Our Values</h2>
                            <p>At MagmaMinds we value customer satisfaction over all.
If our clients aren't happy, we are not happy. That's why
we offer Money Back Guarantee on all of our plans—
so there's no risk involved. We take care of you,
so you can take care of your business.</p>
                        </div>
                        <div className={`about-list-item ${isVisible ? 'animate' : ''} fadeInUp-animation-2`}>
                        <img style={{margin: 'auto'}} alt='map marker visual' src={require('../../asset/image/maps-and-flags.png')} height={50} width={50} />
                            <h2>Our Approach</h2>
                            <p>MagmaMinds loves working with creators who have
family-like followings-- loyal followers with a
tight-knit community encourage video virality and are of the highest quality
for driving sales. </p>
                        </div>
                        <div className={`about-list-item ${isVisible ? 'animate' : ''} fadeInUp-animation-3`}>
                        <img style={{margin: 'auto'}} alt='handshake visual' src={require('../../asset/image/handshake.png')}  height={50} width={50} />
                            <h2>Our Standards</h2>
                            <p>MagmaMinds only works with brands we trust, that means no misleading products
or advertising, but it also means we are extremely choicey with who we partner.
If you're a company that is looking for a long-term relationship with first-class support
and unbeatable standards, we are for you.</p>
                        </div>
                    </div>
                    <a style={{textDecoration: 'none'}} target='blank' href="https://calendly.com/magmaminds/30min" className={`intro-call-btn ${isVisible ? '' : ''}`}>Schedule an Intro Call Today!</a>

                </div>
            </div>
        </div>
    )
}

export default AboutUs;