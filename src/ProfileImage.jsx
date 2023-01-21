import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import imgUrl from './static/me.jpg'; 
import Paper from '@mui/material/Paper';

export default function ProfileImage() {
    return(
        <Paper className='photo' elevation={3}>
            <Card>
                <CardMedia
                sx={{width: 400, height: 450}}
                image = {imgUrl}
                />
            </Card>
        </Paper>
        
    )
}