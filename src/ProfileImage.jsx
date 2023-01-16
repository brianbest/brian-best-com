import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import imgUrl from './static/me.jpg'; 

export default function ProfileImage() {
    return(
        <Card className='photo'>
            <CardMedia
            sx={{width: 500, height: 700}}
            image = {imgUrl}
            />
        </Card>
    )
}