/** @format */
"use client"
// ** React Imports
import React, { forwardRef, useState } from 'react';
// ** MUI Imports
import {
  Alert,
  AlertTitle,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BiCloset } from 'react-icons/bi';
import Link from 'next/link';

interface CustomInputProps {
  error?: boolean;
  helperText?: string;
  label?: string;
  value?: any;
  onClick?: () => void;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => (
  <TextField
    variant="standard"
    inputRef={ref}
    label="Birth Date"
    fullWidth
    {...props}
  />
));

CustomInput.displayName = 'CustomInput';

const Language = ['English', 'Spanish', 'French', 'German'];

interface UserInfoChangeFormProps {
  formik: any; // You can define a more specific type for formik if you use Formik's types
}

const UserInfoChangeForm: React.FC<UserInfoChangeFormProps> = ({ formik }) => {
  // ** State
  const [openAlert, setOpenAlert] = useState(true);

  const textFields = [
    { label: 'Bio', name: 'bio', multiline: true, minRows: 2 },
    { label: 'Phone', name: 'contractNumber', type: 'number', placeholder: '(123) 456-7890' },
    { label: 'Website', name: 'website', placeholder: 'https://example.com/' },
    { label: 'User Name', name: 'userName' },
    { label: 'Extra Email', name: 'email', placeholder: 'add extra email' },
    { label: 'First Name', name: 'fname' },
    { label: 'Last Name', name: 'lname' },
    { label: 'Work Place', name: 'workPlace' },

  ];
  return (
    <CardContent>
      <Grid container spacing={5}>
        {textFields.map((field) => (
          <Grid item xs={12} sm={field.name === 'bio' ? 12 : 6} key={field.name}>
            <TextField
              fullWidth
              variant="standard"
              label={field.label}
              name={field.name}
              multiline={field.multiline}
              minRows={field.minRows}
              type={field.type}
              placeholder={field.placeholder}
              {...formik.getFieldProps(field.name)}
              error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
              helperText={formik.touched[field.name] && formik.errors[field.name]}
            />
          </Grid>
        ))}

        <Grid item xs={12} sm={6}>
          <DatePicker
            showYearDropdown
            showMonthDropdown
            name="birthday"
            id="account-settings-date"
            placeholderText="MM-DD-YYYY"
            customInput={
              <CustomInput
                error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                helperText={formik.touched.birthday && formik.errors.birthday}
              />
            }
            selected={formik?.values?.birthday}
            onChange={(date) => formik.setFieldValue('birthday', date)}
            onBlur={() => formik.setFieldTouched('birthday', true)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormLabel sx={{ fontSize: '0.875rem' }}>Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="account-settings-info-radio"
              {...formik.getFieldProps('gender')}
            >
              <FormControlLabel value="male" label="Male" control={<Radio />} />
              <FormControlLabel value="female" label="Female" control={<Radio />} />
              <FormControlLabel value="other" label="Other" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-country-label">Country</InputLabel>
            <Select
              label="Country"
              labelId="demo-multiple-country-label"
              id="demo-country"
              name="country"
              {...formik.getFieldProps('country')}
            >
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
              <MenuItem value="Australia">Australia</MenuItem>
              <MenuItem value="Germany">Germany</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-Language-label">Select Languages</InputLabel>
            <Select
              labelId="demo-multiple-Language-label"
              id="demo-multiple-Language"
              multiple
              label="Select Languages"
              name="languages"
              value={formik.values.languages}
              onChange={formik.handleChange}
            >
              {Language.map((language) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="occupation-label">Occupation</InputLabel>
            <Select
              labelId="occupation-label"
              id="student"
              name="occupation"
              {...formik.getFieldProps('occupation')}
            >
              <MenuItem value="Programmer">Programmer</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Designer">Designer</MenuItem>
              <MenuItem value="Visitor">Visitor</MenuItem>
              <MenuItem value="Subscriber">Subscriber</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              name="status"
              {...formik.getFieldProps('status')}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {openAlert && (
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Alert
              severity="warning"
              sx={{ '& a': { fontWeight: 400 } }}
              action={
                <IconButton
                  size="small"
                  color="inherit"
                  aria-label="close"
                  onClick={() => setOpenAlert(false)}
                >
                  <BiCloset fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
              <Link href="/" onClick={(e) => e.preventDefault()}>
                Resend Confirmation
              </Link>
            </Alert>
          </Grid>
        )}
      </Grid>
    </CardContent>
  );
};

export default UserInfoChangeForm;
