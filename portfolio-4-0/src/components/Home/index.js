
import React from 'react';
import './Home.css';
// import  Mountain from '../Assets/john-towner-JgOeRuGD_Y4-unsplash.jpg' ;
// import CssBaseline from '@mui/material/CssBaseline';
import Me from '../Assets/me.jpg'
//import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';


function Home(props) {
    return (
        <div className='Home' id='HomeID'>
       
        <Box sx={{ flexGrow: 0 }}>
    <Avatar className="MyAvatar" sx={{ width: '350px', height: '350px', display: 'block'}} alt="Image of me" src={Me} />
    </Box>


        </div>
    );
}

export default Home;