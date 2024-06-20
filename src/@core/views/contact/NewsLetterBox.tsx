"use client"

import { useState } from 'react';
import { TextField, Button,styled } from '@mui/material';
import { useAppTheme } from '@/lib/Theme/hooks';

const StyledBox = styled('div')(({ theme }) => ({
  animation: 'fadeInUp 1s',
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.common.white,
  position: 'relative',
  zIndex: 10,
  borderRadius: '0.375rem',
  padding: '1rem',
  '@media (min-width: 640px)': {
    padding: '1.375rem',
  },
  '@media (min-width: 1024px)': {
    padding: '1rem',
  },
}));

const StyledText = styled('h3')(({ theme }) => ({
  marginBottom: '1rem',
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: 1.4,
  color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
  '@media (min-width: 640px)': {
    fontSize: '1.5rem',
  },
}));

const StyledPara = styled('p')(({ theme }) => ({
  marginBottom: '1.375rem',
  borderBottom: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.divider}`,
  paddingBottom: '1.375rem',
  fontSize: '1rem',
  lineHeight: 1.6,
  color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
}));

const StyledForm = styled('form')({
  marginTop: '1.375rem',
});

const NewsLetterBox = () => {
  const theme = useAppTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <StyledBox>
      <StyledText>Subscribe to receive future updates</StyledText>
      <StyledPara>
        Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare
        massa quis lectus.
      </StyledPara>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          label="Your Name"
          placeholder="Enter your name"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          type="email"
          name="email"
          label="Your Email"
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={formData.email}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
        >
          Subscribe
        </Button>
      </StyledForm>
      <p className="dark:text-body-color-dark text-center text-base leading-relaxed text-body-color">
        No spam guaranteed, So please don’t send any spam mail.
      </p>
    </StyledBox>
  );
};

export default NewsLetterBox;
