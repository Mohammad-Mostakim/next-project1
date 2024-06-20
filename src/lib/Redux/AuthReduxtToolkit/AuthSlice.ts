
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  AutenticatedUser,
  FeedBackProps,
  passwordChangeRequestApi,
  passwordResetApi,
  passwordResetRequestApi,
  userCreateApi,
  userLoginApi,
  userLoginCheckApi,
  userSignOutApi,
} from './AuthApi';

// Define the types for your state
interface AuthState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  user: AutenticatedUser | null;
  authModalName: string | null;
  feedback: FeedBackProps | null;
}

const initialState: AuthState = {
  status: 'idle',
  error: null,
  user: null,
  authModalName: null,
  feedback: null,
};

// Define payload types for your thunks if needed
interface UserPayload {
  username: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const userCreateAsync = createAsyncThunk(
  'auth/userCreate',
  async (userData: UserPayload, { rejectWithValue }) => {
    try {
      const data = await userCreateApi(userData);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occured in create user")
    }

  }
);

export const userLoginApiAsync = createAsyncThunk(
  'auth/userLoginApi',
  async (loginData: LoginPayload, { rejectWithValue }) => {

    try {
      const data = await userLoginApi(loginData);
      return data;

    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred in login authentication');
    }

  }
);

export const authenticationCheckAsync = createAsyncThunk('auth/userLoginCheckApi', async (_, { rejectWithValue }) => {
  try {
    const response = await userLoginCheckApi();
    return response;

  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unknown error occurred in check authenctication');
  }

});

export const userSignOutApiAsync = createAsyncThunk('auth/userSignOutApi', async (_, { rejectWithValue }) => {
  try {

    const response = await userSignOutApi();
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unknown error occurred in user singout');
  }

});

export const passwordResetRequestApiAsync = createAsyncThunk('auth/passwordResetRequestApi', async (data: { email: string }, { rejectWithValue }) => {

  try {
    const response = await passwordResetRequestApi(data);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unknown error occurred in password reset request');
  }

});

export const passwordResetApiAsync = createAsyncThunk('auth/passwordResetApi', async (data: { token: string; newPassword: string }, { rejectWithValue }) => {
  try {
    const response = await passwordResetApi(data);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unknown error occurred in password reset');
  }

});

export const passwordChangeRequestApiAsync = createAsyncThunk('auth/passwordChangeRequestApi', async (data: { oldPassword: string; newPassword: string }, { rejectWithValue }) => {
  try {
    const response = await passwordChangeRequestApi(data);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unknown error occurred in password changed request');
  }

});

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuthModalType(state, action: PayloadAction<{ authModalName: string | null }>) {
      state.authModalName = action.payload.authModalName;
      state.error = null;
      state.feedback = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // user create
      .addCase(userCreateAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userCreateAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.feedback = action.payload.feedback;
        state.user=action.payload.User || null;
        state.error = null;
      })
      .addCase(userCreateAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      })
      //  user login
      .addCase(userLoginApiAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userLoginApiAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user=action.payload.User || null;
        state.feedback = action.payload.feedback;

      })
      .addCase(userLoginApiAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      })
      //  user login check
      .addCase(authenticationCheckAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authenticationCheckAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.User || null;
        state.feedback = action.payload.feedback
      })
      .addCase(authenticationCheckAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      })
      //  user logout
      .addCase(userSignOutApiAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userSignOutApiAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = null;
        state.feedback = action.payload.feedback;
      })
      .addCase(userSignOutApiAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })
      // password reset request 
      .addCase(passwordResetRequestApiAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(passwordResetRequestApiAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.feedback = action.payload.feedback

      })
      .addCase(passwordResetRequestApiAsync.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.status = 'failed';
      })
      // reset password 
      .addCase(passwordResetApiAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(passwordResetApiAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.feedback = action.payload.feedback

      })
      .addCase(passwordResetApiAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      })
      // password change request 
      .addCase(passwordChangeRequestApiAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(passwordChangeRequestApiAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.feedback = action.payload.feedback

      })
      .addCase(passwordChangeRequestApiAsync.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.status = 'failed';
      })
  },
});

export const { setAuthModalType } = AuthSlice.actions;
export default AuthSlice;
