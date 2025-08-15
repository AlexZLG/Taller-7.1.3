function showAlertSuccess() {
    const alert = document.getElementById("alert-success");
    alert.classList.add("show");
    setTimeout(() => {
        alert.classList.remove("show");
    }, 5000);
}

function showAlertError() {
    const alert = document.getElementById("alert-danger");
    alert.classList.add("show");
    setTimeout(() => {
        alert.classList.remove("show");
    }, 5000); 
}

document.getElementById("regBtn").addEventListener("click", function() {

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;


    if (
        nombre !== "" &&
        apellido !== "" &&
        email !== "" &&
        password1 !== "" &&
        password2 !== "" &&
        password1.length >= 6 &&
        password1 === password2 &&
        terminos
    ) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});