import React, { ReactNode } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import SyntaxHighlight from '@core/utils/SyntaxHighlight';

// ==============================|| CLIPBOARD & HIGHLIGHTER ||============================== //

interface HighlighterProps {
    children: ReactNode;
}

const JsxHighlighter: React.FC<HighlighterProps> = ({ children }) => {
console.log(children)
    return (
            <SyntaxHighlight language="jsx">
                {reactElementToJSXString(children, {
                    showFunctions: true,
                    showDefaultProps: false,
                    maxInlineAttributesLineLength: 100
                })}
            </SyntaxHighlight>
    );
};

export default JsxHighlighter;
