"use client"
import { Box, Typography, styled } from "@mui/material";
import { borderColor } from "@mui/system";

// Styled Card component
const Card = styled(Box)(({ theme }) => ({
    width: '320px',
    height: '400px',
    cursor: 'pointer',
    background: theme.palette.background.paper,
    borderTopRightRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '0 14px 26px rgba(0,0,0,0.04)',
    transition: 'all 0.3s ease-out',
    textDecoration: 'none',
    '&:hover': {
      transform: 'translateY(-5px) scale(1.005) translateZ(0)',
      boxShadow: `0 24px 36px rgba(0,0,0,0.11), 0 24px 46px ${theme.palette.primary.main}`,
      '& .overlay': {
        transform: 'scale(5) translateZ(0)',
      },
      '& .circle': {
        borderColor: theme.palette.secondary.light,
        '&:after': {
          borderColor: theme.palette.secondary.light,
        },
      },
      '& p': {
        color: theme.palette.text.primary,
      },
    },
    '&:active': {
      transform: 'scale(1) translateZ(0)',
      boxShadow: `0 15px 24px rgba(0,0,0,0.11), 0 15px 24px ${theme.palette.primary.main}`,
    },
  }));
  
  // Styled Paragraph component inside Card
  const CardParagraph = styled(Typography)(({ theme }) => ({
    fontSize: '17px',
    color: theme.palette.text.secondary,
    position: 'absolute',
    bottom:"5px",
    zIndex: 1000,
    transition: 'color 0.3s ease-out',
  }));
  
  // Styled Circle component
  const Circle = styled(Box)(({ theme }) => ({
    width: '131px',
    height: '131px',
    borderRadius: '50%',
    overflow:"hidden",
    border: `2px solid ${theme.palette.primary.main}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    transition: 'all 0.4s ease-out',
    '&:after': {
      content: '""',
      width: '118px',
      height: '118px',
      display: 'block',
      position: 'absolute',
      borderRadius: '50%',
      transition: 'opacity 0.4s ease-out',
    },
    '& image': {
      zIndex: 10000,
      transform: 'translateZ(0)',
    },
  }));
  
  // Styled Overlay component
  const Overlay = styled("div")(({ theme }) => ({
    width: '118px',
    height: '118px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    position: 'absolute',
    zIndex: 0,
    transition: 'transform 0.3s ease-out',
  }));
  
  export{
    Card,
    CardParagraph,
    Circle,
    Overlay,
  }