import styles from"../assets/css/Pessoa.module.scss"

function Pessoa({foto, idade, name, profissao}){
    return(
        <div id={styles.pessoa}>
            <img src={foto} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa