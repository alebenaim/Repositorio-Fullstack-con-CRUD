var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario, los particiona y va dejando en un arreglo del tipo matriz
console.log(args)
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("txtId").value = decodeURIComponent(parts[0][1])
document.getElementById("txtImg_path").value=decodeURIComponent(parts[1][1])
document.getElementById("txtCategory").value=decodeURIComponent(parts[2][1])
document.getElementById("txtModel").value=decodeURIComponent(parts[3][1])
document.getElementById("txtYear").value=decodeURIComponent(parts[4][1])
document.getElementById("txtDetail").value=decodeURIComponent(parts[5][1])
document.getElementById("txtPrice").value=decodeURIComponent(parts[6][1])
document.getElementById("txtStock").value=decodeURIComponent(parts[7][1])

function modificar() {
    let id = document.getElementById("txtId").value
    let i = document.getElementById("txtImg_path").value
    let c = document.getElementById("txtCategory").value
    let m = document.getElementById("txtModel").value
    let y = document.getElementById("txtYear").value
    let d = document.getElementById("txtDetail").value
    let p = parseInt(document.getElementById("txtPrice").value)
    let s = parseInt(document.getElementById("txtStock").value)
   
    let producto = {
        img_path: i,
        category: c,
        model: m,
        year: y,
        detail: d,
        price: p,
        stock: s
    }
    let url = "http://localhost:5000/productos/"+id //servidor BD Local
    //Servidor BD Python Anywhere
    //let url = "http://ABenaim.mysql.pythonanywhere-services.com/productos/"+id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            location.href = "./administracion.html";
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
