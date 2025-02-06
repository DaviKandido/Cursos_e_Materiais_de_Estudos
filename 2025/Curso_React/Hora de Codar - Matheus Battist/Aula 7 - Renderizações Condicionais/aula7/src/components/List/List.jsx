import Item from "./Item"
import styles from "./List.module.scss"

function List(){

    return(
        <>
        <div className={styles.List}>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={1985}/>
                <Item marca="Bugatti" anoLancamento={1978}/>
                <Item marca="Ford" anoLancamento={1975}/>
                <Item/>
            </ul>
        </div>
        </>
    )

}

export default List