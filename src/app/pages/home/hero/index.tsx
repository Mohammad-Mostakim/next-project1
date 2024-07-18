"use client"

import React from 'react';
import { Box, Typography, Grid, Paper, Stack, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
const FrameworkBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 35, 126, 0.4)',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    gap: '1.25rem',
    padding: '1.25rem 1.5rem',
    borderRadius: '0.75rem',
    border: '2px solid #00acc1',
    marginTop: '1.25rem',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#1565c0',
        opacity: 1,
        transition: 'background-color 0.3s ease',
    },
    '& img': {
        width: '2.25rem',
    },
    '& i': {
        opacity: 0,
        transform: 'translateX(-0.25rem)',
        transition: 'opacity 0.3s, transform 0.3s',
    },
    '&:hover i': {
        opacity: 1,
        transform: 'translateX(0)',
    },
});

const frameworks = [
    {
        name: 'Angular',
        icon: 'path/to/angular-icon.svg',
        subText: 'Typescript',
    },
    {
        name: 'React',
        icon: 'path/to/react-icon.svg',
        subText: 'Javascript',
    },
    {
        name: 'Vue',
        icon: 'path/to/vue-icon.svg',
        subText: 'v3 (beta)',
    },
    {
        name: 'Other',
        icon: 'path/to/other-icon.svg',
        subText: '',
    },
    {
        name: 'Other',
        icon: 'path/to/other-icon.svg',
        subText: '',
    },
    {
        name: 'dOther',
        icon: 'path/to/other-icon.svg',
        subText: '',
    },
    {
        name: 'gOther',
        icon: 'path/to/other-icon.svg',
        subText: '',
    },
    {
        name: 'gdOther',
        icon: 'path/to/other-icon.svg',
        subText: '',
    },
    {
        name: 'ggOther',
        icon: 'path/to/other-icon.svg',
        subText: '',
    },
];

const Hero = () => {
    return (
        <Stack>
    <Box
      component="section"
      sx={{ display: 'flex', alignItems: 'center', minHeight: '100vh', width:"100%", overflow:"hidden" }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { lg: 'flex-start', xs: 'center' },
              pt: { lg: 5, xs: 0 },
              order: { lg: 1, xs: 2 },
            }}
            data-aos="fade-up"
          >
            <Box>
              <Typography variant="h1" component="h1" gutterBottom>
                App landing page template
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et fastidii forensibus voluptatibus. His ei nihil feugait
              </Typography>
              <Button
                variant="contained"
                startIcon={<i className="bx bxl-play-store" />}
                href="#"
                sx={{ mr: 2 }}
              >
                Google Play
              </Button>
              <Button
                variant="contained"
                startIcon={<i className="bx bxl-apple" />}
                href="#"
              >
                App Store
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              order: { lg: 2, xs: 1 },
            }}
            data-aos="fade-up"
          >
            <img src="/assets/images/hero-img.png" alt="" style={{ maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
            <Box position="relative">
                <Typography variant="h5" fontWeight="bold" textTransform="uppercase">
                    Ours Servicess
                </Typography>
                <Grid container spacing={2} marginTop={2}>
                    {frameworks.map((framework) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={framework.name}>
                            <FrameworkBox>
                                <img src={framework.icon} alt={framework.name} />
                                <Box>
                                    <Typography>{framework.name}</Typography>
                                    {framework.subText && (
                                        <Typography variant="body2" color="info.main">
                                            {framework.subText}
                                        </Typography>
                                    )}
                                </Box>
                                <i className="fa fa-chevron-right"></i>
                            </FrameworkBox>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
};

export default Hero;
