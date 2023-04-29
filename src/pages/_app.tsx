import type { AppProps } from 'next/app'
import 'reset-css';
import { AuthProvider } from '@/contexts/AuthContext';
import { SidebarProvider } from '@/contexts/SidebarContext';
import GlobalStyle from '@/@types/global';
import { ThemeProvider } from 'styled-components';
import theme from '@/@types/theme';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <SidebarProvider>
          <Component {...pageProps} />
        </SidebarProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
