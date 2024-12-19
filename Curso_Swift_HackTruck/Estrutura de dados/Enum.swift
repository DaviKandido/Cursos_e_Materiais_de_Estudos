// Exemplo de definição de um enum simples
// Perceba que Enums em Swift não são apenas constantes 
// inteiras como em outras linguagens

enum CaracterEspecial: Character {
    case Tab = "\t"
    case Linefeed = "\n"
    case CarriageReturn = "\r"
}


enum Bussola {
    case Norte, Sul, Leste, Oeste
}

var direcao = Bussola.Norte // inferencia de tipo: Bussola
print(direcao)

direcao = .Leste // atribuindo novo valor
print(direcao)



enum HorarioTrem {
    case NoHorario
    case Atrasado(Int) // atrasado por alguns minutos
}

func descricao(status: HorarioTrem) {
    switch status {
    case .NoHorario:
        print("O trem está no horário")
    case .Atrasado(let min):
        print("O trem está atrasado por \(min) minutos")
    }
}

var status = HorarioTrem.NoHorario
descricao(status: status)
// Será impresso: "O trem está no horário"

status = .Atrasado(5)
descricao(status: status)
// Será impresso: "O trem está atrasado por 5 minutos"




//crie um Enum para as estações do ano, e crie uma variavel 
//chamada atual e atribua um valor do Enum à ela

enum Estacao {
    case Outono
    case Inverno
    case Verão
    case Primavera
}

var atual = Estacao.Outono
print(atual)

