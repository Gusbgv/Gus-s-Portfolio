import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import { CiCoffeeCup } from "react-icons/ci";
import Flower from '../images/flower.png'; // Import the flower image

const Home = () => {
  return (
    <div>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>GUSTAVO GARCIA VARGAS</b></h1>
          <Typed />
        </div>

        {/* Replace astronaut animation with Flower image */}
        <Tilt>
          <img className="illustration" src={Flower} alt="Flower Illustration" />
        </Tilt>

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am a <b>Student Lead Desktop Support Technician</b> at Kean University, 
            passionate about <b>UI/UX design, image segmentation, and IT support</b>. 
            I enjoy <b>coding, creating digital art, and designing engaging user experiences</b>.<br /><br />

            My skillset includes <b>Python, Java, JavaScript, CSS, HTML, MySQL, and PHP</b>.  
            I also love <b>working on creative projects</b> like game development and website design.<br /><br />

            Outside of work, I enjoy <b>running, hitting the gym</b>, and listening to <b>music</b> to stay active and motivated.<br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />   
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
