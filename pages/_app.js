import '../styles/globals.css'
import Layout from '../Components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
<Head>
 <meta charSet='utf-8' />
 <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
 <meta name='author' content= 'Tata Carnieri' />
 <meta property='og:site_name' content='Tata Carnieri' />
 <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
 <meta name='description' content='Planilhas para microempreendedores: area de compras, estoque e financeiro. Aplicativos de caixa e fidelidade. Aqui tem excel' />
 <meta name='robots' content='index, follow' />
 <meta httpEquiv='content-language' content='pt-br' />
 <meta property='og:type' content='website' />



<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
<meta name="msapplication-TileColor" content="#da532c" />
<meta name="theme-color" content="#ffffff" />


 <link rel="icon" href="/favicon.ico" />
</Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp;
