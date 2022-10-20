import styles from '../Project/Project.module.css'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import LinkButton from '../layout/LinkButton'
import stylesButton from '../pages/ProjetoEdicao.module.css'

import {useState} from 'react'


function ServiceForm({handleSubmit,btnText, projectData,onClick}){
  
    const[service,setService]=useState({})

    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service,[e.target.name]:e.target.value})
    }

    
    function Reload(){
        window.location.reload()
       
    }


    return(
        <div>
        <form onSubmit={submit} className={styles.form}>
            <Input
            type="text"
            text="Nome do serviço"
            name="name"
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange}
            />
            <Input
            type="number"
            text="Custo do serviço"
            name="cost"
            placeholder="Insira o valor total"
            handleOnChange={handleChange}
            />
            <Input
            type="text"
            text="Descrição do serviço"
            name="description"
            placeholder="Descreva o serviço"
            handleOnChange={handleChange}
            />
            <button  className={stylesButton.btn} onClick={Reload}>adicionar serviço</button>
            
        </form>
        
        </div>
    )
    }
    
export default ServiceForm