import Style from './Card.module.css';
import Button from './Button.jsx'
import { useState } from 'react';

function Card({img, title, description, repo, site}){

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOff} className={Style.Card}>
            
            <a onMouseEnter={InfoOn} href={site}>
                    <img src={img} alt="ERROR" />
            </a>
        
           {info === true &&(
             <section>
             <h3>{title}</h3>

             <p>{description}</p> 
             <Button link={repo} text='Clique aqui'/>
             </section>
           )}
        </div>
    )
}

export default Card