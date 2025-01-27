
import '../assets/scss/app.scss'
import OutraLista from '../components/OutraLista/OutraLista'
import Condicionais from '../components/Renderizacoes/Condicionais'

function App() {

  const minhaLista = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]


  return (
    <>
      <div className='App'>
        <h1 className='title'>Testando Eventos</h1>
        <Condicionais/>
        <OutraLista itens={minhaLista}/>
        <OutraLista itens={[]}/>
      </div>
    </>
  )
}

export default App
