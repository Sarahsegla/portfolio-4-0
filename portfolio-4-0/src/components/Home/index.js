
import React from 'react';
import './Home.css';
import Me from '../Assets/me.jpg'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'black',
    padding: theme.spacing(1),
    textAlign: 'center',
    
  }));



function Home(props) {
    return (
        <div className='Home' id='HomeID'>
       
        <Box sx={{ flexGrow: 0 }}>
    <Avatar className="MyAvatar" sx={{ width: '350px', height: '350px', display: 'block'}} alt="Image of me" src={Me} />
    </Box>
<Box>
    <h1 className='myName'>Sarah Segla</h1>
    <p className='job'>Front-end developer</p>
</Box>
   
<Box sx={{ flexGrow: 1 }} className='aboutBox' >
<Grid container spacing={2} columns={16}>
  <Grid item  xs={6} md={8}>
    <Item>
    <p className='summary'>Hi, welcome to my portfolio page. I'm Web developer that is committed and has a positive work attitude. Experienced working alone and  in group collaborations.
         Dedicated to improving my skills and learning more to  deliver feature rich websites.</p>
    </Item>
  </Grid>
  <Grid item xs>
    <Item>  
    <div className='MoreInfo' >
            <ul>
                <li>Age: 24</li>
                <li>Experience: 1+</li>
                <li>Location: South Yorkshire, UK</li>
            </ul>
         </div>
    </Item>
  </Grid>
</Grid>
</Box>
        </div>
    );
}

export default Home;