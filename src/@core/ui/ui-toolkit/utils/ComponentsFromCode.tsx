import * as Mui from '@mui/material';
import React from 'react';

export const MuiComponentsFromCode = (code: string): Record<string, React.ComponentType<any>> => {
  const componentNames = [...code.matchAll(/(?:import\s+(\S+)\s+from\s+'@mui\/material';)|(?:import\s+{([^}]+)}\s+from\s+'@mui\/material';)/g)]
    .flatMap(match => {
      const namedImports = match[2]?.split(',').map(name => name.trim());
      return namedImports ? namedImports : [match[1]];
    });

  const components: Record<string, React.ComponentType<any>> = {};

  componentNames.forEach(name => {

    // Check if the component exists in Mui and if it's a valid React component
    if (Mui[name as keyof typeof Mui]) {
      components[name] = Mui[name as keyof typeof Mui] as React.ComponentType<any>;
    }
  });

  return components;
};
