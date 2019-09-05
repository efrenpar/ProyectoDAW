const vueApp = new Vue({
  el: '#vapp',
  data() {
	 
  },
  mounted(){
		axios
		  .get('http://localhost:3000/usuarios')
		  .then(response => (this.usuarios = response.data))
  },
  methods:{
	
  }
})
