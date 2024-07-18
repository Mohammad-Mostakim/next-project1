"use client"
import * as React from 'react';
import { useAppSelector } from '@/lib/Redux/ReduxStore/hooks';
import { Box, styled } from '@mui/material';
import ScrollToTop from '@core/toolkit/ScrollToTop';
import CustomBreadcrumbs from '@core/toolkit/CustomBreadCumbs';
import { GetMenuItemsByRole } from '@core/navigation';
import { register, unregister } from '@/app/utils/SW';

export interface IPageRenderProps {
  children?: React.ReactNode;
}
const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  padding: 10,
  minHeight: "100vh",
});
export default function PageRender(props: IPageRenderProps) {
  const { user } = useAppSelector(state => state.auth);
  const { themeConfig } = useAppSelector(state => state.theme);
  const userMemo = React.useMemo(() => user, [user])
  const themeConfigMemo = React.useMemo(() => themeConfig, [themeConfig])
  const { breadcrumbs } = GetMenuItemsByRole(userMemo);

  React.useEffect(() => {
    // Register service worker when component mounts
    register();

    // // Unregister service worker when component unmounts (optional)
    // return () => {
    //   unregister();
    // };
  }, []);


  return (
    <React.Fragment>
      <MainContentWrapper sx={{ mt: themeConfigMemo.navbarHeight }}>
        {breadcrumbs && <CustomBreadcrumbs
          title={true}
          card={true}
          divider={true}
          icons={true}
          breadcrumbItems={breadcrumbs}
        />}


        {props.children}
        <ScrollToTop />

      </MainContentWrapper>
    </React.Fragment>
  );
}
