import { BaseDto, baseApi } from '@/shared/api';
import { User } from '../model/types';
import { mapUser } from '../lib/mapUser';
import { mapUserDetails } from '../lib/mapUserDetails';

export type UserDto = BaseDto<User[]>;
export type UserDetailsDto = BaseDto<User>;

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    users: build.query<User[], void>({
      query: () => ({
        url: `/user/list`,
      }),
      transformResponse: (response: UserDto) => response.data.map(mapUser),
      providesTags: ['User'],
    }),
    userDetails: build.query<User, number>({
      query: (userId) => ({
        url: `/user/${userId}`,
      }),
      transformResponse: (response: UserDetailsDto) => mapUserDetails(response.data),
    }),
    addUser: build.mutation<{}, { user: User }>({
      query: ({ user }) => ({
        url: `/user/add`,
        method: 'post',
        body: { ...user },
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: build.mutation<{}, { userId: number }>({
      query: ({ userId }) => ({
        url: `/user/delete`,
        method: 'post',
        body: {
          userId,
        },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useUsersQuery, useAddUserMutation, useDeleteUserMutation } = userApi;
