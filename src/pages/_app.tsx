import { AppProps } from 'next/app';
import siteMetadata from '@/data/siteMetadata';
import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
