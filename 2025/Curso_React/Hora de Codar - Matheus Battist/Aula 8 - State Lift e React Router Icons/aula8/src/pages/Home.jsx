import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigator = useNavigate()

    return (
        <div className="App">
            <h1 className="title">Home</h1>

            <button onClick={() => navigator("/contato")}>Ir para Contato</button>
            <p>Conteúdo da página</p>
        </div>
    );
}






