"use client"

/* eslint-disable react/display-name */
import React, { forwardRef, ReactNode } from 'react';
import { Card, CardContent, CardHeader, Divider, Typography, SxProps, Theme } from '@mui/material';
import { useAppTheme } from '@/lib/Theme/hooks';

// ==============================|| CUSTOM BOX CARD ||============================== //

interface BoxCardProps {
    children?: ReactNode;
    content?: boolean;
    contentClass?: string;
    darkTitle?: boolean;
    secondary?: ReactNode | string;
    sx?: SxProps<Theme>;
    contentSX?: SxProps<Theme>;
    title?: ReactNode | string;
    border?:boolean;
}

const BoxCard = forwardRef<HTMLDivElement, BoxCardProps>(({
    children,
    content = true,
    contentClass,
    darkTitle,
    secondary,
    sx = {},
    contentSX = {},
    title,
    border,
    ...others
}, ref) => {
    const theme = useAppTheme();

    return (
        <Card
            ref={ref}
            
            sx={{
                overflow: 'hidden',
                border:border?1:0,
                ':hover': {
                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                },
                ...sx
            }}
            {...others}
        >
            {/* card header and action */}
            {!darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} action={secondary} />}
            {darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}

            {/* content & header divider */}
            {title && (
                <Divider
                    sx={{
                        opacity: 1,
                        borderColor: theme.palette.divider
                    }}
                />
            )}

            {/* card content */}
            {content && (
                <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </Card>
    );
});

export default BoxCard;
