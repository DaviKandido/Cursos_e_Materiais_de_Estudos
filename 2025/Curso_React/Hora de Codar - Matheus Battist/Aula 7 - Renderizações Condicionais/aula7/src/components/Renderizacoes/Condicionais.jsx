import { useState } from "react"
import Styles from "./Condicionais.module.scss"

function Condicionais(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault()
        console.log("Testando...");
        setUserEmail(email);

    }

    return(
        <div className={Styles.Condicional}>
            <h2>Renderizando Condicionais</h2>
            <form >
                <input type="email" placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
            </form>
            {userEmail && ( 
                <div>
                    <p>O email do usuário é: {userEmail}</p>
                    <button onClick={() => setUserEmail("")} >Limpar</button>
                </div>
            )  }
        </div>
    )
}

export default Condicionais