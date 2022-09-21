import type { AppProps } from 'next/app';
import React from 'react';
import AuthProvider from '../providers/AuthProvider';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
