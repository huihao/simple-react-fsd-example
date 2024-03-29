import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/shared/types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.user || initialState;

export const selectUser = createSelector([selectSlice], (state) => state);
