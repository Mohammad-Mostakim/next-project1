/** @format */
"use client"
import React, { useEffect, useRef, useState } from "react";
// material-ui
import {
  AppBar,
  Box,
  ClickAwayListener,
  IconButton,
  List,
  Paper,
  Popper,
  SvgIcon,
  Toolbar,
} from "@mui/material";

// project import
import ModeToggler from "@core/toolkit/ModeToggler";
import { useAppTheme } from "@/lib/Theme/hooks";
import { useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import Transitions from "@core/toolkit/Transitions";
import Profile from "@core/ui/ui-toolkit/components/profile";
import Notification from "@core/ui/ui-toolkit/components/notification";
import Cart from "@core/ui/ui-toolkit/components/cart";
import LoginButton from "@core/toolkit/LoginButton";
import { NavbarMenuRender } from "../../MenuRendering";
// assets
import { IoMdMore } from "react-icons/io";

// Define Redux state type expected by this component

const MobileSection: React.FC = () => {
  const theme = useAppTheme();
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const {user} = useAppSelector((state) => state.auth);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: globalThis.MouseEvent | globalThis.TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef<boolean>(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <React.Fragment>
      {user && user.role ? (
        <Profile />
      ) : (
        <LoginButton />
      )}
      <ModeToggler />
      <Box sx={{ flexShrink: 0, mr: 1 }}>
        <IconButton
          component="span"
          disableRipple
          sx={{ bgcolor: "inherit" }}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="inherit"
        >
          <SvgIcon sx={{ color: "customBg.icon" }}>
            <IoMdMore />
          </SvgIcon>
        </IconButton>
      </Box>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        sx={{
          width: "100%",
          bgcolor: "customBg.navbar",
        }}
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            <Paper sx={{ boxShadow: theme.shadows?.[2] }}>
              <ClickAwayListener onClickAway={handleClose}>
                <AppBar color="inherit">
                  <Toolbar
                    sx={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                      py: 0,
                    }}
                  >
                    <NavbarMenuRender />
                    <List sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                      <Notification />
                      <Cart />
                    </List>
                  </Toolbar>
                </AppBar>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default MobileSection;
