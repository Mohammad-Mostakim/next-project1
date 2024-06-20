import * as Yup from "yup";

export const YupRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string().min(8).required("Password is required"),
  fname: Yup.string().min(1).required("First name is required field"),
  lname: Yup.string().max(15),
});

export const YupLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string().min(8).required("Password is required"),
});

export const YupUserInfoSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").max(255),
  fname: Yup.string().min(3).required("First name is required field"),
  lname: Yup.string().max(15),
  gender: Yup.string().required("Gender is required field"),
  userName:Yup.string().required("First name is required field").min(3)
});

export const YupPassChangeSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .required("New password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match"), // Change null to undefined
  });
  
  export const YupPassResetSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("New password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match"), // Change null to undefined
  });
  