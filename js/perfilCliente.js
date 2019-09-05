const vueApp = new Vue({
	el: '#vapp',
	data() {
		return {
            clientes:[],
			info: "",
		}
	},
	mounted(){
        cliente = atob(document.cookie.split(" ")[1].split("=")[1])
        axios
        .get('http://localhost:3000/cliente/'+cliente)
        .then(response => (this.info = response.data))
        console.log(this.info)
	}
})

