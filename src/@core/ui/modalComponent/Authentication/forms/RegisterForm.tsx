/** @format */
import { useState, useEffect } from "react";
import Link from "next/link";
// material-ui
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
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
// assets
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import AnimationButton from "@/@core/toolkit/AnimationButton";
import OAuthController from "./controller/OAuthController";
// third party
import { useFormik } from "formik";

// project imports
import { userCreateAsync } from "@/lib/Redux/AuthReduxtToolkit/AuthSlice";

// hooks 
import { useAppTheme } from "@/lib/Theme/hooks";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { YupRegisterSchema } from "@/@core/utils/YupSchema";
import { strengthColor, strengthIndicator } from "@/@core/utils/PasswordStrength";



// ===========================|| FIREBASE - REGISTER ||=========================== //

const RegisterForm = ({ ...others }: any) => {
  const theme = useAppTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const { themeConfig } = useAppSelector((state) => state.theme);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState<any>();
  const dispatch = useAppDispatch();
  const { feedback, status } = useAppSelector(state => state.auth);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const color = theme?.palette;

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp, color));
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
      fname: "",
      lname: "",
    },
    validationSchema: YupRegisterSchema,
    onSubmit: (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        const registerData: any = { ...values, ATC: checked };
        delete registerData?.submit;
        if (registerData) dispatch(userCreateAsync(registerData));

        if (status === "succeeded" && feedback?.success === true &&feedback?.tag==="user_created") {
          setStatus({ success: true });
          setSubmitting(true);
        } else {
          setStatus({ success: false });
          setSubmitting(false);
        }
      } catch (err) {
        if (err) {
          setStatus({ success: false });
          setSubmitting(false);
        }
      }
    },
  });

  useEffect(() => {
    changePassword("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <OAuthController />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ alignItems: "center", display: "flex" }}>
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
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign up with Email address</Typography>
          </Box>
        </Grid>
      </Grid>

      <form noValidate onSubmit={handleSubmit} {...others}>
        <Grid container spacing={matchDownSM ? 0 : 3}>
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              error={Boolean(touched.fname && errors.fname)}

            >
              <InputLabel htmlFor="outlined-adornment-fname-register">First Name*</InputLabel>
              <OutlinedInput
                id="outlined-adornment-fname-register"
                type="text"
                value={values.fname}
                name="fname"
                autoComplete="fname"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.fname && errors.fname && (
                <FormHelperText error id="standard-weight-helper-text-register">
                  {errors.fname}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              error={Boolean(touched.lname && errors.lname)}

            >
              <InputLabel htmlFor="outlined-adornment-lname-register">Last Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-lname-register"
                type="text"
                value={values.lname}
                name="lname"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.lname && errors.lname && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.lname}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <FormControl
          fullWidth
          error={Boolean(touched.email && errors.email)}

        >
          <InputLabel htmlFor="outlined-adornment-username-register">Email Address*</InputLabel>
          <OutlinedInput
            id="outlined-adornment-username-register"
            type="email"
            value={values.email}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            inputProps={{}}
            autoComplete="username"
          />
          {touched.email && errors.email && (
            <FormHelperText error id="standard-weight-helper-text--register">
              {errors.email}
            </FormHelperText>
          )}
          {feedback && feedback?.tag==="user_created" && feedback?.success === false && (
            <FormHelperText error id="standard-weight-helper-text--register">
              {feedback?.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl
          fullWidth
          error={Boolean(touched.password && errors.password)}

        >
          <InputLabel htmlFor="outlined-adornment-current-password-register">Password*</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-register"
            type={showPassword ? "text" : "password"}
            value={values.password}
            name="password"
            label="current-password"
            autoComplete="current-password"
            onBlur={handleBlur}
            onChange={(e) => {
              handleChange(e);
              changePassword(e.target.value);
            }}
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
            inputProps={{}}
          />
          {touched.password && errors.password && (
            <FormHelperText error id="standard-weight-helper-text-password-register">
              {errors.password}
            </FormHelperText>
          )}
        </FormControl>

        {strength !== 0 && (
          <FormControl fullWidth>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Box
                    style={{ backgroundColor: level?.color }}
                    sx={{ width: 85, height: 8, borderRadius: "7px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" fontSize="0.75rem">
                    {level?.label}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </FormControl>
        )}

        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked ? true : false)}
                  name="checked"
                  color="primary"
                />
              }
              label={
                <Typography variant="subtitle1">
                  Agree with &nbsp;
                  <Typography variant="subtitle1" component={Link} href="#">
                    Terms & Condition.
                  </Typography>
                </Typography>
              }
            />
          </Grid>
        </Grid>
        {errors.submit && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>{errors.submit}</FormHelperText>
          </Box>
        )}

        <Box sx={{ mt: 2 }}>
          <AnimationButton>
            <Button
              disableElevation
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="secondary"
            >
              Sign up
            </Button>
          </AnimationButton>
        </Box>
      </form>
    </>
  );
};

export default RegisterForm;
