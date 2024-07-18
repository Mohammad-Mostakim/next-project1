import React, { useMemo } from "react";
import { List, MenuList, Typography, useMediaQuery } from "@mui/material";
// Project imports
import { useAppTheme } from "@/lib/Theme/hooks";
import { useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { GetMenuItemsByRole } from "@/@core/navigation";
import MenuViewer, { MenuItemType } from "./MenuViewer";
import { usePathname } from "next/navigation";
import { Authentication } from "./Authentication";
import SkeletonDrawerMenu from "@core/ui/ui-toolkit/skeleton/SkeletonDrawerMenu";

export const NavbarMenuRender = () => {
  const theme = useAppTheme();
  const deviceDownSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { user } = useAppSelector((state) => state.auth);
  const current_url: string = usePathname()
  const { navbarValues } = GetMenuItemsByRole(user, current_url)
  const MenuItems = useMemo(() => navbarValues[0], [navbarValues]);

  const renderMenuItems = (menuItems: MenuItemType[]) => {
    if (menuItems && menuItems.length > 0) {
      return menuItems.map((menu: any) => {
        if (deviceDownSM) {
          const { title, ...rest } = menu;
          menu = { ...rest };
        }
        switch (menu.type) {
          case "collapse":
          case "single":
            return (
              <MenuViewer
                key={menu.id}
                mainMenu={menu}
                menuType={"navbar"}
              />
            );
          default:
            return (
              <Typography
                key={menu.id}
                variant="h6"
                color="error"
                align="center"
              >
                Fix - Navbar Navigation List
              </Typography>
            );
        }
      });
    } else {
      return (
        <Typography variant="h6" color="error" align="center">
          Empty NavMenu
        </Typography>
      );
    }
  };

  return (
    <MenuList sx={{ display: "flex" }}>
      {MenuItems && renderMenuItems(MenuItems)}
    </MenuList>
  );
};

export const DrawerMenuRender: React.FC = () => {
  const theme = useAppTheme();
  const matchUpLg = useMediaQuery(theme.breakpoints.up("md"));
  const { drawerOpen } = useAppSelector((state) => state.theme);
  const { user, status } = useAppSelector((state) => state.auth);
  const current_url: string = usePathname()
  const { drawerValues } = GetMenuItemsByRole(user, current_url);
  const MenuItems = useMemo(() => drawerValues[0], [drawerValues]);

  let miniDrawer: boolean = false;


  const renderMenuItems = (menuItems: MenuItemType[] | undefined) => {
    return menuItems?.map((menu: any) => {
      if (!drawerOpen && matchUpLg) {
        const { children, ...rest } = menu;
        menu = { ...rest };
        miniDrawer = true;
      }
      switch (menu.type) {
        case "collapse":
        case "single":
          return (
            <MenuViewer
              key={menu.id}
              mainMenu={menu}
              miniDrawer={miniDrawer}
              menuType={"drawer"}
            />
          );
        default:
          return (
            <Typography key={menu.id} variant="h6" color="error" align="center">
              Fix - Drawer Navigation List
            </Typography>
          );
      }
    });
  };

  return (
    <List sx={{ overflowX: "hidden", height: "100vh", m: 1 }}>
      <Authentication>
        {(status === "loading" || status === "idle") ? <SkeletonDrawerMenu /> : (renderMenuItems(MenuItems))}
      </Authentication>
    </List>
  );
};
