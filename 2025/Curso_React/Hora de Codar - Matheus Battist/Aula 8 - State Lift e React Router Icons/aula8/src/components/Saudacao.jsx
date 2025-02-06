export default function Saudacao({nome}) {


  function gerarSaudacao(){
    return `Olá ${nome}`;
  }
  return (
    <>
      {nome && <p>{gerarSaudacao()}</p>}
    </>
  );
}
''