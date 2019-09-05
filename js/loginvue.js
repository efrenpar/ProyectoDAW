const vueApp = new Vue({
  el: '#vapp',
  data() {
	  return {
		  input:{
		  username: "",
		  password: ""
		  },
		usuarios : [],
		isLogged: false
	 }
  },
  mounted(){
		axios
		  .get('http://localhost:3000/usuarios')
		  .then(response => (this.usuarios = response.data))
  },
  methods:{
	  login() {
		  for(var i = 0; i<this.usuarios.length;i=i+1){
			  if(this.input.username != "" && this.input.password != "") {
        if(this.input.username == this.usuarios[i]['nickname']&& this.input.password == this.usuarios[i]['password']) {
			console.log(this.usuarios[i]['rol']);
			if(this.usuarios[i]['rol'] == 'admin'){
				window.location.href = 'http://localhost:3001/'
			}else{
				window.location.href = '/perfil'
			}
        } else {
            console.log("The username and / or password is incorrect");
        }
    } else {
        console.log("A username and password must be present");
    }
			  
		  }
	  }
  }
})

