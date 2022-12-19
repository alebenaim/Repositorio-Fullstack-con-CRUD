if (document.getElementById("app")) {
    const { createApp } = Vue

    createApp({
        data() {
            return {
                productos: [],
                errored: false,
                loading: true,
                url: "http://localhost:5000/productos" //BD Local
                 // con servidor PythonAnywhere
                //url: "http://ABenaim.mysql.pythonanywhere-services.com/productos"
                }
        },
        methods: {
            fetchData(url) {    //trae los datos - no tiene parametros
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.productos = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(producto) {
                const url = 'http://localhost:5000/productos/' + producto;  //concateno el id a borrar
                //servidor BD PythonAnywhere
                //const url = 'http://ABenaim.mysql.pythonanywhere-services.com/productos/' + producto;  //concateno el id a borrar
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)  //fetch con opciones ==> borra
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        }
    }).mount('#app')
}

