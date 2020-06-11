function mostrarMensaje(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value

    if (nombre == "" ||apellido == "" ||email == ""){
        alert('Por favor llene los datos del formulario');
    }else{
        var div= document.getElementById('mostrarMensaje');
        div.style.width = '100%';
        div.style.height = '22px';
        div.style.color = 'white';
        div.style.textAlign = 'center';
        div.style.backgroundColor = 'gray';
        div.style.paddingTop = '0px';
        div.style.paddingBottom = '1px';
        div.style.justifyContent = 'center';
        div.innerHTML = "gracias por escribirnos " + nombre + " " + apellido;
      }
    }
