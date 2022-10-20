import styles from './ProjectCard.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'


function ProjectCard({id,name,budget,category,handleRemove}){
    const remove= (e)=>{
        e.preventDefault()
        handleRemove(id)
    }

    return(
       <div className={styles.project_card}>
        <h4>{name}</h4>
        <p>
            <span>Orçamento:</span> R${budget}
        </p>
        <p className={styles.category_text}><span className={`${styles[category]}`}></span>{category}
        
        </p>
        <div className={styles.project_card_actions}>
            <Link to={`/ProjetoEdicao/${id}`} className={styles.project_card_action_link} >
                <BsPencil className={styles.icon} /> Editar
            </Link>
            <button onClick={remove} className={styles.project_card_action_button}>
                <BsFillTrashFill className={styles.icon}></BsFillTrashFill>Remover
            </button>
        </div>
       </div>
    )
}

export default ProjectCard