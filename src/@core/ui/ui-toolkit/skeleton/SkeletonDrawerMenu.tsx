import React from 'react'
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton } from '@mui/material'

export default function SkeletonDrawerMenu() {
    return (
        <React.Fragment>
            {[...Array(8)].map((_, index) => (
                <ListItem key={index} sx={{
                    flexDirection: "column",
                    alignItems: "stretch",
                    p: 0,
                    pb: 1,
                }}>
                    <ListItemButton sx={{ borderRadius: 3, py: 1, justifyContent: "center" }}>
                        <Skeleton variant="circular">
                            <ListItemIcon sx={{ bgcolor: "customBg.icon" }}/>
                        </Skeleton>
                        <ListItemText>
                            <Skeleton animation="wave" />
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            ))}
        </React.Fragment>
    );
}
