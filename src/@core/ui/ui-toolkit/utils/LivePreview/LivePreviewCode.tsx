import React from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import * as Mui from '@mui/material';

// Define MuiComponentsFromCode function
const MuiComponentsFromCode = (code: string): Record<string, React.ComponentType<any>> => {
  const componentNames = [...code.matchAll(/(?:import\s+(\S+)\s+from\s+'@mui\/material';)|(?:import\s+{([^}]+)}\s+from\s+'@mui\/material';)/g)]
    .flatMap(match => {
      const namedImports = match[2]?.split(',').map(name => name.trim());
      return namedImports ? namedImports : [match[1]];
    });

  const components: Record<string, React.ComponentType<any>> = {};
  componentNames.forEach(name => {
    // Check if the value is a function, indicating it's a React component
    if (typeof Mui[name as keyof typeof Mui] === 'function') {
      components[name] = Mui[name as keyof typeof Mui] as React.ComponentType<any>;
    } else {
      console.log(`Component ${name} is not a valid React component`);
    }
  });
  return components;
};


const LivePreviewCode: React.FC<{ CodeEntry: any, showCode: boolean }> = ({ CodeEntry, showCode }) => {
  const components = { ...MuiComponentsFromCode(CodeEntry.code) };
  if (!CodeEntry) {
    return <div>Component not found</div>;
  }
  const getComponentByType = (codeEntry: any) => {
    switch (codeEntry.type) {
      case "html":
        return <iframe srcDoc={CodeEntry.code} style={{ height: "100%", width: "100%" }} />
      case "jsx":
        return <Mui.Grid item width="100%" height="100%" >
          <LivePreview />
        </Mui.Grid>
      default:
        return (
          <Mui.Typography variant="h2" color="error" align="center">
            Fix -Code Type
          </Mui.Typography>
        );
    }
  }
  return (
    <LiveProvider code={CodeEntry.code} scope={components} language={CodeEntry.type}>
      <Mui.Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40rem" }} >
        {showCode ? (<Mui.Grid item width="100%" height="100%" sx={{ overflowX: "scroll" }} >
          <LiveEditor />
        </Mui.Grid>) : getComponentByType(CodeEntry)}
      </Mui.Grid>
      <Mui.Grid item sx={{ float: "right", pr: 3 }}>
        <LiveError />
      </Mui.Grid>
    </LiveProvider>
  );
};

export default LivePreviewCode;
