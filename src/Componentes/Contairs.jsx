import styles from './Contairs.module.css'

function Contairs(props){
    return(
        <div className={`${styles.Contairs} ${styles[props.customClass]}`}>
            {props.children}</div>

    )
}

export default Contairs