
import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutDrawer from './components/LayoutDrawer';
import PageRender from './components/PageRender';
import SnackbarAuthRelatedAlert from '@/@core/ui/ui-toolkit/snackbar/AuthAllert';

type MainLayoutProps = {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (

  <React.Fragment>
      <LayoutHeader />
      <LayoutDrawer />
      <PageRender>
        {children}
      </PageRender>
      <SnackbarAuthRelatedAlert/>
  </React.Fragment>
);