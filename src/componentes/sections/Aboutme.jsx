import styles from './Aboutme.module.css'

function Aboutme(){
    return(
        <div className={styles.Aboutme} id='about'>
            <h1>Sobre mim</h1>

            <ol>
                <li>
                    <p>
                        Lorem ipsum dolor sit <br />
                        amet, consectetur <br />
                        adipiscing elit, sed do <br />
                        eiusmod tempor <br />
                        incididunt ut labore et <br />
                        dolore magna aliqua.
                    </p>
                </li>
                <li>
                    <p>
                        Lorem ipsum dolor sit <br />
                        amet, consectetur <br />
                        adipiscing elit, sed do <br />
                        eiusmod tempor <br />
                        incididunt ut labore et <br />
                        dolore magna aliqua.
                    </p>
                </li>
                <li>
                    <p>
                        Lorem ipsum dolor sit <br />
                        amet, consectetur <br />
                        adipiscing elit, sed do <br />
                        eiusmod tempor <br />
                        incididunt ut labore et <br />
                        dolore magna aliqua.
                    </p>
                </li>
            </ol>
           

        </div>
    )
}

export default Aboutme