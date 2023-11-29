import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';

const AboutMe = () => {
  return (
    <div className='aboutme'>
        <Grid container
        justifyContent="center"
        alignItems="center">
            <Paper sx={{ maxWidth: 800 }} className="" elevation={9}>
        <Card >
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" align='center'>
                This is my story
            </Typography>
            <p>I am a passionate <strong>Senior Software Developer at Axonify</strong>, based in Waterloo, Ontario, Canada. With a career spanning several years, I've honed my skills across various aspects of software development, specializing in the web stack. My journey in this dynamic field has been marked by continuous learning and adaptation, enabling me to thrive in both startup environments and established agencies like <em>Phased.io</em> and <em>BANG! Creative Communications</em>.</p>

<p>My expertise lies in <strong>Java, Google Cloud Platform (GCP), HTML, Node.js, PHP, MongoDB, JavaScript, Angular.JS, CSS, Sass, Git, APIs, Rapid Prototyping, and IoT</strong>. I'm particularly proud of my work being featured in notable outlets like BetaKit, CTV News, CBC News, and the Chronicle Herald, and having the opportunity to share my insights as a speaker at We Are Wearables Toronto, Sheridan College, and Cape Breton University.</p>

<p>At Axonify, I blend my technical expertise in <strong>Java, JavaScript, SQL, CSS, and GCP</strong> with a range of soft skills to lead a specialized team focused on system health and customer satisfaction. My role involves technical support, team leadership, effective stakeholder communication, and tool development, leveraging technologies like BigQuery to enhance workflow efficiency and code quality.</p>

<p>I take pride in my unique combination of technical prowess and soft skills, including communication, adaptability, and problem-solving. These qualities not only contribute to delivering high-quality solutions at Axonify but also define my approach to software development.</p>

<p>Before Axonify, I contributed significantly at Digicraft Software Consulting, Combinaut, UBIQUE NETWORKS, Phased.io, Heimdall Networks, and BANG! Creative Communications. My experiences range from leading web development teams to co-founding Phased.io, where I played a crucial role in raising the company's angel round of investment and developing a range of applications.</p>

<p>Educationally, I am a proud alumnus of Sheridan College, where I earned a Graduate Certificate in Interactive Multimedia, and Cape Breton University's UIT Startup Immersion program. My foundational training in Radio Broadcasting from Mohawk College has also contributed to my diverse skill set.</p>

<p>In essence, I am a developer with a multifaceted background, driven by the challenge of creating impactful, user-centric software solutions. Whether it's through code, team leadership, or community engagement, my goal is to make a meaningful difference in the tech world.</p>
          </CardContent>
          </Card>
        </Paper>
        </Grid>
        
   
    </div>
  );
};

export default AboutMe;
