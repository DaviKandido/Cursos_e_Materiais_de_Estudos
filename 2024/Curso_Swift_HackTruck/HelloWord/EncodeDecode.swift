let codigo = [
    "a" : "b",
    "b" : "c",
    "c" : "d",
    "d" : "e",
    "e" : "f",
    "f" : "g",
    "g" : "h",
    "h" : "i",
    "i" : "j",
    "j" : "k",
    "k" : "l",
    "l" : "m",
    "m" : "n",
    "n" : "o",
    "o" : "p",
    "p" : "q",
    "q" : "r",
    "r" : "s",
    "s" : "t",
    "t" : "u",
    "u" : "v",
    "v" : "w",
    "w" : "x",
    "x" : "y",
    "y" : "z",
    "z" : "a",
    " " : " "
]

func encode(mensagem: String) -> String {
    var resultado = ""
    for c in mensagem {
        if let letraCorrespondente = codigo["\(c)"]{
            resultado += letraCorrespondente
        }
    }
    return resultado
}

func decode(mensagem: String) -> String {
    var codigoInverso = Dictionary<String, String>()
    for (k, v) in codigo {
        codigoInverso[v] = k
    }

    var resultado = ""

    for c in mensagem {
        if let letraCorrespondente = codigoInverso["\(c)"]{
            resultado += letraCorrespondente
        }
    }
    return resultado

}


let mensagemOriginal = "ola mundo"
let mensagemCodificada = encode(mensagem: mensagemOriginal)
let mensagemDecodificada = decode(mensagem: mensagemCodificada)

print("Original:", mensagemOriginal)
print("Codificada:", mensagemCodificada)
print("Decodificada:", mensagemDecodificada)