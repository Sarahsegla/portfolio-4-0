import React from 'react' ;
import  AppBar  from '@mui/material/AppBar';
import { Button } from '@material-ui/core';
//import Tpyography from '@material/typography/mdc-typography'
// import '' ;


// Instantiation

function Header(props) {
    return (
    <div>
        <AppBar>
            <h1>SarahSegla</h1>
            <Button variant="text">Home</Button>
        </AppBar>
    </div>
    )
}



export default Header ;