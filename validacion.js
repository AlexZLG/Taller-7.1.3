function showAlertSuccess() {
  const alertSuccess = document.getElementById('alert-success');
  alertSuccess.classList.add('show');
  alertSuccess.classList.remove('fade');
  setTimeout(() => {
    alertSuccess.classList.remove('show');
    alertSuccess.classList.add('fade');
  }, 4000);
}

function showAlertError() {
  const alertError = document.getElementById('alert-danger');
  alertError.classList.add('show');
  alertError.classList.remove('fade');
  setTimeout(() => {
    alertError.classList.remove('show');
    alertError.classList.add('fade');
  }, 4000);
}



document.getElementById('regBtn').addEventListener('click', function () {

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email = document.getElementById('email').value.trim();
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;
  const terminos = document.getElementById('terminos').checked;

  if (
    nombre === '' ||
    apellido === '' ||
    email === '' ||
    password1 === '' ||
    password2 === ''
  ) {
    showAlertError();
    return;
  }

  
  if (password1.length < 6 || password2.length < 6) {
    showAlertError();
    return;
  }

  
  if (password1 !== password2) {
    showAlertError();
    return;
  }


  if (!terminos) {
    showAlertError();
    return;
  }

 
  showAlertSuccess();
});