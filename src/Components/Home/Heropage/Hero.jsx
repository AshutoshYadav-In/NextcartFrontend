import React from "react";
import "./Hero.css";
import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { appContext } from '../../../App';
function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { scrollRef } = useContext(appContext);
  const navbarheight = window.innerWidth < 1200 && window.innerWidth >0 ? 50 : 60;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleScroll = ()=>{
    const scrollPosition = scrollRef.current.offsetTop - navbarheight;
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }
  const options = {
    nav:false,
    loop:true,
  dots:true,
    autoplay:true,
    autoplayTimeout:3500,
    responsive:{
        0:{
            items:1
        },
        310:{
          items:1
      },
        420:{
          items:2
      },
        576:{
            items:2
        },
        768:{
          items:3
      },
      992:{
        items:1
    },
  
        1100:{
            items:1
        }
    }
};
  return (
    <div className="Home-Hero">
      <div className="Home-Hero-Left">
        <p>Welcome to NextCart,</p>
        <p>Where Shopping Meets Convinience! </p>
        <p>Shop Smart, Shop Live - The Sale is On</p>
        <div className="Home-Hero-Left-Buttoncon"  onClick={handleScroll}>
          <button>Shop Now</button>
          <FontAwesomeIcon icon={faArrowDown} style={{ color: "#fff" }} />
        </div>
      </div>
      {window.innerWidth< 992 && (
        <div className="Home-Hero-Middle">
          <p>Latest Trends</p>
        </div>
      )}
      <div className="Home-Hero-Right">
      <OwlCarousel  className='owl-theme' {...options}>
      <div className="Home-Hero-Right-Imagecon">
              <img src="https://res.cloudinary.com/deeji7ttf/image/upload/v1706338401/Nextcartassets/e4vldlmfrlo71bolbpl3.jpg" alt="Image" />
            </div>
            <div className="Home-Hero-Right-Imagecon">
              <img src="https://res.cloudinary.com/deeji7ttf/image/upload/v1706336711/Nextcartassets/y8bcwmslbwnht27fiver.png" alt="Image" />
            </div>
            <div className="Home-Hero-Right-Imagecon">
              <img src="https://res.cloudinary.com/deeji7ttf/image/upload/v1706339046/Nextcartassets/peenkeabxr7n115kdkb6.png" alt="Image" />
            </div>
            <div className="Home-Hero-Right-Imagecon">
              <img src="https://res.cloudinary.com/deeji7ttf/image/upload/v1706336747/Nextcartassets/s87oiofi3uq4iqtz2kvl.jpg" alt="Image" />
            </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Hero;
