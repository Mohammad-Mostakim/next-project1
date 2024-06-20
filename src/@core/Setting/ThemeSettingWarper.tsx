"use client";

import React, { Component, ErrorInfo } from 'react';
import { useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import ThemeCustomizer from "@/lib/Theme/themeCustomizer";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

// Make sure the `AppRouterCacheProvider` is imported correctly
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export const ThemeSettingWrapper = ({ children }: { children: React.ReactNode }) => {
  // Extracting theme configuration from Redux store
  const { themeConfig } = useAppSelector(state => state.theme);
  // Customizing theme based on the configuration
  const customTheme = ThemeCustomizer(themeConfig);

  // useEffect(()=>{
  //   const fontfamily=customTheme.typography.fontFamily;
  //   if(fontfamily)document.body.style.fontFamily=fontfamily
  // },[customTheme])

  return (
    <StyledEngineProvider injectFirst>
      <AppRouterCacheProvider options={{ enableCssLayer: false, key: 'css' }}>
        <ErrorBoundary>
        <ThemeProvider theme={customTheme} >
          <CssBaseline />
          {children}
        </ThemeProvider>
        </ErrorBoundary>
      </AppRouterCacheProvider>
    </StyledEngineProvider>
  );
};



// error bundary 
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong inside theme.</h1>;
    }

    return this.props.children;
  }
}