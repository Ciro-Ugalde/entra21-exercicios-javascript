$.ajax({
    url: decodeURI("https://makeup-api.herokuapp.com/api/v1/products.json"),
    type: "get",
    success: (retorno) => {
        console.log(retorno);
        retorno.forEach((item) => {
            $("table").append(
                $("<tr>").append(
                    $("<img>", { src: item.image_link, width: "50px" })
                ),
                $("<td>", { text: item.name }),
                $("<td>", { text: item.description })
            )
        });
    },
    error: (motivo) => {
        console.log(motivo);
    }
})