import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://dummyjson.com";

export  const CommonDataQuery = createApi({
  reducerPath: "PublicData",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL || url }),
  tagTypes: ["User", "Products", "Posts"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id: string) => `general/user/${id}`,

    }),
    getProducts: build.query({
      query: () => "products",
      providesTags: ["Products"],
    }),
    getPosts: build.query({
      query: ({postId}) =>({
        url:`posts/${postId}`,
        method:"GET",
      }),
      providesTags: ["Posts"]
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetPostsQuery,
} = CommonDataQuery;
