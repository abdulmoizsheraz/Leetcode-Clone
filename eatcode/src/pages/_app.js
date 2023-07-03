import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {

  return <>
 <Head>
				<title>Eatcode</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.png' />
				<meta
					name='description'
					content='Web application that contains leetcode problems and video solutions'
				/>
			</Head>
			<Navbar/>
  <Component {...pageProps}/>
  <Footer/>

  </>
  
   
}
