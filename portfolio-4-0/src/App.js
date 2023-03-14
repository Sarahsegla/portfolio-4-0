import React from 'react' ;
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;
import Home from './components/Home' ;
import Contact from './components/Contact';
 import Header from './components/Header';
import Project from './components/Project';
 import ProjectGallery from './components/ProjectGallery';
import Wrapper from './components/Wrapper';


function App() {
    return (
        <Router>
        <>
        <Header />
        <Wrapper>
            <Home />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/ProjectGallery" element={<ProjectGallery />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Wrapper>
        
        </>
        </Router>
    )
    
}

export default App;