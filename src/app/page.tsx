// pages/index.js
import React from 'react';
import { Container, Typography, AppBar, Toolbar, Button, Box, Grid, Card, CardContent } from '@mui/material';
import Hero from './pages/home/hero';
import FAQSection from './pages/home/FAQSection';
import Features from './pages/home/Features';
import Details from './pages/home/Details';
import Contact from './pages/home/Contact';


const testimonials = [
  { name: 'John Doe', feedback: 'This company is amazing!' },
  { name: 'Jane Smith', feedback: 'Highly recommend their services.' },
];

export default function Home() {
  return (
    <>
      <Container>
        <Box sx={{ my: 4 }}>
          <Hero/>
        </Box>
        <Box id="features" sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Features/> 
          </Grid>
        </Box>
        <Box id="features" sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Details/> 
          </Grid>
        </Box>

        <Box id="features" sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4}>
            <FAQSection/>
          </Grid>
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Testimonials
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body1">{testimonial.feedback}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ my: 4, py: 4, backgroundColor: '#f0f0f0' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Contact/>
        </Box>
      </Container>
      <Box sx={{ py: 2, backgroundColor: '#3f51b5', color: '#fff', textAlign: 'center' }}>
        <Typography variant="body1">
          © 2023 Company Name. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
