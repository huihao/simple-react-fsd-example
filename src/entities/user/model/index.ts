import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@/shared/lib/@reduxjs/toolkit';
import { useInjectReducer } from '@/shared/lib/redux-injectors';
import { UserState } from './types';
import { userApi } from '../api/userApi';

export const initialState: UserState = {
  users: [],
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.users.matchFulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { actions: userActions } = slice;

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useUserSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
