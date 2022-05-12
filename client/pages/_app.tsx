import React from 'react';
import '../styles/globals.scss';

// TODO: IDK what this is about...
interface IAppProps {
  Component: any;
  pageProps: any;
}

// TODO: wtf is this supposed to do?
export default function MyApp({ 
    Component,
    pageProps
}: IAppProps): JSX.Element {
    return <Component {...pageProps} />
}