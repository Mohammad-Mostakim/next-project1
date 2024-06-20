
"use client"
/** @format */

import { useState, FC } from 'react';
import { useRouter } from 'next/navigation';

// material-ui
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

// assets
import { MdEditSquare } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { BsFillWalletFill } from "react-icons/bs";
import { useAppTheme } from '@/lib/Theme/hooks';
import { useAppDispatch, useAppSelector } from '@/lib/Redux/ReduxStore/hooks';

// Define the type for the props expected by the ProfileTab component
interface ProfileTabProps {
  handleLogout: () => void;  // A function that takes no arguments and returns void
}

// Define the type for menu items
interface ProfileMenuItem {
  id: string;
  icon: JSX.Element;
  title: string;
  link: string;
}

// Menu items data
const profileMenu: ProfileMenuItem[] = [
  {
    id: 'vp',
    icon: <CgProfile />,
    title: 'View Profile',
    link: 'profile',
  },
  {
    id: 'ep',
    icon: <MdEditSquare />,
    title: 'Edit Profile',
    link: '/profile-edit',
  },
  { id: 'sp', icon: <CgProfile />, title: 'Social Profile', link: '' },
  { id: 'bil', icon: <BsFillWalletFill />, title: 'Billing', link: '' },
  { id: 'logout', icon: <AiOutlineLogout />, title: 'Logout', link: '' },
];

// Component definition using TypeScript
const ProfileTab: FC<ProfileTabProps> = ({ handleLogout }) => {
  const theme = useAppTheme();
  const navigate = useRouter();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleListItemClick = (menu: ProfileMenuItem) => {
    setSelectedItem(menu.id);
    if (menu.id === 'logout') {
      handleLogout();
    } else if (menu.link) {
      navigate.push(menu.link);
    }
  };

  return (
    <List
      component="nav"
      sx={{
        p: 0,
        '& .MuiListItemIcon-root': {
          minWidth: 32,
          color: theme.palette.grey[500],
        },
      }}
    >
      {profileMenu.map((menu) => (
        <ListItemButton
          key={menu.id}
          selected={selectedItem === menu.id}
          onClick={() => handleListItemClick(menu)}
        >
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText primary={menu.title} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default ProfileTab;
