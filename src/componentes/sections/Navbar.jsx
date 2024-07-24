import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.Navbar}>  
            <ul>
                <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#tech'>Tecnologias</Nav.Link></li>
                <li><Nav.Link href='#about'>Sobre mim</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://github.com/Sales2706'><FaGithub size={25}/></a></li>
                <li><a href='https://www.linkedin.com/in/sales-adriano-costa-silva-05346729b/'><FaLinkedin size={25}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar