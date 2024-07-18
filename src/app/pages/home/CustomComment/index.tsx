"use client";

import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { BiArrowBack } from 'react-icons/bi';
import { MdFormatQuote } from 'react-icons/md';
import { IoArrowForward } from 'react-icons/io5';

const testimonials = [
  {
    img: 'assets/img/testimonials/testimonials-1.jpg',
    name: 'Saul Goodman',
    title: 'CEO & Founder',
    text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  },
  {
    img: 'assets/img/testimonials/testimonials-2.jpg',
    name: 'Sara Wilsson',
    title: 'Designer',
    text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  {
    img: 'assets/img/testimonials/testimonials-3.jpg',
    name: 'Jena Karlis',
    title: 'Store Owner',
    text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
  },
  {
    img: 'assets/img/testimonials/testimonials-4.jpg',
    name: 'Matt Brandon',
    title: 'Freelancer',
    text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
  },
  {
    img: 'assets/img/testimonials/testimonials-5.jpg',
    name: 'John Larson',
    title: 'Entrepreneur',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
  },
];

const CustomerComment = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 2000); // 2000ms = 2s

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{ backgroundColor: '#f7f7f7', padding: '4rem 0' }}  // Equivalent to 'section-bg' class
    >
      <Container data-aos="fade-up">
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography variant="h2" gutterBottom>
            Testimonials
          </Typography>
          <Typography variant="body1">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 0 }}>
            <BiArrowBack />
          </IconButton>

          <Card sx={{ maxWidth: 345, margin: 'auto', transition: 'transform 0.5s ease-in-out' }}>
            <CardContent>
              <Avatar
                alt={testimonials[current].name}
                src={testimonials[current].img}
                sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
              />
              <Typography variant="h5" component="div" textAlign="center">
                {testimonials[current].name}
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center">
                {testimonials[current].title}
              </Typography>
              <Typography variant="body1" component="p" textAlign="center" sx={{ mt: 2 }}>
                <MdFormatQuote style={{ verticalAlign: 'text-bottom', marginRight: 5 }} />
                {testimonials[current].text}
                <MdFormatQuote style={{ verticalAlign: 'text-bottom', marginLeft: 5 }} />
              </Typography>
            </CardContent>
          </Card>

          <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0 }}>
            <IoArrowForward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerComment;
