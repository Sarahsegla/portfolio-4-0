import React from 'react' ;
import "./styles.css";
import Project from '../../projects.json';
import Button from '@mui/material/Button';

function ProjectGallery(props) {
    return (
        <div className='Project'>
        <h1 className='title' >My Project Gallery</h1>
    

    <div className='inside'>
{
Project && Project.map( Project => {
    return(
        <div className='box' key={ Project.id }>
            <img src={Project.image }  alt=' project'  className='projectImage'/>
           <Button className='caption'variant="outlined" color="error" ><a href={ Project.url}>  { Project.caption }</a> </Button>
           <Button className='git' variant="outlined" color="error"> <a href={ Project.GitUrl}> GitHub Repository</a> </Button>
            </div>
    )
})
}
    </div>
    </div> 
    )
    
}

export default ProjectGallery;