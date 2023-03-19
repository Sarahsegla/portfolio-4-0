import React from 'react' ;
import "./styles.css";
import Project from '../../projects.json';

function ProjectGallery(props) {
    return (
        <div className='Project'>
        <h1 className='title' >My Project Gallery</h1>
    

    <div className='inside'>
{
Project && Project.map( Project => {
    return(
        <div className='box' key={ Project.id }>
            <img  className='projectImage' src={ process.env.PUBLIC_URL + Project.image }  alt=' project'  />
           <p className='caption' ><a href={ Project.url}>  { Project.caption }</a> </p>
           <p className='git' > <a href={ Project.GitUrl}> Checkout my GitHub Repository</a> </p>
            </div>
    )
})
}
    </div>
    </div> 
    )
    
}

export default ProjectGallery;