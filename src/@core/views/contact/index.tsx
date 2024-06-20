"use client"

import { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  TextareaAutosize,
  styled,
  Box,
} from '@mui/material';
import NewsLetterBox from './NewsLetterBox';

const ContactPageSection = styled('section')({
  overflow: 'hidden',
  padding: '4rem 0',
  ['@media (min-width: 768px)']: {
    padding: '5rem 0',
  },
  ['@media (min-width: 1024px)']: {
    padding: '7rem 0',
  },
});

const StyledBox = styled('div')(({ theme }) => ({
  animation: 'fadeInUp 1s',
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.common.white,
  marginBottom: '1.5rem',
  borderRadius: '0.375rem',
  padding: '1.5rem',
  ['@media (min-width: 768px)']: {
    marginBottom: '0.625rem',
    padding: '3.4375rem',
  },
}));

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <ContactPageSection id="ContactPage">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={7} xl={8}>
            <StyledBox>
              <Typography variant="h2" gutterBottom>
                Need Help? Open a Ticket
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our support team will get back to you ASAP via email.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <div>
                      <label htmlFor="name">Your Name</label>
                      <TextField
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        variant="outlined"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div>
                      <label htmlFor="email">Your Email</label>
                      <TextField
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <label htmlFor="message">Your Message</label>
                      <TextareaAutosize
                        name="message"
                        minRows={5}
                        placeholder="Enter your Message"
                        style={{ width: '100%', resize: 'none' }}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained">
                      Submit Ticket
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </StyledBox>
          </Grid>
          <Grid item xs={12} lg={5} xl={4}>
            <NewsLetterBox />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, zIndex: -1 }}>
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </ContactPageSection>
  );
};

export default ContactPage;
