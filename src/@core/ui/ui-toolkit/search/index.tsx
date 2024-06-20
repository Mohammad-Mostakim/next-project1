"use client"

import React, { useEffect, useRef, useState } from "react";
// material-ui
import {
  styled,
  Avatar,
  Box,
  ButtonBase,
  Card,
  Grid,
  InputAdornment,
  OutlinedInput,
  Popper,
  useMediaQuery,
} from "@mui/material";

// third-party
import PopupState, { bindPopper, bindToggle } from "material-ui-popup-state";

// project imports
// assets
import { HiOutlineAdjustmentsHorizontal, HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { shouldForwardProp } from "@mui/system";
import Transitions from "@/@core/toolkit/Transitions";
import { useAppTheme } from "@/lib/Theme/hooks";

// styles
const PopperStyle = styled(Popper, { shouldForwardProp })(({ theme }) => ({
  zIndex: 1100,
  width: "98%",
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
  },
}));

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(
  ({ theme }) => ({
    width: 420,
    height: "2.5rem",
    "& input": {
      paddingLeft: "4px !important",
    },
    [theme.breakpoints.down("xl")]: {
      width: 300,
      height: "2.3rem",
    },
    [theme.breakpoints.down("lg")]: {
      width: 180,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  })
);

const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(
  ({ theme }) => ({
    color: theme.palette.success.light,
    "&:hover": {
      color: theme.palette.action.hover,
    },
  })
);

interface MobileSearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  popupState: any;
}

const MobileSearch: React.FC<MobileSearchProps> = ({ value, setValue, popupState }) => {
  const theme = useAppTheme()

  return (
    <OutlineInputStyle
      id="input-search-header"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search"
      startAdornment={
        <InputAdornment position="start">
          <HiOutlineSearch
            size="1rem"
            color={theme.palette.grey[500]}
          />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <ButtonBase sx={{ borderRadius: theme.shape.borderRadius }}>
            <HeaderAvatarStyle variant="rounded">
              <HiOutlineAdjustmentsHorizontal />
            </HeaderAvatarStyle>
          </ButtonBase>
          <Box>
            <ButtonBase sx={{ borderRadius: theme.shape.borderRadius }}>
              <Avatar
                variant="rounded"
                sx={{
                  color: theme.palette.text.primary,
                  "&:hover": {
                    background: theme.palette.action.hover,
                    color: theme.palette.text.secondary,
                  },
                }}
                {...bindToggle(popupState)}
              >
                <HiOutlineXMark />
              </Avatar>
            </ButtonBase>
          </Box>
        </InputAdornment>
      }
      aria-describedby="search-helper-text"
      inputProps={{ "aria-label": "weight" }}
    />
  );
};

export const SearchToolkit: React.FC = () => {
  const theme = useAppTheme()
  const [value, setValue] = useState<string>("");
  const UnderMdDevice:boolean = useMediaQuery(theme.breakpoints.down("md"));
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault(); // Prevent default browser behavior
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <React.Fragment>
      {UnderMdDevice && (
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
              <React.Fragment>
                <Box sx={{ m: 2, overflow: "hidden" }}>
                  <ButtonBase
                    sx={{ borderRadius: theme.shape.borderRadius - 4 }}
                  >
                    <HeaderAvatarStyle
                      variant="rounded"
                      {...bindToggle(popupState)}
                    >
                      <HiOutlineSearch/>
                    </HeaderAvatarStyle>
                  </ButtonBase>
                </Box>
                <PopperStyle {...bindPopper(popupState)} transition>
                  {({ TransitionProps }) => (
                    <Transitions
                      type="zoom"
                      {...TransitionProps}
                      position= "center"
                    >
                      <Card
                        sx={{
                          background: "transparent !important",
                          overflow: "hidden",
                          [theme.breakpoints.down("sm")]: {
                            border: 0,
                            boxShadow: "none",
                          },
                        }}
                      >
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Grid item xs>
                            <MobileSearch
                              value={value}
                              setValue={setValue}
                              popupState={popupState}
                            />
                          </Grid>
                        </Grid>
                      </Card>
                      </Transitions>
                  )}
                </PopperStyle>
              </React.Fragment>
            )}
          </PopupState>
        </Box>
      )}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <OutlineInputStyle
          id="input-search-header"
          value={value}
          onChange={(e):void => setValue(e.target.value)}
          placeholder="Search /Ctrl + K"
          inputRef={searchInputRef}
          startAdornment={
            <InputAdornment position="start">
              <HiOutlineSearch
              />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <ButtonBase
                sx={{ borderRadius: theme.shape?.borderRadius - 4 }}
              >
                <HeaderAvatarStyle variant="rounded">
                  <HiOutlineAdjustmentsHorizontal />
                </HeaderAvatarStyle>
              </ButtonBase>
            </InputAdornment>
          }
          aria-describedby="search-helper-text"
          inputProps={{ "aria-label": "weight" }}
        />
      </Box>
    </React.Fragment>)
}
