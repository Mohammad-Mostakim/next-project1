/** @format */

import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.BACKEND_BASE_URL;
const instance = axios.create({
  baseURL: baseUrl,
});

// Axios response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => {
    if (!error.response.data) {
      return Promise.reject(error);
    }
    return error.response;
  }
);

// Define types for user data and login information
export interface FeedBackProps{
  success?: boolean;
  message?: string;
  tag?: string |"user_created"
}

export interface AutenticatedUser{
  uid: string;
  passNeed: boolean;
  role: string |"admin" |"user";
}
interface ApiResponse<T> {
  data: T;
  feedback:FeedBackProps;
  User?:AutenticatedUser

}

type registerUserData = {
  username: string;
  email: string;
  password: string;
};

type LoginInfoProps = {
  email: string;
  password: string;
};

type ResetPasswordData = {
  email: string;
};

type ChangePasswordData = {
  oldPassword: string;
  newPassword: string;
};

// API function to create a new user
export const userCreateApi = async (userData: registerUserData) => {
  const response = await instance.post<ApiResponse<AutenticatedUser>>("/api/auth/register", userData, {
    withCredentials: true,
  });
  if (response.data.feedback) {
    return response.data;
  } else {
    throw new Error("Problem in user create API");
  }
};

// API function to login a user
export const userLoginApi = async (loginInfo: LoginInfoProps) => {
  const response = await instance.post<ApiResponse<AutenticatedUser>>(
    "/api/auth/login",
    JSON.stringify(loginInfo),
    { headers: { "content-type": "application/json" } }
  );
  if (response.data.feedback) {
    return response.data;
  } else {
    throw new Error("Problem in user login API");
  }
};

// API function to check user login status
export const userLoginCheckApi = async () => {
  const response = await instance.get<ApiResponse<AutenticatedUser>>("/api/auth/check", {
    withCredentials: true,
  });
  if (response.data.feedback) {
    return response.data;
  } else {
    throw new Error("Problems in auth check API");
  }
};

// API function to sign out a user
export const userSignOutApi = async () => {
  const response = await instance.get<ApiResponse<AutenticatedUser>>("/api/auth/logout", {
    withCredentials: true,
  });
  if (response.data.feedback) {
    return response.data;
  } else {
    throw new Error("Problems in user sign out API");
  }
};

// API function to request a password reset
export const passwordResetRequestApi = async (data: ResetPasswordData) => {
  const response = await instance.post<ApiResponse<AutenticatedUser>>(
    "/api/auth/password_reset_request",
    JSON.stringify(data),
    { headers: { "content-type": "application/json" } }
  );
  if (response.data.feedback) {
    return response.data;
  } else {
    throw new Error("Probles in password reset request API");
  }
};

// API function to reset the password using a token
export const passwordResetApi = async (data:{ token: string; newPassword: string }) => {
  const response = await instance.patch<ApiResponse<AutenticatedUser>>(
    "/api/auth/password_reset",
    JSON.stringify(data),
    { headers: { "content-type": "application/json" } }
  );
  if (response.data.feedback.success) {
    return response.data;
  } else {
    throw new Error(response.data.feedback.message);
  }
};

// API function to change the current password
export const passwordChangeRequestApi = async (data: ChangePasswordData) => {
  const response = await instance.patch<ApiResponse<AutenticatedUser>>(
    "/auth/password-change-request",
    JSON.stringify(data),
    { headers: { "content-type": "application/json" }, withCredentials: true }
  );
  if (response.data.feedback.success) {
    return response.data;
  } else {
    throw new Error(response.data.feedback.message);
  }
};
