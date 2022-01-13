import { AppProvider } from '../providers/AppProvider';
import ServerProvider from '../providers/ServerProvider';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<AppProvider>
			<ServerProvider>
				<Component {...pageProps} />
			</ServerProvider>
		</AppProvider>
	);
}

export default MyApp;
