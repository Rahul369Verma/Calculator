import "../styles/globals.css";
import "../styles/style.css";
import "../styles/history.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
