"use client"
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import {  Tabs, Typography, tabsClasses } from "@mui/material";
import AccountInfoOverView from "./components/AccountInfoOverView";

export default function OverViewSection() {
  const [value, setValue] = useState<string>("accoutOverview");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function getStepContent(tabName: string): any {
    switch (tabName) {
      case "accoutOverview":
        return <AccountInfoOverView />;
      case "orderItems":
      // return <CartItemView />;
      default:
        return (
          <Typography variant="h2" color="error" align="center">
            No Data For Tab
          </Typography>
        );
    }
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
      }}
    >
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            maxWidth: { xs: 320,sm:"100%" },
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          <Tab label="Account Overview" value="accoutOverview" />
          <Tab label="Order Items" value="orderItems" />
          <Tab label="Cart Items" value="ci" />
          <Tab label="Cart Items" value="di" />
          <Tab label="Cart Items" value="ei" />
          <Tab label="Cart Items" value="fi" />
          <Tab label="Cart Items" value="gi" />
          <Tab label="Cart Items" value="hi" />
          <Tab label="Cart Items" value="ii" />
        </Tabs>
          <TabPanel value={value}>{getStepContent(value)}</TabPanel>
      </TabContext>
    </Box>
  );
}
