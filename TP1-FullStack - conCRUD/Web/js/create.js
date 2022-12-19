function guardar() {

    let i = document.getElementById("txtImg_path").value
    let c = document.getElementById("txtCategory").value
    let m = document.getElementById("txtModel").value
    let y = document.getElementById("txtYear").value
    let d = document.getElementById("txtDetail").value
    let p = parseInt(document.getElementById("txtPrice").value)
    let s = parseInt(document.getElementById("txtStock").value)
//creo un objeto
    let producto = {
        img_path: i,
        category: c,
        model: m,
        year: y,
        detail: d,
        price: p,
        stock: s
    }
    let url = "http://localhost:5000/productos"  //servidor BD local
    // con servidor PythonAnywhere
    //let url = "http://ABenaim.mysql.pythonanywhere-services.com/productos"
    //lo convierto en json
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "./administracion.html";

            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
