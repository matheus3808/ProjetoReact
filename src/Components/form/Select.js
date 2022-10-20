import styles from './Select.module.css'

function Select({text,name,options,handleOnChange,value}){
    return(
        <div className={styles.form_control}>
         <label className={styles.form_control_label} htmlFor={name}>{text}</label>
         <select name={name} 
         id={name} 
         className={styles.form_control_select} 
         onChange={handleOnChange}
         value={value || ''}>
          
          <option>selecione uma opção</option>
          {options.map((option)=>(
            <option value={option.id} key={option.id}>
                {option.name}
            </option>
          
          ))}
           
        </select>
       
        </div>
    )
}

export default Select