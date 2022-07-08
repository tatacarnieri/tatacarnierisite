import Image from 'next/image'
import Link from 'next/link'
import logo from '../../Assets/logo.jpg'
import styles from '../../styles/Navbar.module.css'

const NavBar = () => {
    return ( 
        <div className={styles.navbarz}>
          <div className={styles.brandz}>
          <Link href="/">
            <Image
                src={logo}
                alt="Tata Carnieri"
                width={200}
                height={80}
                />
          </Link>
          </div>
    <nav className={styles.navitem}>
    <ul>
      <li>
       <Link href="/">
         <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/aplicativos">
          <a>Aplicativos</a>
        </Link>
      </li>
      <li>
        <Link href="/planilhas/">
          <a>Planilhas</a>
        </Link>
      </li>
        <li>
        <Link href="/filosofia">
          <a>Filosofia</a>
        </Link>
      </li>
      <li>
        <Link href="/contato">
          <a>Contato</a>
        </Link>
      </li>
    </ul>
    </nav>
        </div>
     );
}
 
export default NavBar;