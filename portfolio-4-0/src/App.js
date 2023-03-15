import React from 'react' ;
import './app.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom' ;
import Home from './components/Home' ;
import Contact from './components/Contact';
import Header from './components/Header';
import Project from './components/Project';
import ProjectGallery from './components/ProjectGallery';



function App() {
    return (
        
        <div className='app' >
        <Header />

            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Home' element={<Home />} />
                <Route path="ProjectGallery" element={<ProjectGallery />} />
                <Route path="Project" element={<Project />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
        
        
        </div>
        
    )
    
}

export default App;