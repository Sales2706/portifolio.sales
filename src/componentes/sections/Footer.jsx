import Styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className={Styles.Footer}>

                <p>
                    costasilvasalesadriano@gmail.com
                </p>
                <p>
                    Sales Adriano © 2024
                </p>
            
        </div>
    )
}

export default Footer
