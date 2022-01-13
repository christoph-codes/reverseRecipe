import { AppProvider } from '../graphql/serverApp';
import { ServerProvider } from '../graphql/serverProvider';
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  return (
      <AppProvider appID={"reverserecipeapplication-aogyb"}>
          <ServerProvider>
            <Component {...pageProps} />
          </ServerProvider>
      </AppProvider>
  );
}

export default MyApp
