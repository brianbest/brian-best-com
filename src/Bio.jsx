import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function Bio() {
  return (
    <Paper sx={{ maxWidth: 400 }} className="bio" elevation={9}>
      <Card >
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" align='center'>
              Hey, I'm Brian Best
          </Typography>
          <Typography gutterBottom variant="h5" component="div" align='center'>
              Software Developer, Tech Leadership, and Entrepreneur
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}