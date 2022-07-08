import Link from 'next/link'
import styles from '../../styles/Planilhaz.module.css'
import Image from 'next/image'
import picCompras from '../../Assets/planilhaCompras.png'
import Head from 'next/head'
import data from '../../utils/data'
import analise from '../../public/analise.png'

 const title = 'Compras'

const Compras = () => {
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
            src={picCompras}
            alt="Planilha de compras" 
            width={300} 
            height={300} /> 
          </div>
            <div className={styles.texto}>
        <h1>Compras e estoques para microempreendedores</h1>
            <p>Numa empresa é importante ter em mãos uma gestão de compras bem clara e objetiva, é através dela que permitirá:</p>
            </div>
                <div className = {styles.listagem}>
                <ol>
                    <li>Ter o controle da demanda de suprimentos para a produção e distribuição para cada setor.</li>
                    <li>Controle de estoque, principalmente quando o nível de suprimentos está diretamente ligada ao consumo final.</li>
                    <li>Cotar e classificar os preços, as qualidades dos produtos, se há sazonalidade.</li>
                    <li>Equilibrar, analisar e identificar possíveis desperdício.</li>
                    <li>Desenvolvimento com fornecedores, ou seja, qual o tempo de resposta, redução de devolução, qualidade do produto.</li>
                </ol>
                </div>
            <h4>Bora pro sucesso!!!</h4>
        </div>
        <div >
          {data.compras.map(compra => (
                <div   className={styles.buyin} key={compra.id}>
                    <Image src={analise} width={600} height={350} alt="Modelo do excel analise de preço"/>
                    <h1> {compra.titulo} </h1>
                    <p> {compra.descrito} </p>
                    <Link href="https://hotmart.com/product/analise-de-preco"><a className={styles.btn}>COMPRAR AGORA {compra.url} </a></Link>
                </div>   
            ))}  
        </div>
    </>
     );
}
 
export default Compras;