import Navbar from "./components/Navbar";
import Pessoa from "./components/Pessoa";
import SayMyName from "./components/SayMyName";

function App() {
  const myName = "Davi";
  const AngelaPhoto =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  const AngelaName = "Angela";

  return (
    <>
      <Navbar msg="Estudando React" />
      <SayMyName name={myName} />
      <Pessoa
        name={AngelaName}
        foto={AngelaPhoto}
        idade={25}
        profissao="Estudante"
      />
    </>
  );
}

export default App;
