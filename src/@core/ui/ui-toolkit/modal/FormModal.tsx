"use client"

import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
// uitls 
import { replaceUndefinedWithEmptyString } from "@core/utils/TypeConvertor";
import { passwordResetApiAsync } from "@/lib/Redux/AuthReduxtToolkit/AuthSlice";
//schema
import { YupUserInfoSchema, YupPassChangeSchema, YupPassResetSchema } from "@/@core/utils/YupSchema";
// hooks
import { useAppDispatch, useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import useScriptRef from "@/@core/hooks/useScriptRef";
// project form import 
import PasswordResetForm from "@core/ui/forms/PasswordResetForm";
import UserInfoChangeForm from "@core/ui/forms/UserInfoChangeForm";

// assets
import { IoClose } from "react-icons/io5";
import { UseUpdateUserInfo } from "@/lib/Redux/UserDataQuary/UserDataSlice";

interface FormModalProps {
  openModle: any;
  setOpenModle: any;
  modleName: string;
  initialValues: any;
  message?: string;
}

const FormModal: React.FC<FormModalProps> = ({
  openModle,
  setOpenModle,
  modleName,
  initialValues,
  message,
}) => {
  const dispatch = useAppDispatch();
  const { feedback } = useAppSelector((state) => state.userData);
  const scriptedRef = useScriptRef();

  // initialvalue
  let initValues: any;
  let Schema: any;

  // check modle name
  switch (modleName) {
    case "productEdit":
      break;
    case "passwordChange":
      Schema = YupPassChangeSchema;
      initValues = replaceUndefinedWithEmptyString(initialValues);
      break;
    case "password-Reset":
      Schema = YupPassResetSchema;
      initValues = replaceUndefinedWithEmptyString(initialValues);
      break;
    case "userInfoChange":
      initValues = replaceUndefinedWithEmptyString(initialValues);
      Schema = YupUserInfoSchema;
      break;
    default:
      throw new Error("Unknown step");
  }

  // form handler
  const formik = useFormik({
    initialValues: initValues ? initValues : {},
    validationSchema: Schema,
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        if (values) {
          if (modleName === "userInfoChange") {
            const updateData = replaceUndefinedWithEmptyString(values);
            dispatch(UseUpdateUserInfo(updateData));
          } else if (modleName === "passwordChange") {
            // dispatch(passwordChangeRequestApi(values));
          } else if (modleName === "password-Reset") {
            dispatch(passwordResetApiAsync(values));
          }
          if (feedback.success===true) {
            setStatus({ success: true });
            setSubmitting(true);
            setOpenModle(false);
          } else {
            setStatus({ success: false });
            setSubmitting(false);
          }
        }
      } catch (err:any) {
        if (scriptedRef.current) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }
    },
  });

  function getStepContent(modleName: string, formik: any) {
    switch (modleName) {
      case "productEdit":
        // return <ProductEditCustomForm />;
      case "passwordChange":
        // return <PasswordChangeForm formik={formik} />;
      case "password-Reset":
        return <PasswordResetForm formik={formik} />;
      case "userInfoChange":
        return <UserInfoChangeForm formik={formik} />;
      default:
        return (
          <Typography variant="h2" color="error" align="center">
            Fix -Form ModleName
          </Typography>
        );
    }
  }
const handleSubmit=()=>{
    formik.handleSubmit();
}
  return (
    <Dialog open={openModle} fullWidth>
      <IconButton
      title="Close"
        aria-label="close"
        onClick={() => setOpenModle(false)}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <SvgIcon>
        <IoClose />
        </SvgIcon>
      </IconButton>
      <DialogTitle>{modleName.toUpperCase()}</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          {getStepContent(modleName, formik)}
        </form>
        <DialogContentText sx={{ color: "red" }}>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenModle(false)} color="secondary">
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default FormModal;
