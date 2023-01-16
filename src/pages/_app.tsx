
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from 'react-query';
import { RegisterProvider } from '@/hooks/RegisterContext';
// import { UserProvider } from '@/hooks/UserContext';


export default function App({ Component, pageProps }: AppProps) {

  const client = new QueryClient();

  return (
    <RegisterProvider>
      {/* <UserProvider> */}
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      {/* </UserProvider> */}
    </RegisterProvider>
  );
}
