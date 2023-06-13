$("#delete").click(function (e) { 
    let idPlato = $(this).data("id")

    $.ajax({
        type: "DELETE",
        url: `http://localhost:3000/platos/${idPlato}`
    })
    .done(response => {
        console.log(response)
        location.href = "http://localhost:3000/platos"
    })
});