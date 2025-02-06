import { useState } from "react";
import styles from "./Form.module.scss";

function Form() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrarUsuario(event) {
    event.preventDefault();
    if (nome === "" || senha === "") {
      alert("Preencha todos os campos");
      return;
    }
    console.log({
      nome: nome,
      senha: senha,
    });
  }

  return (
    <div className={styles.Form}>
      <h1>Meu cadastro: </h1>
      <form onSubmit={cadastrarUsuario}>

        <div>
            <label htmlFor="name">nome: </label>
            <input
            id="name"
            name="name"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setNome(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="password">senha: </label>
            <input
            id="password"
            name="password"
            type="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setSenha(e.target.value)}
            />
        </div>

        <input type="submit" value={"Enviar"} />
      </form>
    </div>
  );
}

export default Form;
