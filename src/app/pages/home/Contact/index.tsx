import React from 'react';
import { Container, Grid, Typography, Box, TextField, Button } from '@mui/material';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {

  return (
    <section id="contact" className="contact">
      <Container data-aos="fade-up">
        <Box textAlign="center" mb={5}>
          <Typography variant="h2" component="h2">Contact</Typography>
          <Typography variant="body1" component="p">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
            alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item lg={6} xs={12}>
            <Grid container spacing={3}>
              <Grid item lg={6} xs={12}>
                <Box className="info" display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  <FaMapMarkerAlt size={30} />
                  <Typography variant="h4" component="h4">Address</Typography>
                  <Typography variant="body1" component="p">
                    A108 Adam Street,<br />New York, NY 535022
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Box className="info" display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  <FaPhone size={30} />
                  <Typography variant="h4" component="h4">Call Us</Typography>
                  <Typography variant="body1" component="p">
                    +1 5589 55488 55<br />+1 5589 22548 64
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Box className="info" display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  <FaEnvelope size={30} />
                  <Typography variant="h4" component="h4">Email Us</Typography>
                  <Typography variant="body1" component="p">
                    contact@example.com<br />info@example.com
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Box className="info" display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  <FaClock size={30} />
                  <Typography variant="h4" component="h4">Working Hours</Typography>
                  <Typography variant="body1" component="p">
                    Mon - Fri: 9AM to 5PM<br />Sunday: 9AM to 1PM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6} xs={12}>
            <form action="forms/contact.php" method="post" role="form" className="php-email-form" data-aos="fade-up">
              <TextField
                placeholder="Your Name"
                type="text"
                name="name"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                placeholder="Your Email"
                type="email"
                name="email"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                placeholder="Subject"
                type="text"
                name="subject"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                placeholder="Message"
                name="message"
                multiline
                rows={5}
                fullWidth
                required
                margin="normal"
              />
              <Box my={3}>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </Box>
              <Box textAlign="center">
                <Button variant="contained" type="submit">Send Message</Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
