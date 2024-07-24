import Style from './Projects.module.css';
import Cards from '../elements/Cards.jsx'
import Projeto from '../images/projeto.svg'

function Projects(){
    return(
        <div className={Style.Projects} id='projects'>
            <h1>Projetos</h1>
            <section>
                <Cards
                    img={Projeto}
                    title='Projeto 1'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    repo=''
                    site=''
                />
                <Cards
                    img={Projeto}
                    title='Projeto 2'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    repo=''
                    site=''
                    
                />
            </section>
        </div>
    )
}

export default Projects