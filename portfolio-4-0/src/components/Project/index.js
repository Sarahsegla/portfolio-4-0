import React from 'react' ;
import MyProject from '../../myProject.json';
import "./styles.css";
import Button from '@mui/material/Button';



function Project(props) {
    return (
        <div className='Project'>
            <h1 className='title'>My Projects</h1>
        

        <div className='inside'>
{
    MyProject && MyProject.map( Project => {
        return(
            <div className='box' key={ Project.id }>
                <img src={Project.image } alt='project' className='projectImage' />
               <Button className='caption' variant="outlined" color="error"><a href={ Project.url}>  { Project.caption }</a> </Button>
               <Button className='git' variant="outlined" color="error"> <a href={ Project.GitUrl}> Checkout my GitHub Repository</a> </Button>
                </div>
        )
    })
}
        </div>
        </div>
    )
}

export default Project;