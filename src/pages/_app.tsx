
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from 'react-query';
import { RegisterProvider } from '@/hooks/RegisterContext';


export default function App({ Component, pageProps }: AppProps) {

  const client = new QueryClient();

  return (
    <RegisterProvider>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </RegisterProvider>
  );
}
