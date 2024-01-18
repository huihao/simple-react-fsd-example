import React from 'react';
import { AppProvider } from '../src/app/providers/app';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <AppProvider>
      <Story />
    </AppProvider>
  ),
];
