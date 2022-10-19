import '../styles/globals.css'
import 'animate.css';
import App from 'next/app';
import {SessionProvider} from "next-auth/react"
function MyApp({
  Component,
  pageProps: {session,user,...pageProps },
}) {
  return <SessionProvider session={session}><Component {...pageProps} /></SessionProvider>
  
}
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };


export default MyApp
