import {parse,v4 as uuidv4} from 'uuid'

import styles from './ProjetoEdicao.module.css'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../Project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

import {json, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import SubmitButton from '../form/SubmitButton'
import ButtonAddService from '../service/ButtonAddService'

function ProjetoEdicao(){
    const{id}= useParams()
    const [project, setProject]=useState([])
    const [services, setServices]=useState([])
    const [showProjectForm, setshowProjectForm]=useState(false)
    const [showServiceForm, setShowServiceForm]=useState(false)
    const[message,setMessage]=useState()
    const[type,setType]=useState()

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`,{
        method:'GET',
        headers: {
            'Content-Type':'aplication/json',
        },

        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setProject(data)
            setServices(data.services)
        })
        .catch((err)=>console.log)

        },700)
        
    },[id])

    

   
    function editPost(project){
       setMessage('')
       
        if(project.budget < project.cost){
            setMessage('O orçamento do projeto não pode ser menor que o custo do projeto!')
            setType('error')
            return false
            
        }

        fetch(`http://localhost:5000/projects/${project.id}`,{
        method:'PATCH',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(project),

        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setProject(data)
            setshowProjectForm(false)
            setMessage('projeto atualizado!')
            setType('sucess')
            
        })
        .catch((err)=>console.log(err))
    }

    function createService(project){
        const lastService=project.services[project.services.length -1]

        lastService.id=uuidv4()

        const lastServiceCost=lastService.Cost
        const newCost=parseFloat(project.Cost) + parseFloat(lastServiceCost)

        if (newCost>parseFloat(project.budget)){
            setMessage('orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
        }
        project.cost=newCost


        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)

        })
        .catch((err)=>console.log(err))
    }

    function removeService(id){
        const serviceUpdated=project.services.filter(
            (service)=>service.id!==id
        )

        const projectUpdated= project
        projectUpdated.services=serviceUpdated


        fetch(`http://localhost:5000/projects/${projectUpdated.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdated),
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setProject(projectUpdated)
            setServices(serviceUpdated)
            setMessage('serviço removido com sucesso')

        })
        .catch((err)=>console.log(err))

    }

    function toggleProjectForm(){
        setshowProjectForm(!showProjectForm)
    }
    
    

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }
    return(<>
        {project.name?
        (<div className={styles.project_details}>
            <Container customClass="column">
                {message &&<Message type={type} msg={message}/> }
             <div className={styles.details_container} >
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm?'Editar projeto': 'Fechar'}</button>
              {!showProjectForm?(
                <div className={styles.project_info}>
                    <p>
                        <span>Categoria:</span> {project.category.name}
                    </p>
                    <p>
                        <span>Total Orçamento:</span> {project.budget}
                    </p>
                    
                </div>

              ):(
                <div className={styles.project_info}>
                 <ProjectForm 
                 handleSubmit={editPost} 
                 btnText="concluir edição"
                 projectData={project}
                 />
                </div>
              )}
              
              
             </div>

             

             <div className={styles.service_form_container}>
                <h2>adicione um serviço</h2>
                <button  className={styles.btn} onClick={toggleServiceForm}>{!showServiceForm?'Adicionar serviço': 'Fechar'}</button>
                <div  className={styles.project_info}>
                    {showServiceForm&&(
                    
                    
                        
                    <ServiceForm
                    
                    handleSubmit={createService}
                    btnText="Adicionar serviço" 
                    projectData={project}
                    
                    >
                    
                    
                        </ServiceForm>
                  
                 
                        
                 )}
                </div>
                
             </div>
             <h2>Serviços</h2>
             <Container customClass="start">
               {
                services.length>0&&
                services.map((service)=>(
                    <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}

                    />
                ))
               
               }
               {services.length===0 && <p>não há serviços cadastrados</p>}
             </Container>
            </Container>
        </div>
        )
        
        :(<Loading/>) 
        
    }

        </>)
       
}


export default ProjetoEdicao