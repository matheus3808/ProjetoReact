import {useNavigate} from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../Project/ProjectForm'

function NewProject (){
 const navigate=useNavigate()   
 
 function createPost(project){
    project.cost=0
    project.services=[]
    fetch('http://localhost:5000/projects',{
        method:'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(project),
    })
    .then((resp)=>resp.json())
    .then((data)=>{
        console.log(data)
        navigate('/project',{state:{message: 'projeto criado com sucesso'}})
    })
    .catch((err)=>console.log(err))
 }
    
    
    return(
        <div className={styles.newproject_container}>
        <h1 className={styles.newproject_container_h1}>Criar um projeto</h1>
        <p className={styles.newproject_container_p}>Crie o projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btnText="criar projeto"/>

        </div>
    )
}

export default NewProject