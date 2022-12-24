import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserProps } from '../types/types';
import { BACKEND_API_URL } from '../constants/global';

export const usersSlice = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_API_URL }),

  tagTypes: ['Users'],
  endpoints: (builder) => ({
    fetchAllUsers: builder.query<UserProps[], string>({
      query: () => ({
        url: '/users',
      }),
      providesTags: () => ['Users'],
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: `/users`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
      query: (id: number = 0) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useFetchAllUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersSlice;
