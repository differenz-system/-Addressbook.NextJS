// third party packages
import React from 'react';
import NextNProgress from "nextjs-progressbar";
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";

// store|enum
import store from '../redux/store';

// css|styled components
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      {
        getLayout(
          <>
            <NextNProgress
              color="#17619C"
              startPosition={0.3}
              stopDelayMs={10}
              height={2}
              showOnShallow={false}
              options={{ showSpinner: false, speed: 500 }}
            />
            <Component {...pageProps} />
          </>)
      }
    </Provider>
  );
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);


