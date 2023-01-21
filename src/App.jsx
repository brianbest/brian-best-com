import React from 'react'
import Bio from './Bio';
import ProfileImage from './ProfileImage';
import Grid from '@mui/material/Grid';

function App() {
    return (
        <Grid container 
        spacing={2} 
        justifyContent="center"
        alignItems="center"
        className='main-grid'>
            <Grid item sm={12} md={4}>
                <ProfileImage className='photo' />
            </Grid>
            <Grid item sm={12} md={4}>
                <Bio className="bio" />
            </Grid>
        </Grid>
    );
}

export default App;