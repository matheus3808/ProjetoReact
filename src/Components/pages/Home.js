import styles from './Home.module.css'
import wing from '../../img/wing.png'
import LinkButton from '../layout/LinkButton'

function Home (){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span className={styles.home_container_span}>Costs</span></h1>
            <p className={styles.home_container_p}> Comece a gerenciar o seus projetos agora mesmo!</p>
            <LinkButton to="/NewProject" text="criar projeto"/>
            <img className={styles.home_container_img} src={wing}></img>
        </section>
    )
}

export default Home