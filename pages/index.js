import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import picIntro from '../Assets/microempreendedor.png'

const title = 'Home'

export default function Home() {
  return (
<>
 <Head>
 <title>{title}</title>
    <meta charSet='utf-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='author' content= 'Tata Carnieri' />
    <meta property='og:site_name' content='Tata Carnieri' />
    <meta name='viewport' content='width=device-width,initial-scale=1, minimum-scale=1,maximum-scale=1,user-scalable=no' />
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
    <div className={styles.intro}>
          <div className={styles.picIntro}>
          <Image 
            src={picIntro}
            alt="Microempreendedor" 
            width={300} 
            height={300} /> 
          </div>
          <div className={styles.allheadz}>
      <div className={styles.headz}>
          <h1> Parou aqui? Então procura algo diferente do que os <strong>buscadores</strong> te indicam!!! </h1>
            <div className={styles.topico}> 
            <h2>Com certeza está passando por isso aqui, né?</h2>
            <ul>
              <li>Cansado(a) de baixar planilhas que não te satisfaz??</li> 
              <li>Irritado(a) em montar uma planilha e no final não produziu <strong>o resultado esperado?</strong> </li>
              <li>Já baixou aplicativo, em que a principal ferramenta não está disponível, pois já expirou a versão trial??</li>
            </ul>
            </div>      
      </div>
          </div>
        <div className={styles.caseSucesso}>
          <p>Baseado nas dificuldades que passei ao planilhar para ter 
            uma <strong>Ferramenta hábil para resolver problemas, construir metas e afins</strong></p>
            <h3>Espero ser a pessoa certa a te ajudar :)</h3>
          <h2>Então, clique aqui e <strong>Bora pro sucesso!!</strong></h2>
        </div>
            <div className={styles.btnAll}>
              <Link href="/planilhas"><a className={styles.btn}>IR PARA PLANILHAS</a></Link>
            </div>  
    </div>      
   </>
  );
}
