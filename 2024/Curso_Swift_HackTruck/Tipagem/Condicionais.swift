if 1 < 2 {
    print("1 é menor do que 2...")
    
    if 2 > 1 {
        print("...2 é maior do que 1...")
        
        if 1 == 1 && 2 == 2 {
            print("...1 é igual a 1 e 2 é igual a 2...")
            
            if 1 != 2 {
                print("...1 é diferente de 2...")
                
                if 1 >= 1 && 2 <= 2 {
                  print("...1 é maior ou igual a 1 e 2 é menor ou igual a 2...")
                }
            }
        }
    }
}

let resultado = (1 > 2) ? "1 é maior que 2" : "1 não é maior que 2"
print("\n" + resultado) // será impresso "1 não é maior que 2"



var temperatura = 21

if temperatura > 30 {
    print("\nEstá muito quente!")
} else if temperatura > 20 {
    print("\nEstá confortável.")
} else {
    print("\nEstá frio!")
}


switch temperatura {
case 30:
    print("\nTrinta graus.")
case 29:
    print("\nVinte e nove graus.")
default:
    print("\nOutra temperatura.")
}


temperatura = 29

switch temperatura {
case 30...50:
    // 30...50 define um intervalo (tipo Range) que vai de 30 até 50 (inclusive)
    print("\nMuito quente!")
case 29:
    // temperatura exatamente igual a 29 graus
    print("\nVinte e nove graus.")
case 20..<29:
    // 20..<29 define um Range que vai de 20 até 28 (29 é excluído nesse caso)
    print("\nTemperatura confortável.")
default:
    print("\nOutra temperatura.")
}


