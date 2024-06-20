
import { ReactNode } from 'react';
import  StoreProviderWarper  from './StoreProviderWarper';
import { ThemeSettingWrapper } from './ThemeSettingWarper';

interface IndexProps {
  children: ReactNode;
}

export default function Setting({ children }: IndexProps): JSX.Element {
  return (
    <StoreProviderWarper>
      <ThemeSettingWrapper>
        {children}
      </ThemeSettingWrapper>
    </StoreProviderWarper>
  );
}
