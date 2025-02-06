import './App.css';

function App() {

  const name = 'Davi'

  const nameNEW = name.toUpperCase()


  function soma(a, b){
    return a+ b
  }

  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GMjhA35tyY51Me29SCdQiNeB0jpyS0840A&s"


  return (
    <div className="App">
      <h1>Olá React!</h1>
      <h2>Alterando o JSX</h2>
      <p >meu nome é {name} </p>
      <p >meu nome é {nameNEW} </p>
      <p>Soma: {soma(2, 3)}</p>
      <img src={url} alt="Minha Imagem" />
      
    </div>
  );
}

export default App;
