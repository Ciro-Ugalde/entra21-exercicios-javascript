console.group('Utilizando jQuery');


console.log($("#texto_1"));
console.log($("#texto_1").text());

console.groupEnd();

console.group('Utilizando jQuery para alterar o conteúdo');
$("#texto_2").text("Escrito com jQuery")
console.log($("#texto_2").text());
console.groupEnd();

console.log("===================");

console.group('Lendo com jQuery');
let lista = $("p")
console.log(lista);
console.log(lista.text());

$("p").each(function () {
    console.log(this.textContent);
})
console.groupEnd();

console.log("===================");

console.group('Button criado com com jQuery');
$("<button>", {
    text: "Click aqui",
    class: "btn btn-outline-danger"
}).appendTo("body")

$("body").append(
    $("<br>"),
    $("<b>", { text: "Tá em negrito, não?!" }),
    $("<br>"),
    $("<i>", { text: "Prefere em itálico?" }),
)
console.groupEnd();

console.group('Vamos inserir mais umas coisinhas com jQuery');
$("<ul>").append(
    $("<li>", {
        text: "Aqui tem 1"
    }),

    $("<li>", {
        text: "Aqui é o 2"
    }),

    $("<li>", {
        text: "E aqui o 3"
    })
).appendTo("body")
console.groupEnd();

console.log("====================================");