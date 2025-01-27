func multiplicaInteiros(x: Int, y: Int) -> Int {
    return x * y
}

var resultadoUm  = multiplicaInteiros(x: 2, y: 3) // retorna 6

var resultadoDois  = multiplicaInteiros(x: 2, y: "3") // Erro!


var inteiro: Int? = nil // = NUll ou Optionals
var string: String? = nil // ? indica que a variável aceita um valor nulo


// primeira forma de desempacotamento de opcionais:
let stringDeNumero1 = "Um"
let numeroInteiro1 = Int(stringDeNumero1)
let somaDeInteiros = numeroInteiro1! + 1 
/* Um erro em tempo de execução ocorrerá porque estamos tentando desempacotar um valor nil */


// segunda forma de desempacotamento de opcionais:
let stringDeNumero2 = "Dois"
let numeroInteiro2 = Int(stringDeNumero2)

if let a = numeroInteiro2 {
    print(a * 2)
}
/* nada será impresso nesse caso, pois o fluxo de execução não passará por dentro do bloco do if */
