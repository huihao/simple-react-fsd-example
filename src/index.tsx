import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { configureAppStore } from '@shared/store/configureStore';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import App from './app/App';
import { startApiMockWorker } from '@/shared/mocks/browser';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  return startApiMockWorker();
}

function init() {
  const appContainer = document.querySelector('#root');
  if (!appContainer) {
    throw new Error('Can not find #root');
  }

  const root = createRoot(appContainer);
  const store = configureAppStore();
  root.render(
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  );
}

enableMocking().then(() => {
  init();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
