import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Planilhaz.module.css'
import nofound from '../Assets/404pic.png'

const NotFound = () => {
  return ( 
    <div className={styles.planz}>
      <h1>Sinto Muito! Página não encontrada.</h1>
        <div>
        <Image 
         src={nofound}
         alt="Not Found by Tata Carnieri" 
         width={400} 
         height={400} />  
         </div>
          <div className={styles.btn}>
            <Link href="/">VoLTar PagiNA InIcIaL</Link>
          </div>
    </div>        
    );
}
 
export default NotFound;