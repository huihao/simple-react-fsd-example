/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  const { i18n } = useTranslation();
  return (
    <div>
      {' '}
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - 汇智"
          defaultTitle="汇智"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="快麦小智" />
        </Helmet>
        {children}
      </BrowserRouter>
    </div>
  );
}

export { AppProvider };
