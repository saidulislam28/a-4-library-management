import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-api-lilac.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    createBooks: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBooksMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
} = baseApi;
