// classe
class CNH {
    // função construtora
    constructor(pais = '??', idade = 'Não informada', categoria = 'SEM RESGISTRO') {
        this.pais = pais.toUpperCase(),
        this.idade = idade,
        this.categoria = categoria.toUpperCase()
    }

    // método para retorno da "Class" conforme condição de entrada do objeto
    get resposta() {
        if (this.pais == 'US' || this.pais == 'CA'){
            if (this.idade < 16){
                return `No ${this.pais} com ${this.idade} anos não pode tirar carteira de motorista.`
            } else if (this.idade >= 16){ 
                return `No ${this.pais} com ${this.idade} anos pode tirar carteira de motorista.`
            } else {
                return 'Impossiver responder, faltou idade'
            }
        } else if (this.pais == 'CH' || this.pais == 'RU'){
            if (this.idade < 21){
                return `No ${this.pais} com ${this.idade} anos não pode tirar carteira de motorista.`
            } else if (this.idade >= 21){ 
                return `No ${this.pais} com ${this.idade} anos pode tirar carteira de motorista.`
            } else {
                return 'Impossiver responder, faltou idade'
            } 
        } else if (this.pais == 'BR'){
            if (this.idade < 18){
                return `No ${this.pais} com ${this.idade} anos não pode tirar carteira de motorista.`
            } else if (this.idade >= 18 && this.categoria == 'SEM RESGISTRO'){ 
                return `No ${this.pais} com ${this.idade} anos pode tirar carteira de motorista. 
Faltou cadastrar a categoria, pois esta ${this.categoria}.`
            } else if (this.idade >= 18 && this.categoria != 'SEM RESGISTRO'){
                return `No ${this.pais} com ${this.idade} anos pode tirar carteira de motorista de categoria ${this.categoria}.`
            }else { return 'Impossiver responder, faltou idade'}
        } else { return `Imposivel executar o país ${this.pais}, sigla não cadastrada. Lista de cadastro [US, CA, CH, RU e BR]`}
    }

}

// instanciando objetos na "class CNH"
let XX = new CNH();
console.log(XX.resposta);
console.log('//===========================//========================//') 
let US1 = new CNH('US');
console.log(US1.resposta);
console.log('//===========================//========================//')
let US2 = new CNH('US', 15);
console.log(US2.resposta);
console.log('//===========================//========================//')
let CA = new CNH('CA', 17);
console.log(CA.resposta);
console.log('//===========================//========================//')
let RU = new CNH('RU', 42);
console.log(RU.resposta);
console.log('//===========================//========================//')
let BR1 = new CNH('BR');
console.log(BR1.resposta);
console.log('//===========================//========================//')
let BR2 = new CNH('BR', 16, 'B');
console.log(BR2.resposta);
console.log('//===========================//========================//')
let BR3 = new CNH('BR', 18, 'A');
console.log(BR3.resposta);
console.log('//===========================//========================//')
let BR4 = new CNH('BR');
console.log(BR4.resposta);
console.log('//===========================//========================//')
let BR5 = new CNH('BR', 19,);
console.log(BR5.resposta);
console.log('//===========================//========================//')

/* 
Enunciado
Crie uma classe CNH que tenha como propriedades país e idade que, por padrão, deve ser maior ou igual a 18, 16 se for igual a US ou CA e 21 se corresponder a CH ou RU. 
Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).
*/