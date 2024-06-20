import React, { ReactNode } from 'react';

// Third-party
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// ==============================|| CODE HIGHLIGHTER ||============================== //

interface SyntaxHighlightProps {
    children: ReactNode;
    language?: string | "javascript";
    [key: string]: any;
}

const SyntaxHighlight: React.FC<SyntaxHighlightProps> = ({ children, language, ...others }) => {
    const childrenArray = Array.isArray(children) ? children : [children]; // Convert children to an array if it's not already
    
    return (
        <SyntaxHighlighter language={language} showLineNumbers style={a11yDark} {...others}>
            {childrenArray}
        </SyntaxHighlighter>
    );
};

export default SyntaxHighlight;
