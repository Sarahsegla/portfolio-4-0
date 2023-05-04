import React from 'react' ;
import './app.css';
import { Routes, Route } from 'react-router-dom' ;
import Home from './components/Home' ;
import Contact from './components/Contact';
import Header from './components/Header';
import Project from './components/Project';
import ProjectGallery from './components/ProjectGallery';



function App() {
    return (
        
        <div >
        <Header />
        <div className='path'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Home' element={<Home />} />
                <Route path="ProjectGallery" element={<ProjectGallery />} />
                <Route path="Project" element={<Project />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
            </div>
        </div>
        
    )
    
}

export default App;