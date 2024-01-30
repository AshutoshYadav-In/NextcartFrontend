import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="Home-Footer">
      <div className="Home-Footer-Upper">
        <p>Contact Developer</p>
        <div className="Home-Footer-Upper-ContentContainer">
          <div className="Home-Footer-Upper-ContentContainer-Child1">
            <div>
              <img src="https://res.cloudinary.com/deeji7ttf/image/upload/v1706339303/Nextcartassets/l2ar6zznkqmqxorjben5.jpg" alt="" />
              <a
                href="https://ashutoshyadav-in.github.io/Portfolio/#"
                target="blank"
              >
                Ashutosh Yadav
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:ashisopmain@gmail.com" target="blank">
                ashisopmain@gmail.com
              </a>
            </div>
          </div>
          <div className="Home-Footer-Upper-ContentContainer-Child2">
            <p>Socials:</p>
            <div className="Home-Footer-Upper-ContentContainer-Child2-Icons-Container">
              <a
                href="https://www.instagram.com/ashbeing.ash/"
                target="_blank"
                className="Social-Icons-Container"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <p>Instagram</p>
              </a>
              <a
                href="https://github.com/AshutoshYadav-In"
                target="_blank"
                className="Social-Icons-Container"
              >
                <FontAwesomeIcon icon={faGithub}/>
                <p>Github</p>
              </a>
              <a
                href="https://www.linkedin.com/in/ashutoshyadav18/"
                target="_blank"
                className="Social-Icons-Container"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <p>LinkedIn</p>
              </a>
              <a
                href="tel:8307109697"
                target="_blank"
                className="Social-Icons-Container"
              >
                <FontAwesomeIcon icon={faPhone} />
                <p>8307109697</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Home-Footer-Lower">
        <p>&copy; 2023 NextCart. All rights reserved </p>
      </div>
    </div>
  );
}

export default Footer;
