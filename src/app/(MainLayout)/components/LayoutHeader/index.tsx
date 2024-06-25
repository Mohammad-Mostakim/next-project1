
import React from 'react';
import { AppBar,Theme } from '@mui/material';
import HeaderContent from './HeaderContent';
import { CustomToolbar } from '@core/components/CustomToolbar';

// Styled
interface AppBarStyledProps {
  open?: boolean;
  theme?: Theme;
  isupmd?: any;
  themeconfig: {
    closeDrawerWidth: number;
    drawerWidth: number;
  };
}

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
