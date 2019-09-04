const vueApp = new Vue({
  el: '#vapp',
  data() {
	  return {
		  input:{
		  username: "",
		  password: ""
	  },
	  usuarios = []
	 }
  },
  mounted{
		axios
		  .get('http://localhost:3000/usuarios')
		  .then(response => (this.usuarios = response.data))
  },
  methods:{
	  login() {
		  for(var i = 0; i<this.usuarios.length;i=i+1){
			  if(this.input.username != "" && this.input.password != "") {
        if(this.input.username == this.usuarios[i].split(" ")[0] && this.input.password == this.usuarios[i].split(" ")[1]) {
			if(this.usuarios[i].split(" ")[2] == 'admin'){
				window.location.href = 'localhost:3001'
			}else{
				window.location.href = '/'
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

/*
if(this.input.username != "" && this.input.password != "") {
        if(this.input.username == "manuella" && this.input.password == "1234") {
            window.location.href = '/'
        } else {
            console.log("The username and / or password is incorrect");
        }
    } else {
        console.log("A username and password must be present");
    }*/