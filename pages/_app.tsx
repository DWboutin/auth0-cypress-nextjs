import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider loginUrl="/api/auth/login" profileUrl="/api/auth/me">
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App;
