import Message from '../layout/Message'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'

import styles from './Project.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../Project/ProjectCard'
import Loading from '../layout/Loading'

function Project() {
    const [projects,setProjects]= useState([])
    const [removeLoading, setRemoveLoading]= useState(false)
    const [projectMessage,setProjectMessage]=useState('')




    const location=useLocation()
    let message=''
    if(location.state){
        message=location.state.message
    }

    useEffect(()=>{
        setTimeout(()=>{
        fetch('http://localhost:5000/projects',{
            method:'GET',
            headers:{
                'Content-Type':'aplication/json',
            },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setProjects(data)
            console.log(data)
            setRemoveLoading(true)
        })
        .catch((err)=> console.log(err))
    },700)
    },[])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`,{
        method: 'DELETE',
        Headers: {
            'content-type': 'aplication/json'
        },
    
    }).then(resp=>resp.json())
    .then(data=>{
        setProjects(projects.filter((project)=>project.id !==id))
        setProjectMessage('projeto removido com sucesso!')

    })
    .catch(err=>console.log(err))
    }
    return(
        
        
        <div className={styles.project_container}>
           <div className={styles.title_container}>
            <h1>Meus projetos</h1>
            <LinkButton to="/NewProject" text="criar projeto"/>
           </div>


           {message&& <Message type="sucess" msg={message}/>}
           {projectMessage&& <Message type="sucess" msg={projectMessage}/>}
           <Container customClass="start">
           {projects.length>0 &&
                projects.map((project)=>(
                <ProjectCard 
                name={project.name}
                id={project.id}
                budget={project.budget}
                category={project?.category?.name}
                key={project.id}
                handleRemove={removeProject}
                />
                
                ))}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length ===0 &&(
                    <p>Não há projetos a serem exibidos!</p>
                )}
            </Container>
         </div> 
         
         
        
    )
    }


export default Project