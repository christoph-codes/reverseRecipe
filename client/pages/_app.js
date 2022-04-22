import { useState, useEffect } from 'react';
import { AppProvider } from '../graphql/serverApp';
import ServerProvider from '../graphql/serverProvider';
import { RecipeProvider } from '../providers/recipes';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<AppProvider appID={'reverserecipeapplication-aogyb'}>
			<ServerProvider>
				<RecipeProvider>
					<Component {...pageProps} />
				</RecipeProvider>
			</ServerProvider>
		</AppProvider>
	);
}

export default MyApp;
