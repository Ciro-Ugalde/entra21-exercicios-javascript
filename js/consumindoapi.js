$.ajax({
    url: decodeURI("http://makeup-api.herokuapp.com/api/v1/products.json" + $(#param).val()),
    type: "get",
    success: (retorno) => {
        console.log(retorno);
    }
})