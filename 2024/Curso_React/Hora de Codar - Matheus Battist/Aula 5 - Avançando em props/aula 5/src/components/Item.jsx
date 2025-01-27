import styles from "../assets/scss/Item.module.scss"
import PropTypes from "prop-types"

function Item({marca, anoLancamento}){
    return(
        <>
            <li className={styles.Item}>{marca} - {anoLancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: "Faltou a marca",
    anoLancamento: 0
}

export default Item