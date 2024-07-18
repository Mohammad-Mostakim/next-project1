
import React from 'react';
import NextTopLoader from "nextjs-toploader"
import LayoutHeader from '@core/components/LayoutHeader';
import LayoutDrawer from '@core/components/LayoutDrawer';
import PageRender from '@core/components/PageRender';
import SnackbarAuthRelatedAlert from '@/@core/ui/ui-toolkit/snackbar/AuthAllert';
type DashboardLayoutProps = {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: DashboardLayoutProps) => (

    <React.Fragment>
        <NextTopLoader
            showSpinner={false}
        />
        <LayoutHeader />
        <LayoutDrawer />
        <PageRender>
            {children}
        </PageRender>
        <SnackbarAuthRelatedAlert />
    </React.Fragment>
);