import type { AppProps } from 'next/app'
import 'reset-css';
import { AuthProvider } from '@/contexts/AuthContext';
import { SidebarProvider } from '@/contexts/SidebarContext';
import GlobalStyle from 'src/components/Global/global';
import { ThemeProvider } from 'styled-components';
import theme from '@/components/Global/theme';
import {useEffect, useState} from 'react';



export default function App({ Component, pageProps }: AppProps) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  if (isServer) return null;

  return (
    <div suppressHydrationWarning>
      <AuthProvider>
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <SidebarProvider>
            {typeof window === 'undefined' ? null : <Component {...pageProps} />}
          </SidebarProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}
