/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {UserProps, FeedBackProps, fetchUserInfoApi, updateUserInfoApi, uploadUserPhotoApi } from './UserDataApi'; // Adjust the import path as needed


interface UserState {
  userInfo: UserProps | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  feedback:FeedBackProps | any;
  error:any
}

const initialState: UserState = {
  userInfo: null,
  status: 'idle',
  feedback:null ,
  error:null
};

// Async thunk for fetching user data
export const UseGetUserInfo = createAsyncThunk(
  'user/fetchUserInfoApi',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUserInfoApi();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred in fetchUserData');
    }
  }
);

// Async thunk for updating user data
export const UseUpdateUserInfo = createAsyncThunk(
  'user/updateUserInfoApi',
  async (updateData: Partial<UserProps>, { rejectWithValue }) => {
    try {
      const response = await updateUserInfoApi(updateData);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred in update user Information');
    }
  }
);

// Async thunk for uploading a user photo
export const uploadUserPhotoAsync = createAsyncThunk(
  'user/uploadUserPhoto',
  async (photo: File, { rejectWithValue }) => {
    try {
      const response = await uploadUserPhotoApi(photo);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred in upload user photo');
    }
  }
);

const UserDataSlice = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
        resetUserData: () => {
           return initialState
        },
    
      },
  extraReducers: (builder) => {
    builder
      .addCase(UseGetUserInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(UseGetUserInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userInfo = action.payload.UserInfo;
        state.feedback=action.payload.feedback
      })
      .addCase(UseGetUserInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(UseUpdateUserInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(UseUpdateUserInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.feedback=action.payload.feedback;
        state.userInfo = { ...state.userInfo, ...action.payload.UserInfo } as UserProps;
      })
      .addCase(UseUpdateUserInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
      .addCase(uploadUserPhotoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(uploadUserPhotoAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userInfo = { ...state.userInfo, ...action.payload.UserInfo } as UserProps;
        state.feedback=action.payload.feedback;
      })
      .addCase(uploadUserPhotoAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const {resetUserData}=UserDataSlice.actions
export default UserDataSlice;
