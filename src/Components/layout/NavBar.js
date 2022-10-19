import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'


function NavBar(){
    return(
        <nav className={styles.navbar} >
            <Container >
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/Project">Project</Link></li>
                <li className={styles.item}><Link to="/Company">Company</Link></li>
                <li className={styles.item}><Link to="/Contact">Contact</Link></li>
               
            </ul>
            </Container>
        </nav>
    )
}

export default NavBar

