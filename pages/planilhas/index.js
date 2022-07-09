import Link from 'next/link'
import styles from '../../styles/Planilhaz.module.css'
import Image from 'next/image'
import picPlan from '../../Assets/plan.png'

import Head from 'next/head';

 const title = 'Planilhas'

const Planilhas = () => {
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

        <div className={styles.planz}>
        <Image 
         src={picPlan}
         alt="Planilhas para microempreendedores" 
         width={300} 
         height={300} />  

            <div className={styles.texto}>
                <h1>Mas pra quê tudo isso??</h1>
                <p>A intenção dessa planilha é entregar recursos ao microempreendedor em especial da área de restaurante, 
                    de modo que seu primeiro passo seja tão firme quanto a sua meta para o sucesso. Está bem didático, 
                    mas havendo qualquer dúvidas, sugestões não hesite em me contactar. Já estive por muito tempo na 
                    situação semelhante, ou seja, em busca da planilha perfeita, há aplicativos sim para isso, 
                    porém penso que sabendo planilhar primeiro, a escolha de um software que atenda aos seus 
                    requisitos será mais certeiro do que ficar testando, testando e as vezes o que se busca 
                    não consta no aplicativo por hora escolhido.</p>   
            </div> 
            <div className={styles.btnAll}>
                    <Link href="/planilhas/compras"><a className={styles.btn}>Compras</a></Link>
                    <Link href="/planilhas/financeiro"><a className={styles.btn}>Financeiro</a></Link>
            </div>    
        </div>  
        </>      
     );
}
 
export default Planilhas;