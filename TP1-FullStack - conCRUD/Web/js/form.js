var inputs= document.getElementsByClassName('form_input');
for(var i=0; i<inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        }
    })


const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tel: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
}

function validacion() {
var nombre, apellido, provincia, email, mensaje, tel, parrafo;
nombre= document.getElementById("nombre_contacto").value;
apellido= document.getElementById("apellido_contacto").value;
provincia= document.getElementById("provincias");
email= document.getElementById("email").value;
mensaje= document.getElementById("mensaje").value;
tel= document.getElementById("telefono").value;
parrafo= document.getElementById("warnings");

if (nombre === "" || apellido === "" || provincia === "" || email === "" || mensaje === ""){
    parrafo.innerHTML +=`<i class="fa-sharp fa-solid fa-triangle-exclamation"></i><b><i>Todos los campos son requeridos<b> <br>`
    return false;
} 
else if (!expresiones.nombre.test(nombre)){
    swal({
        text:'El campo Nombre solo debe contener letras',
        icon:'error',
    });
    return false;
}
else if (!expresiones.apellido.test(apellido)){
    swal({
        text:'El campo Apellido solo debe contener letras',
        icon:'error',
    });
    return false;
}
else if (apellido.length>20){
    alert("El apellido es muy largo");
    return false;
}
else if (email.length>40){
    alert("El correo es muy largo");
    return false;
}
else if (!expresiones.correo.test(email)){
    swal({
        text:'Correo invalido. ejemplo@dominio.com',
        icon:'error',
    });
   
    return false;
}
else if (!expresiones.tel.test(tel)){
    swal({
        text:'Teléfono invalido. Por favor ingrese un número valido',
        icon:'error',
    });
    return false;
}
else{
    swal({
        text:'Mensaje enviado con éxito',
        icon:'success',
        time:1500,
    });
}
}
}
