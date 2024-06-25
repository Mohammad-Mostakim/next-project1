"use client"

/** @format */
import React from 'react';
import { Box, List, ListItem, MenuItem, MenuList } from '@mui/material';
import { useAppSelector } from '@/lib/Redux/ReduxStore/hooks';
import { NavbarMenuRender } from '../../MenuRendering';
import ModeToggler from '@/@core/toolkit/ModeToggler';
import Cart from '@/@core/ui/ui-toolkit/components/cart';
import Notification from '@/@core/ui/ui-toolkit/components/notification';
import Profile from '@/@core/ui/ui-toolkit/components/profile';
import LoginButton from '@/@core/toolkit/LoginButton';

// Project import

// ==============================|| HEADER - CONTENT ||============================== //

const BigDeviceSection: React.FC = () => {
  const {user} = useAppSelector((state) => state.auth);

  return (
    <MenuList sx={{ display: 'flex'}}>
      <ListItem >
        <NavbarMenuRender />
      </ListItem>
      <ListItem >
        <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <MenuItem disableRipple>
            <ModeToggler />
          </MenuItem>
          <MenuItem>
            <Cart />
          </MenuItem>
          <MenuItem>
            <Notification />
          </MenuItem>
        </List>
      </ListItem>
      <ListItem >
        {user && user?.role ? (
          <Profile />
        ) : (
          <LoginButton />
        )}
      </ListItem>
    </MenuList>

  );
};

export default BigDeviceSection;
