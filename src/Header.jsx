import React from 'react';
import Bio from './Bio';
import ProfileImage from './ProfileImage';
import Grid from '@mui/material/Grid';

const Header = () => {
  return (
    <header>
      <Grid container 
        spacing={2} 
        justifyContent="center"
        alignItems="center"
        className='main-grid'>
            <Grid item sm={6} justifyContent="center"
        alignItems="center">
                <ProfileImage className='photo' />
            </Grid>
            <Grid item sm={2} justifyContent="center"
        alignItems="center">
                <Bio className="bio" />
            </Grid>
        </Grid>
    </header>
  );
};

export default Header;
