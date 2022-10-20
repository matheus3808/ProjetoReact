import {useEffect, useState} from 'react'




import styles from './Project.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({handleSubmit,btnText,projectData}){
    const [categories,setCategories]= useState([])
    const [project,setProject]= useState(projectData || {})

    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
     method:"GET",
     headers:{
        'content-type':'application/json',
     },


    }).then((resp)=>resp.json())
    .then((data)=>{
        setCategories(data)
    })
    .catch((err)=> console.log(err))


    },[])

    const submit= (e)=>{
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project,[e.target.name]: e.target.value})
        console.log (project)
    }

    function handleCategory(e){
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,

        },
        })
        
    }
    
    return(
        <form onSubmit={submit} className={styles.form}>
            
            <Input type="text" 
            placeholder="insira o nome do projeto" 
            text="nome do projeto:"
            name="name"
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
            />
            

            
           
            <Input type="number" 
            placeholder="insira o orçamento total" 
            text="orçamento do projeto:"
            name="budget"
            handleOnChange={handleChange}
            value={project.budget ? project.budget : ''}
            />
            
            
            
              <Select name="category_id" 
              text="selecione a categoria:" 
              options={categories}
              handleOnChange={handleCategory}
              value={project.category ? project.category.id : ''}
              />
              
            
            
            
                <SubmitButton text={btnText}/>
            
        </form>
    )
}
export default ProjectForm