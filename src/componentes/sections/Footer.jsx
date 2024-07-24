import Styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className={Styles.Footer}>

                <h6>   
                    Meu contato: <br />
                    (62) 9 9990-2559
                
                </h6>
                <h6>
                    Email: <br />
                    costasilvasalesadriano@gmail.com
                </h6>
                <ul>
                    <li><a href='https://github.com/Sales2706'><FaGithub size={45}/></a></li>
                    <li><a href='https://www.linkedin.com/in/sales-adriano-costa-silva-05346729b/'><FaLinkedin size={45}/></a></li>
                </ul>
            
        </div>
    )
}

export default Footer
