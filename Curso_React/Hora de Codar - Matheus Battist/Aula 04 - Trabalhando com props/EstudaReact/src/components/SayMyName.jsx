
import styles from "../assets/css/SayMyName.module.scss"


function SayMyName(props){

    return(
        <>
        <div id={styles.sayMyName}>
            <h2>My name is: {props.name}</h2>
        </div>
        </>
    )
}

export default SayMyName