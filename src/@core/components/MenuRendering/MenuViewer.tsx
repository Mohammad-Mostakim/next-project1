import React, { useCallback, useEffect, useRef, useState } from "react";
import { ListItemIcon, ListItemText, List, ListItem, Collapse, ListItemButton, useMediaQuery } from "@mui/material";
import { MdOutlineExpandLess, MdOutlineExpandMore, MdFmdBad } from "react-icons/md";
import Link from "next/link";
import { useAppDispatch } from "@/lib/Redux/ReduxStore/hooks";
import { menuActiveReducer, setDrawerOpen } from "@/lib/Theme/ThemeSlice";
import { useAppTheme } from "@/lib/Theme/hooks";
import { usePathname } from "next/navigation";

export interface MenuItemType {
    id: number;
    title: string;
    url: string;
    icon?: React.ElementType;
    external?: boolean;
    type?: string;
    children?: MenuItemType[];
}

interface MenuViewerProps {
    mainMenu: MenuItemType;
    drawerOpen?: boolean;
    miniDrawer?: boolean;
    menuType?:string|"drawer" |"navber"
}

const MenuViewer: React.FC<MenuViewerProps> = ({ mainMenu,menuType, drawerOpen, miniDrawer }) => {
    const theme = useAppTheme();
    const matchDownSm= useMediaQuery(theme.breakpoints.down("sm"));
    const hasChildren = mainMenu.children && mainMenu.children.length > 0;
    const Icon = mainMenu.icon ? mainMenu.icon : MdFmdBad;
    const dispatch = useAppDispatch();
    const [collapseOpen, setCollapseOpen] = useState<boolean>(false);
    const current_url = usePathname();
    const urlRef = useRef<string>();

    const initialOpenHandler = useCallback(
        (mainMenu:MenuItemType):boolean => {
          if (mainMenu?.url === current_url) {
            return true;
          }
          if (mainMenu.children && mainMenu.children.length > 0) {
            for (const childItem of mainMenu.children) {
              if (initialOpenHandler(childItem)) {
                return true;
              }
            }
          }
          return false;
        },
        [current_url]
      );
    
      useEffect(() => {
        if (initialOpenHandler(mainMenu) && urlRef.current !==current_url) {
          setCollapseOpen(true);
        }
      }, [mainMenu,initialOpenHandler,current_url]); 
    //   check selected list 
      const selected = initialOpenHandler(mainMenu);
    // handle toggle menu 
    const handleMenuToggle = (menu: MenuItemType) => {
        dispatch(menuActiveReducer(menu.url));
        urlRef.current=menu.url;
        if (menu?.children) {
            setCollapseOpen((prev) => !prev);
            if (miniDrawer) {
                dispatch(setDrawerOpen());
            }
        }
        if (matchDownSm && !menu.children && menuType==="drawer" ) {
            dispatch(setDrawerOpen());
        }
    };
    // Button props
    let buttonProps: any = {
        // eslint-disable-next-line react/display-name
        component: React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>((props, ref) => (
            <Link ref={ref} {...props} href={mainMenu.url} passHref />
        )),
    };

    if (mainMenu?.external) {
        buttonProps = {
            component: "a",
            href: mainMenu.url,
            target: "_blank",
        };
    }

    return (
        <ListItem
            key={mainMenu.id}
            sx={{
                flexDirection: "column",
                alignItems: "stretch",
                p: 0,
                pb: 1,
                m:menuType==="navbar"?1:0,

            }}

        >
            <ListItemButton title={miniDrawer? `${mainMenu.title}`:""}  selected={selected} {...buttonProps} sx={{ borderRadius: 1, py: 1, justifyContent: "center" }} onClick={() =>  handleMenuToggle(mainMenu)}>
                <ListItemIcon sx={{mx:2}} >
                    <Icon style={{ fontSize: drawerOpen ? "1rem" : "1.25rem" }} />
                </ListItemIcon>
                {!miniDrawer && mainMenu.title && (
                    <ListItemText
                        sx={
                            mainMenu.type === "single" || mainMenu.type === "collapse"
                                ? { fontSize: ".90rem", fontWeight: 500 }
                                : { fontSize: ".80rem", fontWeight: 400 }
                        }
                        primary={mainMenu.title}
                    />
                )}
                {hasChildren && (collapseOpen ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />)}
            </ListItemButton>
            {hasChildren && (
                <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ mt: 1, pl: 2 }}>
                        {mainMenu.children && mainMenu.children.map((childmenu: MenuItemType) => (
                            <MenuViewer
                                key={childmenu.id}
                                mainMenu={childmenu}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </ListItem>
    );
};

export default MenuViewer;
