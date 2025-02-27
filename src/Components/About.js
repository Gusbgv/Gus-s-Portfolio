import React from 'react';
import Tilt from 'react-parallax-tilt';
import Me from '../images/me.png'; // Import your photo

const About = () => {
  return (
    <div className='AboutPage'>
      <div className='AboutText'>
        <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
        <p>
          I am a <b>Student Lead Desktop Support Technician</b> at Kean University, 
          passionate about <b>UI/UX design, image segmentation, and IT support</b>. 
          I enjoy <b>coding, creating digital art, and designing engaging user experiences</b>.<br /><br />

          My skillset includes <b>Python, Java, JavaScript, CSS, HTML, MySQL, and PHP</b>.  
          I also love <b>working on creative projects</b> like game development and website design.<br /><br />

          Outside of work, I enjoy <b>running, hitting the gym</b>, and listening to <b>music</b> to stay active and motivated.<br /><br />
        </p>
      </div>

      {/* Image Below the Text */}
      <div className="AboutImageContainer">
        <Tilt>
          <img className="aboutImage" src={Me} alt="Gustavo Garcia Vargas" />
        </Tilt>
      </div>
    </div>
  )
}

export default About;
