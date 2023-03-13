
import React from 'react';
import './Home.css';
import  Mountain from '../Assets/john-towner-JgOeRuGD_Y4-unsplash.jpg' ;
import CssBaseline from '@mui/material/CssBaseline';
import Me from '../Assets/me.jpg'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';


function Home(props) {
    return (
        <div className='Home' id='HomeID'>
           <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box>
        <img className='image' src={Mountain} alt="mountain background" />
        <Box sx={{ flexGrow: 0 }}>
    <Avatar sx={{  width: '300px', height: '300px', display: 'block'  }} alt="Image of me" src={Me} />
    </Box>
    </Box>
      </Container>

    </React.Fragment>

        </div>
    );
}

export default Home;