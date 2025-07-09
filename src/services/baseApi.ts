import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a-4-library-server.vercel.app/api",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
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
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    borrowBook: builder.mutation({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    getBorrowBooks: builder.query({
      query: () => "/borrow",
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBooksMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowBooksQuery,
} = baseApi;
