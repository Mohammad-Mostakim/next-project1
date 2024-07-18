import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { FaReceipt, FaCube, FaImages, FaShieldAlt, FaAtom, FaIdCard } from 'react-icons/fa';

const features = [
  { icon: <FaReceipt />, title: "Corporis voluptates sit", description: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip" },
  { icon: <FaCube />, title: "Ullamco laboris nisi", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt" },
  { icon: <FaImages />, title: "Labore consequatur", description: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere" },
  { icon: <FaShieldAlt />, title: "Beatae veritatis", description: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta" },
  { icon: <FaAtom />, title: "Molestiae dolor", description: "Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte" },
  { icon: <FaIdCard />, title: "Explicabo consectetur", description: "Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore" }
];

const Features = () => {
  return (
    <section id="features" className="features">
      <Container>
        <Box textAlign="center" mb={5}>
          <Typography variant="h2" component="h2">App Features</Typography>
          <Typography variant="body1" component="p">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
            alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>
        </Box>
        
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={7} display="flex" alignItems="stretch">
            <Box display="flex" flexDirection="column" justifyContent="center" width="100%">
              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <Box display="flex" alignItems="center">
                      <Box fontSize="2rem" mr={2}>{feature.icon}</Box>
                      <Box>
                        <Typography variant="h4" component="h4">{feature.title}</Typography>
                        <Typography variant="body2" component="p">{feature.description}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} display="flex" alignItems="center" justifyContent="center" data-aos="fade-left" data-aos-delay="100">
            <img src="/assets/img/features.svg" alt="Features" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
