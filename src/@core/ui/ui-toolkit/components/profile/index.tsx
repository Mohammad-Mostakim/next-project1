"use client"
/** @format */

import { useRef, useState } from "react";

// material-ui
import {
  useTheme,
  Avatar,
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Grid,
  IconButton,
  Paper,
  Popper,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";

// project import
import ProfileTab from "./ProfileTab";
import SettingTab from "./SettingTab";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import Transitions from "@/@core/toolkit/Transitions";
import { useAppTheme } from "@/lib/Theme/hooks";
import BoxCard from "../../cards/BoxCard";
import { userSignOutApiAsync } from "@/lib/Redux/AuthReduxtToolkit/AuthSlice";
// assets
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { resetUserData } from "@/lib/Redux/UserDataQuary/UserDataSlice";
import { redirect, useRouter } from "next/navigation";



interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  dir:string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index,dir, ...other } = props;
  return (
    <div
      role="tabpanel"
      dir={dir}
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `profile-tab-${index}`,
    'aria-controls': `profile-tabpanel-${index}`,
  };
}

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile: React.FC = () => {
  const theme = useAppTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const {userInfo}= useAppSelector((state) => state.userData);
  const router=useRouter();
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    await dispatch(userSignOutApiAsync())
      .then(() => dispatch(resetUserData()))
      .then(() => router.push("/login"));
  };

  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: globalThis.MouseEvent | globalThis.TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return;
    }
    setOpen(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const iconBackColorOpen = "background.button";

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.5,
          bgcolor: open ? iconBackColorOpen : "transparent",
          borderRadius: theme.shape.borderRadius - 8,
          "&:hover": { bgcolor: "secondary.lighter" },
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? "profile-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }} boxShadow={theme.shadows[2]} borderRadius={theme.shape.borderRadius}>
          <Avatar
            alt="No Photo"
            src={userInfo?.photo}
            sx={{ width: 32, height: 32, p: 0.3 }}
          />
          {/* {matchUpSm && (
            <Typography variant="body1">{userInfo?.fname[0] || "No Name"}</Typography>
          )} */}
        </Stack>
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            {open && (
              <Paper
                sx={{
                  boxShadow: theme.shadows[3],
                  width: 290,
                  minWidth: 240,
                  maxWidth: 290,
                  [theme.breakpoints.down("md")]: {
                    maxWidth: 250,
                  },
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <BoxCard  border={false} content={false}>
                    <CardContent sx={{ px: 2.5, pt: 3 }}>
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item>
                          <Stack
                            direction="row"
                            spacing={1.25}
                            alignItems="center"
                          >
                            <Avatar
                              alt="profile user"
                              src={userInfo?.photo}
                              sx={{ width: 32, height: 32 }}
                            />
                            <Stack>
                              <Typography variant="h6">{userInfo?.userName || "No UserName"}</Typography>
                              <Typography variant="body2" color="textSecondary">
                                {userInfo?.occupation || "No Occupation"}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                        <Grid item>
                          <IconButton
                            size="large"
                            color="secondary"
                            onClick={handleLogout}
                          >
                            <IoMdLogOut />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardContent>
                    {open && (
                      <>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <Tabs
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="profile tabs"
                          >
                            <Tab
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                textTransform: "capitalize",
                              }}
                              icon={
                                <FaUserCircle
                                  style={{
                                    marginBottom: 0,
                                    marginRight: "10px",
                                  }}
                                />
                              }
                              label="Profile"
                              {...a11yProps(0)}
                            />
                            <Tab
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                textTransform: "capitalize",
                              }}
                              icon={
                                <IoSettingsOutline
                                  style={{
                                    marginBottom: 0,
                                    marginRight: "10px",
                                  }}
                                />
                              }
                              label="Setting"
                              {...a11yProps(1)}
                            />
                          </Tabs>
                        </Box>
                        <TabPanel  value={value} index={0} dir={theme.direction}>
                          <ProfileTab handleLogout={handleLogout} />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                          <SettingTab />
                        </TabPanel>
                      </>
                    )}
                  </BoxCard>
                </ClickAwayListener>
              </Paper>
            )}
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Profile;
