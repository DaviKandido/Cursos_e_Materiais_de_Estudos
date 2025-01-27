// Exemplo de do-while: suponha que temos uma função funcQuePodeRetornarUmInt() que retorne 
// um Int?, ou seja, ela pode retornar um inteiro ou nil. Queremos iterar, chamando-a até que
// um inteiro seja de fato retornado

func funcQuePodeRetornarUmInt() -> Int? {
    return 1
}

var intOpcional: Int? // inicialmente nil, pois não atribuímos nenhum valor

repeat {
    intOpcional = funcQuePodeRetornarUmInt()
} while intOpcional == nil



// Exemplo de while: suponha que "vetor" seja uma coleção (array) de N elementos, vamos 
// imprimir todos os valores de "vetor"

var vetor: [Int] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // cria um array de 10 elementos
var i = 0
let N = vetor.count

print("\n---------Print com while---------\n")

while i < N {
    print("O elemento atual vale \(vetor[i])")
    i += 1
}


// Exemplo de for: suponha que "vetor" seja uma coleção (array) de N elementos, vamos 
// imprimir todos os valores do "vetor"

print("\n---------Print com for---------\n")

for elem in vetor {
    print("O elemento atual vale \(elem)")
}


for i in 0...2 {
    print("i=\(i)")
}
