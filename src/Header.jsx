import React from 'react';
import Bio from './Bio';
import ProfileImage from './ProfileImage';
import Grid from '@mui/material/Grid';

const Header = () => {
  return (
    <header>
      <Grid container 
        spacing={4} 
        justifyContent="center"
        alignItems="center"
        className='main-grid'>
            <Grid item sm={12} >
                <ProfileImage className='photo' />
            </Grid>
            <Grid item sm={12}>
                <Bio className="bio" />
            </Grid>
        </Grid>
    </header>
  );
};

export default Header;
