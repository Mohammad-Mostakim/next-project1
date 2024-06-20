"use client"
import React, { forwardRef } from 'react';

// material-ui
import { Collapse, Fade, Box, Grow, Slide, Zoom } from '@mui/material';

// Types for the props used in Transitions component
interface TransitionsProps {
  children?: React.ReactNode;
  type?: 'grow' | 'fade' | 'collapse' | 'slide' | 'zoom';
  position?: 'top-left' | 'top-right' | 'top' | 'bottom-left' | 'bottom-right' | 'bottom' | 'center';
  direction?: 'up' | 'down' | 'left' | 'right';
}

// ==============================|| TRANSITIONS ||============================== //

const Transitions = forwardRef<HTMLDivElement, TransitionsProps>(({
  children, type, position, direction, ...others
}, ref) => {
  let positionSX = {
    transformOrigin: 'center' // Set default transformOrigin to 'center' for simplicity
  };

  switch (position) {
    case 'top-right':
      positionSX = { transformOrigin: 'top right' };
      break;
    case 'top':
      positionSX = { transformOrigin: 'top center' };
      break;
    case 'bottom-left':
      positionSX = { transformOrigin: 'bottom left' };
      break;
    case 'bottom-right':
      positionSX = { transformOrigin: 'bottom right' };
      break;
    case 'bottom':
      positionSX = { transformOrigin: 'bottom center' };
      break;
    case 'center':
      positionSX = { transformOrigin: 'center' };
      break;
    default:
      positionSX = { transformOrigin: 'center' }; // Ensure a valid default is set
      break;
  }

  return (
    <Box ref={ref} sx={{ overflow: 'hidden' }}>
      {type === 'grow' && <Grow {...others}><Box sx={positionSX}>{children}</Box></Grow>}
      {type === 'collapse' && <Collapse {...others}><Box sx={positionSX}>{children}</Box></Collapse>}
      {type === 'fade' && <Fade {...others} timeout={{ appear: 500, enter: 600, exit: 400 }}>
          <Box sx={positionSX}>{children}</Box>
        </Fade>}
      {type === 'slide' && <Slide {...others} direction={direction} timeout={{ appear: 0, enter: 400, exit: 200 }}>
          <Box sx={positionSX}>{children}</Box>
        </Slide>}
      {type === 'zoom' && <Zoom {...others}><Box sx={positionSX}>{children}</Box></Zoom>}
    </Box>
  );
});

Transitions.displayName = 'Transitions';

export default Transitions;
