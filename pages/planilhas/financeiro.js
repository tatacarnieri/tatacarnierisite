import styles from '../../styles/Planilhaz.module.css'
import Image from 'next/image'
import picFin from '../../Assets/planilhaFin.png'
import Head from 'next/head'

 const title = 'Financeiro'

const Financeiro = () => {
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
        <div className={styles.picCompras}>
          <Image 
            src={picFin}
            alt="Planilha financeiro" 
            width={400} 
            height={300} /> 
          </div>
        <div className={styles.texto}>
            <h1>Financeiro para microempreendedores</h1>
                <p>Nem tudo que se vende obtém lucro, certo? Então por meio dessas planilhas você será capaz de saber sobre:</p>
         </div>           
             <div className={styles.listagem}> 
                    <ol>
                        <li>Fluxo de caixa operacional e de investimento</li>
                        <li>Demonstração de resultado do exercício</li>
                        <li>Gestão de contas</li>
                        <li>Gestão de tributos</li>
                        <li>Planejamento financeiro</li>
                    </ol>
            </div>
            <h4>Bora pro sucesso!!!</h4>
        </div>
        </>

     );
}
 
export default Financeiro;