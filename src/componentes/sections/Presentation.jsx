import styles from './Presentation.module.css'
import Button from '../elements/Button'
import { useEffect, useState } from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Sales Adriano', 'Desenvolvedor Full Stack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    }, [text])

    const toType = ()=>{
        let i = loop % toRotate.length;
        let fulltext = toRotate[i]
        let udateText = isDeleting ? fulltext.substring(0,text.length-1) : fulltext.substring(0,text.length+1)

        setText(udateText);

        if(!isDeleting && udateText === fulltext){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && udateText === ''){
            setDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div className={styles.Presentation}>
            <h1>Olá, sou {text} </h1>
            <p>
            Olá! Sou um estudante entusiasta e dedicado em desenvolvimento web full stack, apaixonado <br/>
            por desafios e pela busca incessante por soluções inovadoras. Ao longo da minha jornada, <br/>
            tenho adquirido habilidades abrangentes tanto no front-end quanto no back-end, utilizando <br/>
            diversas tecnologias e frameworks. Meu objetivo é criar experiências digitais impactantes e <br/>
            funcionais, sempre focado na qualidade e na usabilidade. Estou constantemente buscando <br/>
            aprender e me aprimorar, pronto para enfrentar novos projetos e contribuir de forma significativa <br/>
            para equipes de desenvolvimento.
            </p>
            
            <Button link='' text='Saber mais'/>
        </div>
    )
}

export default Presentation