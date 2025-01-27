func funcaoSemParamESemRetorno() {
    print("Nada será retornado")
}

func funcaoSemParamEComRetornoInt() -> Int {
    return 0
}

func funcaoComParamEComRetornoInt(param: Int) -> Int {
    return param + 1
}




// Função que recebe uma String como parâmetro e
// imprime "String passada como parametro: " seguido
// de seu valor.
func imprima(str: String) {
    print("String passada como parametro: \(str)")
}

// Atribui-se a função anterior a uma constante 
let funcao = imprima

// Agora tanto funcao(str) como imprima(str) chamam
// os mesmos comandos, a mesma função!
funcao("Hello World!") // irá imprimir "String passada como parametro: Hello World!"


// Função que recebe uma String como parâmetro e
// imprime "String passada como parametro: " seguido
// de seu valor.

// Função que recebe uma outra função como parametro
func funcaoQueChamaFuncaoComHelloWorld(funcao: (String) -> ()) {
    // chamando a função
    funcao("Hello World!")
}

// Você pode chamar a função passando a outra função como parametro
funcaoQueChamaFuncaoComHelloWorld(funcao: imprima)




let vetor = [1, 2, 3, 4]

func duplicador(i: Int) -> Int {
    return i * 2
}

let vetorDuplicado = vetor.map(duplicador) 

print (vetorDuplicado)




func buscarLatitudeLongitude() -> (String, Double, Double) {
    return ("Campinas", -22.002, -25.012)
}

let (cidade, lat, lng) = buscarLatitudeLongitude()
// Agora, temos: cidade = "Campinas, lat = -22.002 e lng = -25.012


print(cidade)
print(lat)
print(lng)
