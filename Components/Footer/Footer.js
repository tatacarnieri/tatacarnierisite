import Image from 'next/image'
import Link from 'next/link'

import me from '../../Assets/eu.png'

import styles from '../../styles/Footerz.module.css'

const Footerz=() => {
    return ( 
    <div className={styles.rodape}>
            <div className={styles.picme}>
            <Image 
            src={ me } 
            alt="logo"
            width="150"
            height="120" />
            </div>
         <div className={styles.descritivo}>
              <h2>Tata Carnieri</h2>
              <p> <a href="mailto:admin@tatacarnieri.tk">CEO em TataCarnieri </a>
                + Programadora + Consultoria + 
                  Entusiasta em Filosofia + Headbanger \m/ </p>
               <p>Copyright &copy; 2022 <Link href="/">TataCarnieri</Link></p>
          </div>
    </div>
    
    );
}
 
export default Footerz;