const vueApp = new Vue({
	el: '#signUp',
	data() {
		return {
            
                nombre:"",
                apellido:"",
                email:"",
                password:"",
                username:""
            
		}
    },
    methods:{
        registrar(){
            
            
            if(this.nombre!="" && this.apellido!="" && this.email!="" && this.password!="" && this.username!= ""){
                    axios.post('http://localhost:3000/cliente',{
                        nickname: this.username,
                        password:this.password,
                        nombre:this.nombre,
                        apellido:this.apellido,
                        correo:this.email,
                        rol:'cliente',
                        id:10
                    }).then(result => {window.location.href = '/'},300).catch(err=>{
                        console.log(err)
                    })
            }

        }
    }
})