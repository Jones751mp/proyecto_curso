$("#ingresar").click(function (e) {
    e.preventDefault();

    const email = document.getElementById("email")

    const User = {
        email,
        password
    }

    $.ajax({
        type: "POST",
        url: "http:/localhost:4000/ingresar",
        "content-type":"application/json",
        data: User,
    })
    .done(res => {
        console.log(res)
    })
});