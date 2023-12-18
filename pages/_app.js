import '../styles/globals.css'
import Header from '../components/header/header'
import { Connector,useMqttState,useSubscription } from 'mqtt-react-hooks';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return <>
    <Connector brokerUrl='wss://lmo-12:mindin4580@7cb0bb03390b413ca6ebc8bf5bf63014.s2.eu.hivemq.cloud:8884/mqtt'>
      <Provider store={store}>
         
          <Component {...pageProps} />
    </Provider>
  </Connector>
  </>
}

export default MyApp
