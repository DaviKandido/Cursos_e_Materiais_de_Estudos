
var numDeAmigos = 10

switch numDeAmigos{
    case 0:
        print("1 amigo")
    case 1...5:
        print("2-5 amigos")
    case 6...10:
        print("6-10 amigos")
    default:
        print("mais de 10 amigos")
}