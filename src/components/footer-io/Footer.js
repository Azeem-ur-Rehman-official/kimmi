import React from "react";
import { Container } from "react-bootstrap";

import {
  discordLogoAsset,
  footerLogoAsset,
  instaLogoAsset,
  twitterLogoAsset,
  emailLogoAsset,
  phoneLogoAsset,
  facebookLogoAsset,
} from "../../assets/Index";

const Footer = () => {
  return (

      <container>
        <div
          className="d-flex justify-content-center align-items-center footer bg-white p-3 w-100 mt-5"
        
      >
        <span className="attrate mx-2">©</span>
        <p className="fs-10 fw-300 text-dark footer-text">All Rights Reserved 2023</p>
        </div>
      </container>
   
  );
};

export default Footer;
