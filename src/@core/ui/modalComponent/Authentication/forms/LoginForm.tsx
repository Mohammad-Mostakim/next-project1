"use client"
import React, { useState } from "react";
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

// third party
import { useFormik } from "formik";

// project imports
import { setAuthModalType, userLoginApiAsync } from "@/lib/Redux/AuthReduxtToolkit/AuthSlice";
import { useAppTheme } from "@/lib/Theme/hooks";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { YupLoginSchema } from "@core/utils/YupSchema";
import OAuthController from "./controller/OAuthController";
// assets
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
// ============================|| FIREBASE - LOGIN ||============================ //

const LoginForm = ({ ...others }: { [key: string]: any }) => {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();

  const { feedback } = useAppSelector((state) => state.auth);
  const { themeConfig } = useAppSelector((state) => state.theme);
  const [checked, setChecked] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSwitch = () => {
    dispatch(setAuthModalType({ authModalName: "forgotPassword" }));
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // form handler
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
    values,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: YupLoginSchema,
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        await dispatch(userLoginApiAsync({ ...values }));
        if (feedback?.success === true) {
          setStatus({ success: true });
          setSubmitting(true);
        } else {
          setStatus({ success: false });
          setSubmitting(false);
          //   setErrors({ email: feedback?.message | "no error", password: '', submit: undefined });

        }
      } catch (err) {
        if (err) {
          setStatus({ success: false });
          setSubmitting(false);
        }
      }
    },
  });

  return (
    <React.Fragment>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          {/* oauth  */}
          <OAuthController />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Button
              variant="outlined"
              sx={{
                cursor: "unset",
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                fontWeight: 500,
                borderRadius: `${themeConfig.borderRadius}px`,
              }}
              disableRipple
              disabled
            >
              OR
            </Button>

            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              Sign in with Email address
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <form noValidate onSubmit={handleSubmit} {...others}>
        <FormControl
          fullWidth
          error={Boolean(touched.email && errors.email)}
        >
          <InputLabel htmlFor="outlined-adornment-username-login">
            Email Address / Username
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-username-login"
            type="email"
            value={values.email}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            label="Email Address / Username"
            inputProps={{}}
            autoComplete="username"
          />
          {touched.email && errors.email && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.email}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl
          fullWidth
          error={Boolean(touched.password && errors.password)}
        >
          <InputLabel htmlFor="outlined-adornment-current-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-current-password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            autoComplete="current-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  <SvgIcon sx={{ color: "customBg.icon" }}>
                    {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                  </SvgIcon>
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            inputProps={{}}
          />
          {touched.password && errors.password && (
            <FormHelperText
              error
              id="standard-weight-helper-text-current-password-login"
            >
              {errors.password}
            </FormHelperText>
          )}
        </FormControl>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                name="checked"
                color="primary"
              />
            }
            label="Remember me"
          />
          {feedback && feedback?.success === false && feedback.tag === "user_login" && (
            <Button color="error" onClick={handleFormSwitch}>
              Forgot Password?
            </Button>
          )}
        </Stack>
        {feedback && feedback?.success === false &&feedback.tag === "user_login" && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>{feedback?.message}</FormHelperText>
          </Box>
        )}

        <Box sx={{ mt: 2 }}>

          <Button
            disableElevation
            disabled={isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="secondary"
          >
            Sign in
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
