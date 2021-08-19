// // pages/_app.tsx
// /* eslint-disable react/jsx-props-no-spreading */
// import React, { FC } from 'react';

// import CssBaseline from '@material-ui/core/CssBaseline';
// import { AppProps } from 'next/app';
// import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
// import { wrapper } from '../Components/store/reducers/rootReducer';

// const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
//   React.useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles?.parentElement?.removeChild(jssStyles);
//     }
//   }, []);
//   return (
//     <SnackbarProvider maxSnack={3}>
//       <Head>
//         <title>TT.ru</title>
//         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
//         />
//       </Head>

//       {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//       <CssBaseline />
//       <Component {...pageProps} />
//     </SnackbarProvider>
//   );
// };
// export default wrapper.withRedux(MyApp);

// pages/_app.tsx
/* eslint-disable react/jsx-props-no-spreading */
import { FC, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from '../Components/store/reducers/rootReducer';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Head>
          <title>My App</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
