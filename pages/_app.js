import Layout from './layout';
import  '../styles/styles.css';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider, Text } from "@nextui-org/react"
import myTheme from '../styles/theme/mytheme.js';
import lightThemeTheme from '../styles/theme/lightTheme.js';
import lightTheme from '../styles/theme/lightTheme.js';


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider theme={lightTheme}>
      <NextUIProvider theme={myTheme}>
         <Component {...pageProps} />
         </NextUIProvider>
      </ThemeProvider>
    </Layout>
  )
}