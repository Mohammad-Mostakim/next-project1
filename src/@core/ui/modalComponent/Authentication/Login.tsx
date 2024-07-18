/** @format */

// material-ui
import {
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
// hooks 
import { useAppDispatch, useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { useAppTheme } from "@/lib/Theme/hooks";
// project imports
import { setAuthModalType } from "@/lib/Redux/AuthReduxtToolkit/AuthSlice";
import AuthCardWrapper from "./style/AuthCardWarper";
import AuthWrapper from "./style/AuthWarper";
import Logo from "@core/ui/ui-toolkit/logo";
import LoginForm from "./forms/LoginForm";
import CircularLoader from "@core/ui/ui-toolkit/loader/CircularLoader";

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  const theme = useAppTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.auth);

  const handleFormSwitch = () => {
    dispatch(setAuthModalType({ authModalName: "register" }));
  };

  return (
    <AuthWrapper>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >

            <Grid item>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item sx={{ mb: 3 }}>
                    <Logo />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? "h3" : "h2"}
                          >
                            Hi, Welcome Back
                          </Typography>
                          <Typography
                            variant="caption"
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : "inherit"}
                          >
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <LoginForm />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="center"
                      xs={12}
                    >
                       {status === "loading" ? (
                        <CircularLoader />
                      ):(<Button onClick={handleFormSwitch}>
                      Don&apos;t have an account?
                    </Button>)}
                      
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
