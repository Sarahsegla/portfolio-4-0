import React from 'react' ;
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;
import _Home from './components/Home' ;
// import _Contact from './components/Contact';
 import _Header from './components/Header';
// import _Project from './components/Project';
// import _ProjectGallery from './components/ProjectGallery';


function App() {
    return (
        <Router>
        <>
        <_Header />
        <_Home />
        </>
        </Router>
    )
    
}

export default App;