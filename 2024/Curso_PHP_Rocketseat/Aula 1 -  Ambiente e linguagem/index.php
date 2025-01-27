<?php

//phpinfo(); //TRaz as informações oficiais do php

echo 'Hello Word!';

function foo(){
    echo 'foo';
}

echo '<br>'; // printa a tag br no html

foo();


class Teste {

    public string $nome = 'Davi';
    public string $email = 'Davi@gmail.com';

    public function bar(){
        echo __CLASS__ . '::' . __METHOD__;

        //__CLASS__ printa qual classe foi acessada
        //__METHOD__ printa qual método foi acessada dentro da classe
    }
}


(new Teste) -> bar(); //Acesso a métodos em objetos


$teste = new Teste;

var_dump($teste); // console.log()

$teste->bar();