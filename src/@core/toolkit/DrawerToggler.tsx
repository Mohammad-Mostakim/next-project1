"use client"
import { IconButton, SvgIcon } from "@mui/material";
import { CgFormatIndentDecrease,CgFormatIndentIncrease } from "react-icons/cg";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { setDrawerOpen } from "@/lib/Theme/ThemeSlice";

export default function DrawerToggler() {
  const dispatch = useAppDispatch();
  const { drawerOpen } = useAppSelector(state=>state.theme);
  const isDrawerOpen:boolean=drawerOpen;
  const handleDrawerToggle = useCallback(():void => {
    dispatch(setDrawerOpen());
  }, [dispatch]);
  return (
    <IconButton
      disableRipple
      aria-label="open drawer"
      onClick={handleDrawerToggle}
      edge="start"
      sx={{ cursor: "pointer" }}
    >
      <SvgIcon sx={{color:"customBg.icon"}}>

      {isDrawerOpen ? <CgFormatIndentDecrease /> : <CgFormatIndentIncrease />}
      </SvgIcon>
    </IconButton>
  );
}
