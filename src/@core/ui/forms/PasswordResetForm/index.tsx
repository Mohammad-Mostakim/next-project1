import { useState } from "react";
import {
    TextField,
    IconButton,
    InputAdornment,
    CardContent,
    SvgIcon,
} from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface PasswordResetFormProps {
    formik: {
        getFieldProps: (field: string) => any;
        touched: any;
        errors: any;
    };
}
interface ValuesType {
    showNewPassword: boolean;
    showConfirmNewPassword: boolean;
  }
const PasswordResetForm: React.FC<PasswordResetFormProps> = ({ formik }) => {
    const [values, setValues] = useState<ValuesType>({
        showNewPassword: false,
        showConfirmNewPassword: false,
      });
      
      const handleClickShowPassword = (fieldName: keyof ValuesType) => {
        setValues({ ...values, [fieldName]: !values[fieldName] });
      };

    return (
        <CardContent>
            <TextField
                label="New Password"
                autoComplete="newPassword"
                type={values.showNewPassword ? "text" : "password"}
                fullWidth
                {...formik.getFieldProps("newPassword")}
                error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                helperText={formik.touched.newPassword && formik.errors.newPassword}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => handleClickShowPassword("showNewPassword")}
                                edge="end"
                            >
                                <SvgIcon>
                                    {values.showNewPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                </SvgIcon>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                label="Confirm New Password"
                autoComplete="confirmPassword"
                type={values.showConfirmNewPassword ? "text" : "password"}
                fullWidth
                {...formik.getFieldProps("confirmPassword")}
                error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                }
                helperText={
                    formik.touched.confirmPassword && formik.errors.confirmPassword
                }
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() =>
                                    handleClickShowPassword("showConfirmNewPassword")
                                }
                                edge="end"
                            >
                                <SvgIcon>
                                    {values.showConfirmNewPassword ? (
                                        <MdVisibilityOff />
                                    ) : (
                                        <MdVisibility />
                                    )}
                                </SvgIcon>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </CardContent>
    );
};

export default PasswordResetForm;
