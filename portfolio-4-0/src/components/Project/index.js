import React from 'react' ;
import MyProject from '../../myProject.json';
//import ".styles.css";

function Project(props) {
    return (
        <div className='Project'>
            <h1>My Projects</h1>
        

        <div className='inside'>
{
    MyProject && MyProject.map( Project => {
        return(
            <div className='box' key={ Project.id }>
                <img src={ Project.image } />
                { Project.caption }
                </div>
        )
    })
}
        </div>
        </div>
    )
}

export default Project;