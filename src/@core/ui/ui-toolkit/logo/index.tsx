/** @format */
"use client"
// material-ui
import { ButtonBase, Typography, styled } from "@mui/material";

// project imports
import Image from "next/image";
// style
const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "uppercase",
  color: theme.palette.text.primary,
  transition: "opacity .25s ease-in-out, margin .25s ease-in-out",
}));
// ==============================|| MAIN LOGO ||============================== //
import React from 'react'

export default function Logo() {
  return (
    <ButtonBase
    sx={{ml:1}}
    >
      <Image
        src="/assets/images/favicon.png"
        alt="Logo"
        height="15"
        width="30"

        style={{ objectFit: "cover" }}
      />
      {/* <HeaderTitle variant="h6" sx={{ ml: 3 }}>
        Website Title
      </HeaderTitle> */}
    </ButtonBase>)
}
