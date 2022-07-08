import Head from 'next/head'
import Image from 'next/image'
import picApp from '../Assets/coding.png'
import styles from '../styles/Aplicativo.module.css'

const title = 'Aplicativos'

const Aplicativos = () => {
    return (
        <>
        <Head>
        <title>{title}</title>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='author' content= 'Tata Carnieri' />
            <meta property='og:site_name' content='Tata Carnieri' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
            <meta name='description' content='Planilhas para microempreendedores: area de compras, estoque e financeiro. Aplicativos de caixa e fidelidade. Aqui tem excel' />
            <meta name='robots' content='index, follow' />
            <meta httpEquiv='content-language' content='pt-br' />
            <meta property='og:type' content='website' />
        </Head>
        <div className={styles.Myapp}>
            <div className='pic'>
                <Image 
                src={picApp}
                alt="Aplicativos Tata Carnieri" 
                width={400} 
                height={300} />  
            </div>
            <div className={styles.appDescr}>
        <h1>Aplicativos</h1>
            <p>Aqui há em cada <strong>card</strong> um video para 
                mostrar qual a função de cada aplicativo assim com 
                quais os tipo de funções estão disponíveis. </p>
            <p>&#62;&#62; Está em desenvolvimento ainda,
                mas clica no link abaixo para entrar para a lista de interesse. 
                Que logo logo poderá baixa-lo, TOTALMENTE GRATUITO.</p>
            <p> GARANTA A SUA VAGA AGORA! <strong>NÃO FIQUE DE FORA DESSA GRANDE OPORTUNIDADE</strong></p>
            <h3> E bora pro sucesso!!</h3>
            </div>
        <div className='vidApp'>
            Aqui tem video
        </div>
        <button className={styles.btnApp}>Eu quero</button>
        </div>
        </>
     );
}
 
export default Aplicativos;