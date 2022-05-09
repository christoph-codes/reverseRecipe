import React from 'react';
import '../styles/globals.scss';

interface IAppProps {
  Component: any;
  pageProps: any;
}

// TODO: wtf is this supposed to do?
export default function MyApp({ 
    Component,
    pageProps
}: IAppProps): React.ReactNode {
    return <Component {...pageProps} />
}