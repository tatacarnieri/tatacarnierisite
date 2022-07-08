import Head from 'next/head'
import Image from 'next/image'
import picFilo  from '../Assets/filo.png'
import styles from '../styles/Filonews.module.css'


 const title = 'Filosofia'

const Filosofia = () => {
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
        <div className={styles.filonews}>
            <div className={styles.picfilo}>
                <Image 
                src={picFilo}
                alt="Aplicativos Tata Carnieri" 
                width={300} 
                height={300} />  
            </div>
                
            <div className={styles.filoExpl}>
                <h1>Filonews</h1>
                <p>Nem sempre aquela dúvida é encontrada simplesmente num noticiario comum. Bem até chega, mas depois de muito tempo...
                    E no inicio é comum ficar perdido, quer por excesso de informação ou pela falta dela. 
                    Até conseguir <strong>se gerenciar</strong>, para de fato aplicar o gerenciamento no seu negócio. Demora um pouco.
                    E é exatamente aqui que procuro descrever certas ações que geram determinadas consequência.
                </p>
                    <p>Vale ressaltar que não há intuito algum em desmerecer qualquer notícia, jornalista, politica, economia....</p>
                    <h3>E sim simplesmente em comentar determinada consequência. Eu comento e <strong>você decide!</strong></h3>
            </div>

            <div className={styles.idFilo}> Aqui as news.</div>
        </div>
        </>
     );
}
 
export default Filosofia;