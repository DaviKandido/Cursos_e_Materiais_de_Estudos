class Bicicleta {
    let rodas = 2
    var dono: String
    
    init(dono: String) {
        // utilizamos "self.dono" para se referir a propriedade
        // já que somente "dono" se refere ao parametro String
        // do construtor
        self.dono = dono
    }

    func emprestar(para: String, horas: Int) {
        print("A bicicleta de \(dono) foi emprestada para \(para) por \(horas) horas")
    }
}

// Vamos instanciar uma bicicleta e emprestá-la
let b = Bicicleta(dono: "Matheus")
b.emprestar(para: "João", horas: 2)

// Será impresso: "A bicicleta de Matheus foi emprestada para João por 2 horas"




class Bicicleta {
    var rodas: Int
    var dono: String
    var qtdeCiclistas: Int
    
    init(dono: String, rodas: Int) {
        self.dono = dono
        self.rodas = rodas
        
        // no inicio não temos ciclista sobre a
        // bicicleta ainda
        self.qtdeCiclistas = 0
    }

    // retorna true caso seja possível dar carona
    // na bicicleta e false em caso contrário
    func darCarona(para: String) -> Bool {
        if qtdeCiclistas < quantidadeMaxima() {
            if para == dono {
                print("\(dono) subiu em sua própria bicicleta")
            } else {
                print("\(para) subiu na bicicleta de \(dono)")
            }
            qtdeCiclistas += 1
            
            return true
        } else {
            print("A bicicleta de \(dono) já está lotada! \(qtdeCiclistas) ciclista(s)!")
            
            return false
        }
    }
    
    // método que só faz sentido ser utilizado internamente
    // na classe por isso é private
    private func quantidadeMaxima() -> Int {
        if rodas > 1 {
            // 2 rodas => 1 ciclista
            // 3 rodas => 2 ciclistas
            // 4 rodas => 3 ciclistas
            // e assim por diante...
            return rodas - 1
        } else {
            // monociclo: 1 roda => 1 ciclista
            return 1
        }
    }
}

// Vamos instanciar uma bicicleta para Matheus
let b = Bicicleta(dono: "Matheus", rodas: 2)

// Matheus sobe em sua propria bicicleta
b.darCarona(para: "Matheus") 
// Será impresso: "Matheus subiu em sua própria bicicleta"

// Matheus tenta dar carona para João
b.darCarona(para: "João")
// Será impresso: "A bicicleta de Matheus já está lotada! 1 ciclista(s)!"

// Matheus reforma sua bicicleta e adiciona uma roda
// agora poderá transportar até 2 pessoas
b.rodas = 3

// Matheus dá carona para João agora com sucesso!
b.darCarona(para: "João")
// Será impresso: "João subiu na bicicleta de Matheus"

// Matheus tenta dar carona para Maria
b.darCarona(para: "Maria")
// Será impresso: "A bicicleta de Matheus já está lotada! 2 ciclista(s)!"

