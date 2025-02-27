import React from 'react';

const ProjectBox = ({ projectPhoto, projectName, projectDesc }) => {
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            <p>{projectDesc}</p>
            <br />
        </div>
    </div>
  );
}

export default ProjectBox;
