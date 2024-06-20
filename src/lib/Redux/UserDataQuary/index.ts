import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl: string | undefined = process.env.BACKEND_BASE_URL;


export  const UserDataQuery = createApi({
    reducerPath: "UserData",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["UserInfo"],
    endpoints: (build) => ({
      getUserInfo: build.query({
        query: (id: string) =>({
            url: `api/user/${id}`,
            method:'GET'
        }),
        providesTags: ["UserInfo"]
  
      }),
    }),
  });
  
  export const {
    useGetUserInfoQuery,
  } = UserDataQuery;
  