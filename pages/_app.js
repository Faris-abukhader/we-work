import '../styles/globals.css'
import 'animate.css';
import App from 'next/app';
import {SessionProvider} from "next-auth/react"
import { wrapper } from '../store/store'
function MyApp({
  Component,
  pageProps: {session,user,...pageProps },
}) {
  return <SessionProvider session={session}><Component {...pageProps} /></SessionProvider>
  
}
export default wrapper.withRedux(MyApp)  
