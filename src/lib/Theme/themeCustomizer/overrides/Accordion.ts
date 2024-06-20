/** @format */

import { Theme } from "@mui/material";

// ==============================|| OVERRIDES - CARD CONTENT ||============================== //

export default function Accordion(theme:Theme):any {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: `rgba(${theme.palette.action.disabledBackground}, 0.12)`,
          },
          "&.Mui-expanded": {
            // minHeight: "40px !important",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          // padding: `0 ${theme.spacing(5)}`,
          flexDirection: "row",
          "& + .MuiCollapse-root": {
            "& .MuiAccordionDetails-root:first-of-type": {
              paddingTop: 0,
            },
          },
          "&.Mui-expanded": {
            // minHeight: "40px !important",
          },
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
        },
        content: {
          // margin: `${theme.spacing(2.5)} 0`
        },

        expandIconWrapper: {
          color: theme.palette.text.secondary,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          // padding: theme.spacing(5),
          "& + .MuiAccordionDetails-root": {
            paddingTop: 0,
          },
        },
      },
    },
  };
}
