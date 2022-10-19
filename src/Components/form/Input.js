import styles from './Input.module.css'

function Input({text,type,name,placeholder,handleOnChange,value}){
    return(
        <div className={styles.form_control}>
         <label className={styles.form_control_label} htmlFor={name}>{text}</label>
         
         <input className={styles.form_control_input}
         type={type}
         name={name}
         id={name}
         placeholder={placeholder}
         onChange={handleOnChange}
         value={value}
         
         />
        </div>
    )
}

export default Input