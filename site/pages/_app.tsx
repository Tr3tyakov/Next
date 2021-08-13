// pages/_app.tsx
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { wrapper } from '../Components/store/reducers/rootReducer';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>TT.ru</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};
export default wrapper.withRedux(MyApp);
// import React, { FC } from 'react';
// import { AppProps } from 'next/app';
// import { wrapper } from '../Components/store/reducers/rootReducer';

// const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

// export default wrapper.withRedux(WrappedApp);
