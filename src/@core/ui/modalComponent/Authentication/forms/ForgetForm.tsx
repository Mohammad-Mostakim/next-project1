// material-ui
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,

} from '@mui/material';
// third party
import * as Yup from 'yup';
import { Formik, FormikHelpers } from 'formik';

// project imports
import { passwordResetRequestApiAsync } from '@/lib/Redux/AuthReduxtToolkit/AuthSlice';
import { useAppDispatch, useAppSelector } from '@/lib/Redux/ReduxStore/hooks';
import { useAppTheme } from '@/lib/Theme/hooks';
import AnimationButton from '@/@core/toolkit/AnimationButton';

// ============================|| FIREBASE - LOGIN ||============================ //

interface FormValues {
    email: string;
    submit: any;
}

const ForgetForm = ({ ...others }: any) => {
    const dispatch = useAppDispatch()
    const { feedback }: any = useAppSelector((state) => state.auth);

    const initialValues: FormValues = {
        email: '',
        submit: null
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    });

    const handleSubmit = async (values: FormValues, { setErrors, setStatus, setSubmitting }: FormikHelpers<FormValues>) => {
        try {
            dispatch(passwordResetRequestApiAsync(values))
            if (feedback.tag === "password_reset_request" && feedback?.success === true) {
                setStatus({ success: true });
                setSubmitting(true);
            } else {
                setStatus({ success: false });
                setSubmitting(false);
                // setErrors({ submit: feedback?.message });
            }
        } catch (err) {
            console.error(err);
            if (err) {
                setStatus({ success: false });
                setSubmitting(false);
            }
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            {...others}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }: any): any => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl fullWidth error={Boolean(touched.email && errors.email)} >
                        <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Email Address / Username"
                            inputProps={{}}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {errors.email}
                            </FormHelperText>
                        )}
                    </FormControl>
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
                                Send Now
                            </Button>
                        </AnimationButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default ForgetForm;
