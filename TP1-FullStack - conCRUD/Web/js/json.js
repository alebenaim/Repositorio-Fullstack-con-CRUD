const { createApp } = Vue

createApp({
data() {
    return {
    catalogo: [],
    errored: false,
    loading: true,
    url: "http://127.0.0.1:5000/productos" 
     }
},
    methods: {
    fetchData(url) {

        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.catalogo=data; // datos del catalogo
                this.loading = false;
            })
            .catch(err => {
                this.errored = true
            })
    }
},
    created(){

    this.fetchData(this.url) 
}

}).mount('#app')