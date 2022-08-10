console.group('Eventos com clicks');
$("p").on("click", function () {
    alert("curioso!")
})

$("li").on("click", function () {
    console.warn("ta muito curioso!!")
})
console.groupEnd();

console.group('Mais button');

$("#add").on("click", function () {
    $("<p>", {
        text: "Qual o problema?", class: "alert alert-danger"

    }).appendTo("body")

})

$("#alert").on("click", function () {
    $(".alert").remove()
})
console.groupEnd();

console.log("==========Calculando==========");

function calcular(operacao) {

    let a = Number(prompt("Primeiro Numero"));
    let b = Number(prompt("Segundo Numero"));

    switch (operacao) {

        case "+":
            somar(a, b);
            break;
        case "-":
            subtrair(a, b);
            break;
        case "*":
            multiplicar(a, b);
            break;
        case "/":
            dividir(a, b);
            break;
        default:
            alert("Essa operação nao existe :" + operacao)
            break;
    }
}

function somar(a, b) {
    alert(Number(a) + Number(b));
}
function subtrair(a, b) {
    alert(Number(a) - Number(b));
}
function multiplicar(a, b) {
    alert(Number(a) * Number(b));
}
function dividir(a, b) {
    alert(Number(a) / Number(b));
}


