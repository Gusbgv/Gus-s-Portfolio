import React from 'react';
import ProjectBox from './ProjectBox';
import MemoryGameImage from '../images/MemoryGame.png';
import RockPaperImage from '../images/RockPaper.png';
import TicTacToeImage from '../images/TicTacToe.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox 
          projectPhoto={MemoryGameImage} 
          projectName="Memory Game"
          projectDesc="A fun and interactive card-matching game designed to test memory skills."
        />
        <ProjectBox 
          projectPhoto={RockPaperImage} 
          projectName="Rock Paper Scissors"
          projectDesc="Classic game with an interactive interface and engaging animations."
        />
        <ProjectBox 
          projectPhoto={TicTacToeImage} 
          projectName="Tic-Tac-Toe"
          projectDesc="Simple and fun Tic-Tac-Toe game with a clean UI."
        />
      </div>
    </div>
  );
}

export default Projects;
