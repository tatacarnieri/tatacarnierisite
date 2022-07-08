import Head from 'next/head'
import styles from '../styles/Contato.module.css'
import Image from 'next/image'
import picContato from '../Assets/contato.png'

const title = 'Contato'

const PageWithoutJSbasedForm = () => {
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

                <form action="https://formsubmit.co/5335c178157a85754a0c29f6a32d8ed1" method="post">
                <input type="hidden" name="_autoresponse" value="Recebemos a sua mensagem, obrigado pelo contatoo e logo responderemos" />

                    <div className={styles.allCont}>
                <div className={styles.picContato}>
                  <Image 
                    src={picContato}
                    alt="Contato com Tata Carnieri" 
                    width={400} 
                    height={300} /> 
                  </div>
                    <div className={styles.allform}>
                <div className={styles.formz}>
                    <h1>Formulário de contato</h1>
                    <p>Surgiu alguma dúvida? Alguma sugestão? E crítica?? Preencha abaixo que responderemos <strong>dentro</strong> de 24h.</p>
                </div>    
                <div>
                    <input type="text" 
                    name="name"
                    id={styles.nome} 
                    placeholder="Digite seu nome aqui" 
                    maxLength={10} 
                    required />
                </div>
                <div>
                    <input type="email" 
                    id={styles.email} 
                    name="email"
                    placeholder="Digite um email válido" 
                    autoCapitalize="none"
                    pattern= "^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                    required />
                </div>
                <div>
                    <input type="text" 
                    id={styles.fone} 
                    name="subject"
                    placeholder="Qual o assunto??" 
                    maxLength={30} 
                    minLength={3} 
                    required />
                </div>
                <div>
                    <label id="msg">Mensagem:</label>
                    <textarea id={styles.msg}
                    name="msg" 
                    placeholder="Escreva aqui sua mensagem :)" 
                    maxLength={150} 
                    minLength={10} 
                    required></textarea>
                </div>
                    <div className={styles.btnAction}>
                        <button className={styles.btnSubmit}
                        type="submit" 
                        value="Enviar"> ENVIAR </button>
        
                        <button className={styles.btnSubmit}
                        type="reset" 
                        value="Limpar"> LIMPAR </button>
                    </div>
        </div>
                </div>
            </form>
        </>

     );
}
 
export default PageWithoutJSbasedForm;