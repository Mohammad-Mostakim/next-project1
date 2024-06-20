/** @format */

import { useState, FC } from 'react';

// material-ui
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

// react-icons
import { FaUser, FaLock, FaCommentDots, FaWrench } from 'react-icons/fa';
import { IoIosInformationCircle } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { useAppTheme } from '@/lib/Theme/hooks';

// Define the type for menu items
interface SettingMenuItem {
  id: string;
  icon: JSX.Element;
  title: string;
  link: string;
}

// Menu items data
const settingMenu: SettingMenuItem[] = [
  { id: 'passc', icon: <IoIosInformationCircle />, title: 'Password Change', link: '' },
  { id: 'accs', icon: <FaUser />, title: 'Account Settings', link: '' },
  { id: 'pric', icon: <FaLock />, title: 'Privacy Center', link: '' },
  { id: 'fdb', icon: <FaCommentDots />, title: 'Feedback', link: '' },
  {
    id: 'cl',
    icon: <FaWrench />,
    title: 'Customize Layout',
    link: '/customize-layout',
  },
];

const SettingTab: FC = () => {
  const theme = useAppTheme();
  const [passwordModal, setPasswordModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const navigate = useRouter();
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const handleListItemClick = (menu: SettingMenuItem) => {
    setSelectedItem(menu.id);
    if (menu.id === 'passc') {
      setPasswordModal(true);
    } else if (menu.link) {
      navigate.push(menu.link);
    }
  };

  return (
    <List
      component="nav"
      sx={{
        p: 0,
        "& .MuiListItemIcon-root": {
          minWidth: 32,
          color: theme.palette.grey[500],
        },
      }}
    >
      {settingMenu.map((menu) => (
        <ListItemButton
          key={menu.id}
          selected={selectedItem === menu.id}
          onClick={() => handleListItemClick(menu)}
        >
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText primary={menu.title} />
        </ListItemButton>
      ))}
      {/* <FormModal
        openModal={passwordModal}
        setOpenModal={setPasswordModal}
        modalName={"passwordChange"}
        initialValues={initialValues}
      /> */}
    </List>
  );
};

export default SettingTab;
