import React from 'react' ;
import './app.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom' ;
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
        {/* <Home /> */}
        <Wrapper>
            
            <Routes>
                <Route path='/' element={<Home />} />
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