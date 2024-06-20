"use client"

import { ReduxStore } from '@/lib/Redux/ReduxStore';
import { Component, ErrorInfo, useRef } from 'react';
import { Provider } from 'react-redux';

interface StoreProviderWrapperProps {
  children: React.ReactNode;
}
export default function StoreProviderWrapper({ children }: StoreProviderWrapperProps) {
  // useRef to keep the store instance across re-renders
  const storeRef = useRef<typeof ReduxStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this component renders
    storeRef.current = ReduxStore;
  }

  return (
    <ErrorBoundary>
      <Provider store={storeRef.current}>{children}</Provider>
    </ErrorBoundary>
  )
    
}






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
      return <h1>Something went wrong inside store.</h1>;
    }

    return this.props.children;
  }
}