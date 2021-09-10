import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "../contexts";
import { useSession } from "next-auth/client";

import { theme } from "../styles/theme";

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
      <ToastContainer />
    </ChakraProvider>
  );
}

export default MyApp;
