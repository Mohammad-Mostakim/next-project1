/** @format */

import axios from 'axios';

const baseUrl: string | undefined = process.env.BACKEND_BASE_URL;

export interface FeedBackProps{
  success?: boolean;
  message?: string;
}
export interface UserProps {
  id: string;
  name: string;
  email: string;
  photo:string;
  username:string;
  occupation:string;
  [key:string]:any;
}

// Generic interface for API responses
interface ApiResponse<T> {
  data: T;
  UserInfo:UserProps;
  feedback:FeedBackProps;
}

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

// Function to fetch user data
export const fetchUserInfoApi: () => Promise<ApiResponse<UserProps>> = async () => {
  const response = await instance.get<ApiResponse<UserProps>>('/api/user/info');
  if (response.data.feedback) {
    return response.data;
  } else {
    throw new Error("Problem in fetch user information API");
  }
};

// Function to update user data
export const updateUserInfoApi = async (updateData: Partial<UserProps>): Promise<ApiResponse<UserProps>> => {
  const response = await instance.post<ApiResponse<UserProps>>('/api/user/update-info', updateData);
  if (response.data.feedback) {
    return response.data;
  } else {
    throw new Error("Problem in Update user information API");
  }

};

// Function to upload a user photo
export const uploadUserPhotoApi = async (uploadPhoto: File): Promise<ApiResponse<UserProps>> => {
  const formData = new FormData();
  formData.append('photo', uploadPhoto);
  const response = await instance.patch<ApiResponse<UserProps>>('/user/upload-photo', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  if (response.data.feedback.success) {
    return response.data;
  } else {
    throw new Error(response.data.feedback.message);
  }
};
