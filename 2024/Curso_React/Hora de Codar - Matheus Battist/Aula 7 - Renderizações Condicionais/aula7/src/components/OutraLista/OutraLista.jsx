import Proptypes from "prop-types"


export default function OutraLista({itens}){

    return(
        <>
            <h3>Lista dinâmica com array</h3>
            {
                itens.length > 0 ?
                itens.map((item,index) => (<p key={index} >{item}</p>) ) :
                (<p>Lista vazia</p>)
            }
        </>
    )
}

OutraLista.propTypes = {
    itens: Proptypes.array.isRequired
}



