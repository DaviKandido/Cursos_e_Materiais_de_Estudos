func primeiraLetra (nome: String) -> Character? {
    for c in nome {
        return c
    }
    return nil
}

let nomes = [
    "João",
    "Pedro",
    "Fernando",
    "Fabio",
    "Alex",
    "Marcos"
]

var agrupameto = Dictionary<Character, Array<String>>()

for nome in nomes {
    let primeiroChar = primeiraLetra(nome: nome)!
    
    if agrupameto[primeiroChar] == nil {
        agrupameto[primeiroChar] = []
    }
        agrupameto[primeiroChar]!.append(nome)
        

}

print(agrupameto)
