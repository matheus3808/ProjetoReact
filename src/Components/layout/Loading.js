import eclipse from '../../img/Eclipse-1s-200px.svg'

import styles from './Loading.module.css'

function Loading (){
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={eclipse} alt="Loading"/>
        </div>
    )
}

export default Loading