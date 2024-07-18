"use client"
import React from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const ContactPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Paper elevation={3} style={{ padding: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant="h6" style={{ marginTop: "2rem" }}>
          Contact Information:
        </Typography>
        <Typography>
          Email: info@example.com
          <br />
          Phone: +1 123-456-7890
          <br />
          Address: 123 Main St, City, Country
        </Typography>
      </Paper>
    </Container>
  );
};

export default ContactPage;
