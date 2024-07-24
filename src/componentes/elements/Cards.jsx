import Style from './Card.module.css';
import Button from './Button.jsx'

function Card({img, title, description, repo, site}){
    return(
        <div className={Style.Card}>
            <section>
                <a href={site}>
                    <img src={img} alt="ERROR" />
                </a>

                <h3>{title}</h3>

                <p>{description}</p> 
                <Button link={repo} text='Clique aqui'/>
            </section>
        </div>
    )
}

export default Card