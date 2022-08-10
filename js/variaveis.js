procedimento(); 
bemVindo("Ciro");
bemVindo(true);
bemVindo(33);
bemVindo(bemVindo);
bemVindo(1.70);

login("ciro", 1234);
maiorDeIdade(17);

let resultado = maiorDeIdade(18);
console.log(resultado);

console.log(maiorDeIdade(18));

let concatenado = maiorDeIdade(15);
console.log(concatenado);

function procedimento() { 
}

procedimento(); 

function bemVindo(nome) {

    console.log(typeof (nome));
    console.warn("Bem vindo " + nome); 
}

function login(userName, password) {
    console.error("O usuário " + userName + " cuja senha é " + password + " está inadimplente, não pode conectar");
}

function maiorDeIdade(idade) {
    if (idade < 18) {
        return "Menor de idade"

    } else {
        return "Maior de idade"
    }
}

console.log("========================================================");

let listar = [];
console.log(listar);
let nomes = ["Ciro", "Alexsandro", "Lucas", "Stephanie"];
console.log(nomes);

console.log("========================================================");

function definirArray() {
    
}

function listarFor(){
    for (let contador = 0; contador < lista.length; contador ++) {
        console.log("Repetindo com FOR o índice "+contador+" = " + lista[contador]);
    }
    console.log("==============");
    lista.forEach(item => {
        console.log("Repetindo com ForEach "+ item);
    })
}
