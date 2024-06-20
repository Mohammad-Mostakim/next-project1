"use client"

import React, { useState, useEffect, useCallback } from "react";
// Material-UI
import {
    Breadcrumbs as MuiBreadcrumbs,
    Box,
    Card,
    Divider,
    Grid,
    Typography,
    List,
    SvgIcon,
    Button,
    useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
// hooks 
import { useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { useAppTheme } from "@/lib/Theme/hooks";

// Assets
import { MdArrowForwardIos, MdDashboard } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { RxSlash,RxChevronRight  } from "react-icons/rx";

const linkSX = {
    display: "flex",
    textDecoration: "none",
    alignContent: "center",
    alignItems: "center",
};

interface CustomBreadcrumbsProps {
    card?: boolean;
    divider?: boolean;
    icon?: boolean;
    icons?: boolean;
    maxItems?: number;
    breadcrumbItems: any[];
    rightAlign?: boolean;
    separator?: React.ElementType | object;
    title?: boolean;
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({
    card,
    divider,
    icon,
    icons,
    maxItems,
    breadcrumbItems,
    rightAlign,
    separator,
    title,
}) => {
    const theme = useAppTheme();
    const { user } = useAppSelector(state => state.auth);
    const { themeConfig } = useAppSelector(state => state.theme)
    const iconStyle = {
        marginRight: theme.spacing(0.75),
        marginTop: `-${theme.spacing(0.25)}`,
        width: "1rem",
        height: "1rem",
        color: theme.palette.secondary.main,
    };
    const [isBreadcrumbs, setIsBreadcrumbs] = useState(false);
    const [main] = useState(user?.role?.toUpperCase());
    const [mainMenu, setMainMenu] = useState<any>([]);
    const [item, setItem] = useState<any>();
    const deviceUnderXMd = useMediaQuery(theme.breakpoints.down("md"));
    const current_url = usePathname();

    const seperatCollapse = useCallback(
        (main_menu:any) => {
            if (main_menu.children) {
                if (current_url === main_menu.url) {
                    setIsBreadcrumbs(true);
                    setMainMenu(main_menu);
                    setItem(null);
                }
                main_menu?.children?.filter((collapse_menu: any) => {
                    if (collapse_menu.type && collapse_menu.type === "collapse") {
                        seperatCollapse(collapse_menu);
                    } else if (
                        collapse_menu.type &&
                        collapse_menu.type === "expand"
                    ) {
                        if (current_url === collapse_menu.url) {
                            setIsBreadcrumbs(true);
                            setMainMenu(main_menu);
                            setItem(collapse_menu);
                        }
                    }
                    return false;
                });
            }
        },
        [current_url]
    );

    const getSingle = useCallback(
        (menu:any) => {
            if (current_url === menu.url) {
                setIsBreadcrumbs(true);
                setMainMenu(menu);
                setItem(menu);
            }
            return false;
        },
        [current_url]
    );

    const handleBreadcrumb = useCallback(() => {
        breadcrumbItems?.map((main_menu: any) => {

            switch (main_menu?.type) {
                
                case "collapse":
                    seperatCollapse(main_menu);
                    break;
                case "single":
                    getSingle(main_menu);
                    break;
                default:
                    break;
            }
            return false;
        });
    }, [breadcrumbItems, getSingle, seperatCollapse]);

    useEffect(() => {
        handleBreadcrumb();
    }, [handleBreadcrumb]);

    const SeparatorIcon = separator;
    const separatorIcon = separator ? (
        <RxChevronRight  fontSize="1rem" />
    ) : (
        <RxSlash fontSize="1rem" />
    );

    let mainMenuContent;
    let itemContent;
    let breadcrumbContent = <Typography />;

    if (mainMenu && mainMenu?.type === "collapse") {
        mainMenuContent = (
            <List sx={{ display: "flex", gap: "1rem" }}>
                <Link
                    style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        gap: ".2rem",
                        color: "#1115cd",
                        fontWeight: "800",
                    }}
                    color="inherit"
                    href={mainMenu?.url}
                >
                    <Button
                        color="inherit"
                        startIcon={<SvgIcon component={mainMenu?.icon} inheritViewBox />}
                        endIcon={<MdArrowForwardIos />}
                    >
                        {deviceUnderXMd ? mainMenu?.title?.split(" ")[0] : mainMenu.title}
                    </Button>
                </Link>

                {mainMenu?.children?.map((coll_menu: any) => (
                    <Link
                        key={coll_menu.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                        }}
                        href={coll_menu.url}
                    >
                        <Button
                            startIcon={<SvgIcon component={coll_menu.icon} inheritViewBox />}
                            endIcon={coll_menu?.type === "collapse" && <MdDashboard />}
                        >
                            {deviceUnderXMd
                                ? coll_menu?.title?.split(" ")[0]
                                : coll_menu.title}
                        </Button>
                    </Link>
                ))}
            </List>
        );
    }

    if (item) {
        itemContent = (
            <Link
                style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: theme.palette.success.light,
                }}
                href={item?.url}
            >
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                    {item?.title}
                </Typography>
            </Link>
        );
    }

    if (isBreadcrumbs) {
        if (
            (mainMenu?.breadcrumbs && mainMenu?.breadcrumbs !== false) ||
            (item && item?.breadcrumbs !== false)
        ) {
            breadcrumbContent = (
                <Card
                    sx={{
                        marginBottom:
                            card === false ? 0 : theme.spacing(themeConfig.gridSpacing),
                        border: card === false ? "none" : "1px solid",
                        borderColor: theme.palette.customBg?.button,
                        mt: "1rem",
                        background: card === false ? "transparent" : theme.palette.customBg?.main,
                    }}
                >
                    <Box sx={{ p: 2, pl: card === false ? 0 : 2 }}>
                        <Grid
                            container
                            direction={rightAlign ? "row" : "column"}
                            justifyContent={rightAlign ? "space-between" : "flex-start"}
                            alignItems={rightAlign ? "center" : "flex-start"}
                            spacing={1}
                        >
                            {title && (
                                <Grid item>
                                    <Typography variant="h3" sx={{ fontWeight: 1000 }}>
                                        {mainMenu?.title}
                                    </Typography>
                                </Grid>
                            )}
                            <Grid item>
                                <MuiBreadcrumbs
                                    sx={{
                                        "& .MuiBreadcrumbs-separator": {
                                            width: 16,
                                            ml: 1.25,
                                            mr: 1.25,
                                        },
                                    }}
                                    aria-label="breadcrumb"
                                    maxItems={maxItems || 8}
                                    separator={separatorIcon}
                                >
                                    <Link
                                        href={user ? "/dashboard" : "/"}
                                        style={linkSX}
                                    >
                                        {icons && <BiHome style={iconStyle} />}
                                        {icon && <BiHome style={{ ...iconStyle, marginRight: 0 }} />}
                                        {!icon && <Typography color="text.primary" fontWeight="400">{main}</Typography> }
                                    </Link>
                                    {mainMenuContent}
                                    {itemContent}
                                </MuiBreadcrumbs>
                            </Grid>
                        </Grid>
                    </Box>
                    {card === false && divider !== false && (
                        <Divider
                            sx={{
                                borderColor: theme.palette.customBg?.paper,
                                mb: themeConfig.gridSpacing,
                            }}
                        />
                    )}
                </Card>
            );
        }
    }

    return breadcrumbContent;
};

export default CustomBreadcrumbs;
