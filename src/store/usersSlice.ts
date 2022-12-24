import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BACKEND_API_URL } from '../constants/global';
import { UserProps } from '../types/types';

export const usersSlice = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://retoolapi.dev/UKLcoE' }),

  tagTypes: ['Users'],
  endpoints: (builder) => ({
    fetchAllUsers: builder.query<any, any>({
      query: () => ({
        url: '/users',
        // params: {
        //   _page: page,
        //   _limit: 10,
        // },
      }),
      // transformResponse: (apiResponse, meta: any) => {
      //   return {
      //     apiResponse,
      //     totalCount: Number(meta.response.headers.get('X-Total-Count')),
      //   };
      // },
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
