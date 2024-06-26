"use client"
// material-ui
import { useMediaQuery, Button, Stack } from "@mui/material";

// project import
import AnimationButton from "@core/toolkit/AnimationButton";
import { useAppTheme } from "@/lib/Theme/hooks";
import { BsGoogle, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const OAuthController = () => {
  const theme = useAppTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOAuthClick = async (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    // login || singup
    e.preventDefault();
    if (name === "google") {
      window.open("http://localhost:8080/auth/google", "_self");
    }
  };

  return (
    <Stack
      spacing={matchDownSM ? 1 : 2}
      direction={matchDownSM ? "row" : "column"}
      justifyContent={matchDownSM ? "space-around" : "space-between"}
      sx={{
        "& .MuiButton-startIcon": {
          mr: matchDownSM ? 0 : 1,
          ml: matchDownSM ? 0 : -0.5,
        },
      }}
    >
      <AnimationButton>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth={!matchDownSM}
          startIcon={<BsGoogle/>}
          onClick={(e) => handleOAuthClick(e, "google")}
        >
          {!matchDownSM && "Google"}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth={!matchDownSM}
          startIcon={<BsTwitterX/>}
          onClick={(e) => handleOAuthClick(e, "twitter")}
          sx={{ my: ".1rem" }}
        >
          {!matchDownSM && "Twitter"}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth={!matchDownSM}
          startIcon={<FaFacebook/>}
          onClick={(e) => handleOAuthClick(e, "facebook")}
        >
          {!matchDownSM && "Facebook"}
        </Button>
      </AnimationButton>
    </Stack>
  );
};

export default OAuthController;
