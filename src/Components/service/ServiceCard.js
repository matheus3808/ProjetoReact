import styles from '../Project/ProjectCard.module.css'
import {BsFillTrashFill} from 'react-icons/bs'


function ServiceCard({id,name,cost,description,handleRemove}){

const remove=(e)=>{
e.preventDefault()
handleRemove(id)
}

return(
    <div className={styles.project_card}>
        <h4>{name}</h4>
        <p>
            <span>Custo total:</span> R${cost}
        </p>
        <p><span>Tipo de serviço: </span>{description}</p>
        <button onClick={remove} className={styles.project_card_action_button}><BsFillTrashFill/>Remover </button>
    </div>
)
}

export default ServiceCard

