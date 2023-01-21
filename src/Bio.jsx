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
              A little about me
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Brian Best is a software developer, specializing in the web stack. He’s a team player, and highly motivated to deliver outstanding web based experiences. Having worked at both startups and agencies such as Phased.io and BANG! Creative Communications, he is highly adaptable to the ever changing needs of the market.
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Brian's work has been featured on BetaKit, CTV News, CBC News, and the Chronicle Herald. He's been a speaker at We Are Wearables Toronto, Sheridan College and Cape Breton University.
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Skills & Expertise:
          </Typography>
          <ul>
              <li>Node.js</li>
              <li>PHP</li>
              <li>MongoDB</li>
              <li>Javascript</li>
          </ul>
        </CardContent>
      </Card>
    </Paper>
    
  );
}