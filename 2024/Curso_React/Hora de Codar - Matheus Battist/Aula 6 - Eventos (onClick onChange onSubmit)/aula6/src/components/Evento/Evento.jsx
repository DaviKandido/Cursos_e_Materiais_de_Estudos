import Button from "./Button";

function Evento() {

    async function meuEvento() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users', [{
            method: 'GET'
        }])
        const data = await resp.json()
        console.log(data)
    }


  return (
    <div>
      <p>Click para dispara um evento:</p>
      <button onClick={meuEvento}>Ativar!</button>
      <Button text ="Primeiro Evento" onClick={meuEvento}/>
    </div>
  );
}

export default Evento;
