import React from "react";
import { Typography } from "@mui/material";
import JsxHighlighter from "./JsxHighlighter";

interface HighlighterProps {
    children: React.ReactNode;
    codeType: string | undefined;
}

export default function CodeHighLighter({ children, codeType }: HighlighterProps) {
    const renderHiglighter = (codeType:any) => {
        switch (codeType) {
            case "jsx":
                return <JsxHighlighter>{children}</JsxHighlighter>;
            default:
                return (
                    <Typography variant="h2" color="error" align="center">
                        Fix - Highlighter Name
                    </Typography>
                );
        }
    };

    return renderHiglighter(codeType);
}
