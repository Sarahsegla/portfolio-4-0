import React from 'react' ;
import MyProject from '../../myProject.json';
import "./styles.css";


function Project(props) {
    return (
        <div className='Project'>
            <h1 className='title' >My Projects</h1>
        

        <div className='inside'>
{
    MyProject && MyProject.map( Project => {
        return(
            <div className='box' key={ Project.id }>
                <img  className='projectImage' src={process.env.PUBLIC_URL + Project.image } alt=' project'  />
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

export default Project;