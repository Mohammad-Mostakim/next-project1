
import {
  Alert,
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

// project import 
import { setAuthModalType } from "@/lib/Redux/AuthReduxtToolkit/AuthSlice";
import AuthWrapper from "./utils/AuthWarper";
import AuthCardWrapper from "./utils/AuthCardWarper";
import Logo from "@core/ui/ui-toolkit/logo";
import ForgetForm from "./forms/ForgetForm";
import CircularLoader from "@core/ui/ui-toolkit/loader/CircularLoader";

// ================================|| AUTH3 - LOGIN ||================================ //

const ForgotPassword = () => {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const { feedback,status } = useAppSelector((state) => state.auth);
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
                   <Logo/>
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
                    {feedback && feedback?.success === true &&feedback.tag==="password_reset_request" ? (
                      <Alert severity="success">{feedback?.message}</Alert>
                    ) : (
                      <ForgetForm />
                    )}
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
      {/* <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
      </Grid> */}
    </AuthWrapper>
  );
};

export default ForgotPassword;
