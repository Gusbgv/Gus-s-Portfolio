import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h6> Designed & Developed by Gustavo Garcia-Vargas</h6><br />
      <h6>Copyright © {new Date().getFullYear()} GGV</h6>
      <div className='footerLinks'>
        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
        <a href='mailto:gustavobgv27@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer;
