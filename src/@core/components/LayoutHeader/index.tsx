
import React from 'react';
import { AppBar } from '@mui/material';
import HeaderContent from './HeaderContent';
import { CustomToolbar } from '@core/components/CustomToolbar';

const LayoutHeader: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar >
        <CustomToolbar>
          <HeaderContent />
        </CustomToolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default LayoutHeader;
