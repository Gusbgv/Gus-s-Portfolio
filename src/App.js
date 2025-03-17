import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import Resume from './Components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatbox from './Components/Chatbox';

function App() {
  const[Loading, SetLoading] = useState(true);

  useEffect(()=>{
    SetLoading(true);

    setTimeout(()=>{
      SetLoading(false);
    },1900);
  },[])  

  return (
    <>
      {Loading ? (
        <div className="loader"> 
          <HashLoader
            color={'#9067C6'}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />  
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
          <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

          <Nav/>
          <MoveToTop/>
          
          {/* Place Chatbox Component */}
          <Chatbox />  {/* You placed it here, it will show on all pages */}

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Project" element={<Project/>}/>
            <Route path="/Resume" element={<Resume/>} />
          </Routes>
          
          <Footer/>
        </div>
      )}
    </>
  );
}

export default App;
