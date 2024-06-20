"use client"

/* eslint-disable react/display-name */
import React, { forwardRef, ReactNode, useState } from 'react';
import { Card, Divider, Theme, Tooltip, Button, IconButton, SvgIcon, CardHeader, CardContent, SxProps, CardActions } from '@mui/material';
import { useAppTheme } from '@/lib/Theme/hooks';
import { BiCopy } from 'react-icons/bi';
import { MdMoreVert } from 'react-icons/md';
import LivePreviewCode from '../utils/LivePreview/LivePreviewCode'

// ==============================|| CUSTOM BOX CARD ||============================== //
interface CodeEntry {
    id: number;
    type: string;
    code: string;
  }
interface CodeCardProps {
    CodeEntry: CodeEntry;
    sx?: SxProps<Theme>;
    contentSX?: SxProps<Theme>;
    title?: ReactNode | string;
    border?: boolean;
    codeType?: string;
}

const CodeCard = forwardRef<HTMLDivElement, CodeCardProps>(({
    CodeEntry,
    sx = {},
    contentSX = {},
    title,
    codeType,
    border,
    ...others
}, ref) => {
    const [btnName, setBtnName] = useState<string>("Show Code");
    const [showCode, setShowCode] = useState<boolean>(false);
    return (
        <Card
            ref={ref}
            sx={{
                overflow: 'hidden',
                width: '100%',
                border: border ? 1 : 0,
                ':hover': {
                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                },
                ...sx
            }}
            {...others}
        >
            {/* card header */}
            <CardHeader
                title={title}
                sx={{ display: 'flex', justifyContent: 'space-between' ,alignItems:"center",}}
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={() => { setBtnName(showCode ? "Show Code" : "Preview"); setShowCode(!showCode) }}>{btnName}</Button>
                        <Tooltip title="Copy Code">
                            <IconButton color="secondary" size="small">
                                <SvgIcon>
                                    <BiCopy />
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="More Options">
                            <IconButton color="secondary" size="small">
                                <SvgIcon>
                                    <MdMoreVert />
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>
                    </React.Fragment>
                }
            />
            {/* card content */}
            <CardContent sx={contentSX}>
                 <Divider sx={{ borderStyle: 'dashed' }} />
                 <LivePreviewCode CodeEntry={CodeEntry} showCode={showCode}/>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
});

export default CodeCard;
