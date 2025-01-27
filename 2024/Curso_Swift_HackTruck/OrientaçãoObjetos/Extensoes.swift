
//Aqui definimos uma extensão na classe String, ou seja, todas as Strings do nosso programa
// possuem um novo método chamado “onlyVogals”
extension String {
    func onlyVogals() -> String {
        var vogals = ""
        
        for c in self { //percorre a string corrente (self)
            let letter = "\(c)"
            if (letter == "a" || letter == "e" || letter == "i" || 
                letter == "o" || letter == "u") {
                vogals += letter
            } //olha cada caractere e elimina qualquer um que não seja uma vogal
        }
        
        return vogals
    }
}


let hello = "Hello, World!"
print(hello.onlyVogals())
// Será impresso: "eoo"
