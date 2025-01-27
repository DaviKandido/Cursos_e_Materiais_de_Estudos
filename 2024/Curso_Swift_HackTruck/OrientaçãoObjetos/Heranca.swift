class FormaGeometrica {
    func descricao() {
        print("Decrição de uma forma geométrica")
    }
}

class Quadrado: FormaGeometrica {
    var tamanho: Int
    
    init(tamanho: Int) {
        self.tamanho = tamanho
    }
    
    func area() -> Int {
        return tamanho * tamanho
    }

    override func descricao() {
        super.descricao()
        print("- Quadrado de area \(area())")
    }
}

class Circulo: FormaGeometrica {
    var raio: Double
    let pi = 3.14
    
    init(raio: Double) {
        self.raio = raio
    }
    
    func area() -> Double {
        return pi * (raio * raio)
    }
    
    override func descricao() {
        super.descricao()
        print("- Círculo de area \(area())")
    }
}


class Retangulo: FormaGeometrica {
    var base: Double
    var altura: Double
    
    init(base: Double, altura: Double) {
        self.base = base
        self.altura = altura
    }
    
    func area() -> Double {
        return base * altura
    }
    
    override func descricao() {
        super.descricao()
        print("- Retângulo de area \(area())")
    }
}


let quadrado = Quadrado(tamanho: 2)
let area = quadrado.area()

print("Área do quadrado é \(area)")
// Será impresso: "Área do quadrado é 4"

quadrado.descricao()
// Serão impressas as linhas:
//
// Descrição de uma forma geométrica
// - Quadrado de area 4


let circulo = Circulo(raio: 2)
circulo.descricao()


let retangulo = Retangulo(base: 2, altura: 4)
retangulo.descricao()