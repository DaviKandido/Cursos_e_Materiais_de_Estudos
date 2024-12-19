let umDouble = 2.0 // tipo inferido: Double
let umaString = "Uma String" // tipo inferido: String
let umInteiro =  1 // tipo inferido: Int


let outroDouble: Double = 2.0 // tipo explicito: Double
let outroString: String = "Uma String" // tipo explicito: String
let outroInteiro: Int =  1 // tipo explicito: Int


let letraA = "A" // ao invés de um Character, temos uma String aqui

let letraB: Character = "B" // letraA é do tipo Character


// a inferência de tipos levará o compilador a considerar n 
// como uma constante Double
let n = 2.0 

// para forçar o compilador a entender o valor passado 
// na inicialização como Float, devemos explicitar o tipo
let m: Float = 2.0
