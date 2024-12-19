let precosDosProdutos = ["Livro": 20.0, "Lapiseira": 2.0, "Caneta": 4.0] 
// tipo inferido de precosDosProdutos: Dictionary<String, Double>
// chaves String e valores Double, também pode ser escrito como 
// [String: Double] em Swift


let precosDosProdutosImutavel = ["Livro": 20.0, "Lapiseira": 2.0, "Caneta": 4.0] 
// precosDosProdutosImutavel["Borracha"] = 0.5 // Erro! Dicionário é imutável!

var precosDosProdutosMutavel = ["Livro": 20.0, "Lapiseira": 2.0, "Caneta": 4.0] 
precosDosProdutosMutavel["Borracha"] = 0.5 

/* precosDosProdutosMutavel agora vale: ["Livro": 20.0, "Lapiseira": 2.0, "Caneta": 4.0, "Borracha": 0.5] */


if let preco = precosDosProdutosMutavel["Borracha"] {
    print("O preço da borracha é: \(preco)")
    // será impresso "O preço da borracha é: 0.5"
}


for (chave, valor) in precosDosProdutosMutavel {
    print("O preço de \(chave) é: \(valor)")
}

// Será impresso:
// O preço de Lapiseira é: 2.0
// O preço de Borracha é: 0.5
// O preço de Livro é: 20.0
// O preço de Caneta é: 4.0



// Esse é um jeito de se iniciar um dicionário vazio: com chaves do
// tipo String e valores do tipo Double:
var precosDosProdutos2 = Dictionary<String, Double>()
precosDosProdutos2["Borracha"] = 0.5
precosDosProdutos2["Lapis"] = 1.5
print(precosDosProdutos2)
// Será impresso: "[Borracha: 0.5]"

// Esse é um outro jeito de se iniciar um dicionário em Swift:
var precoCombustivel = [String: Double]()
precoCombustivel["Gasolina"] = 3.555
print(precoCombustivel)
// Será impresso: "[Gasolina: 3.555]"
