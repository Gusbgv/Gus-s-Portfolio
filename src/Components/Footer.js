import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>© {new Date().getFullYear()} Gustavo Garcia Vargas</h4>
      <div className='footerLinks'>
        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
        <a href='mailto:gustavobgv27@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer;
