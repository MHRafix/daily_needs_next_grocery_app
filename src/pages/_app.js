import { wrapper } from "../redux/store";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
